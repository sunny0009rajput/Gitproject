import fitz  # PyMuPDF
import json
import re

def extract_english_pdf_to_json(pdf_path, output_json="sentenceimprovement12.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # ✅ Step 1: Extract text and insert fixed separators for manual cleanup
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text = page.get_text("text")

        # Fix hyphen and newline issues
        text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)
        text = re.sub(r"(?<=\w)\n(?=\w)", " ", text)
        text = text.replace("\n", "|||")  # 👈 fixed separator for manual cleanup

        # Remove unnecessary elements
        text = re.sub(r"[\u202a-\u202e\u200e\u200f]+", " ", text)
        text = re.sub(r"www\.ssccglpinnacle\.com.*", "", text)
        text = re.sub(r"Download Pinnacle Exam Preparation App.*", "", text)
        text = re.sub(r"@ebookstore01.*", "", text)
        text = re.sub(r"Pinnacle\s*Spot the Error", "", text)
        text = re.sub(r"Page\s*\d+", "", text)

        text = re.sub(r"\s{2,}", " ", text).strip()
        all_text += text + "\n"

    pdf_document.close()

    # ✅ Step 2: Split by exam sections
    section_pattern = re.compile(
        r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d+)?))",
        re.IGNORECASE
    )
    sections = section_pattern.split(all_text)
    data = []
    q_id = 1

    # ✅ Step 3: Process each section
    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip()
        content = sections[i + 1].strip()

        # Split question & solution
        parts = re.split(r"(?:Solutions?|SOLUTION)\s*[:-]", content, flags=re.IGNORECASE, maxsplit=1)
        question_part = parts[0]
        solution_part = parts[1] if len(parts) > 1 else ""

        question_blocks = re.findall(r"Q\.?\s*(\d+)\.?\s*(.*?)(?=(?:Q\.?\s*\d+\.|$))", question_part, re.DOTALL | re.IGNORECASE)
        solution_blocks = re.findall(r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)", solution_part, re.DOTALL | re.IGNORECASE)

        solution_map = {
            num.strip(): {"ans": ans.lower(), "text": sol.strip()} for num, ans, sol in solution_blocks
        }

        for q_num, q_text in question_blocks:
            q_text = re.sub(r"(\w)/(\w)", r"\1 / \2", q_text)
            q_text = re.sub(r"\s+", " ", q_text).strip()

            # ✅ Extract main status (SSC ... (DD/MM/YYYY))
            status_match = re.search(
                r"(SSC\s*[A-Za-z ]*\s*(?:Tier\s*[-–]?\s*\d+)?\s*\(?\d{1,2}\s*/\s*\d{1,2}\s*/\s*\d{4}\)?)",
                q_text,
                re.IGNORECASE,
            )
            status = status_match.group(1).strip() if status_match else exam_name

            # ✅ Capture shift or time (1st–4th Shift, Morning, etc.)
            shift_match = re.search(
                r"\b(1st|2nd|3rd|4th)\s*Shift\b|\b(Morning|Evening|Afternoon)\b",
                q_text,
                re.IGNORECASE,
            )
            if shift_match:
                shift_text = shift_match.group(0).strip()
                status = f"{status} {shift_text}"
                q_text = re.sub(re.escape(shift_text), "", q_text)

            # ✅ Capture level (Graduate Level, Higher Secondary, Matric Level)
            level_match = re.search(
                r"\b(Graduate\s*Level|Higher\s*Secondary|Matric\s*Level)\b",
                q_text,
                re.IGNORECASE,
            )
            if level_match:
                level_text = level_match.group(0).strip()
                status = f"{status} {level_text}"
                q_text = re.sub(re.escape(level_text), "", q_text)

            # Remove status text from question
            if status_match:
                q_text = q_text.replace(status_match.group(0), "")
            q_text = re.sub(r"\s{2,}", " ", q_text).strip(" .")

            # ✅ Extract options
            options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)", q_text, re.DOTALL)
            options = [{"text": opt[1].strip()} for opt in options_pattern]

            # Question text before (a)
            question_text = re.split(r"\([aA]\)", q_text)[0].strip()

            # Map solution
            ans_letter = solution_map.get(q_num, {}).get("ans", "")
            solution_text = solution_map.get(q_num, {}).get("text", "")
            answer = ""
            if ans_letter and len(options) >= (ord(ans_letter) - 96):
                answer = options[ord(ans_letter) - 97]["text"]

            q_data = {
                "id": q_id,
                "question": {"type": "text", "content": question_text},
                "options": options,
                "answer": answer,
                "solution": {"type": "text", "content": solution_text},
                "status": status.strip(),
                "videoUrl": "",
            }

            data.append(q_data)
            q_id += 1

    # ✅ Step 4: Save output
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} questions. Saved to '{output_json}'.")
    print("⚙️ Use '|||' in Notepad Replace to fix spacing manually where needed.")

# Example usage
extract_english_pdf_to_json("C:/Users/sunny/Downloads/sentenceimprovement.pdf")
