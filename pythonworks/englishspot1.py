import fitz  # PyMuPDF
import json
import re

def extract_english_pdf_to_json(pdf_path, output_json="sentenceimprovement2.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # 1️⃣ Extract and clean text from all pages
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text = page.get_text("text")

        # Remove watermarks / headers / page numbers
        text = re.sub(r"www\.ssccglpinnacle\.com.*", "", text)
        text = re.sub(r"Download Pinnacle Exam Preparation App.*", "", text)
        text = re.sub(r"@ebookstore01.*", "", text)
        text = re.sub(r"Pinnacle\s*Spot the Error", "", text)
        text = re.sub(r"Page\s*\d+", "", text)

        # Remove hidden unicode marks
        text = re.sub(r"[\u202a-\u202e\u200e\u200f]+", "", text)
        text = re.sub(r"PDF|LRQ|LRO|RLO", "", text, flags=re.IGNORECASE)

        all_text += text + "\n"

    pdf_document.close()

    # 2️⃣ Split by exam sections (SSC CHSL, CGL, CPO, etc.)
    section_pattern = re.compile(r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d)?))", re.IGNORECASE)
    sections = section_pattern.split(all_text)

    data = []
    q_id = 1

    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip()
        content = sections[i + 1].strip()

        # Separate question and solution portions
        parts = re.split(r"(?:Solutions?|SOLUTION)\s*[:-]", content, flags=re.IGNORECASE, maxsplit=1)
        question_part = parts[0]
        solution_part = parts[1] if len(parts) > 1 else ""

        # Extract question blocks: Q.1 ... Q.2 ...
        question_blocks = re.findall(r"Q\.?\s*(\d+)\.?\s*(.*?)(?=Q\.?\s*\d+\.|$)", question_part, re.DOTALL)

        # Extract solution blocks: Sol.1.(a) ...
        solution_blocks = re.findall(r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)", solution_part, re.DOTALL)
        solution_map = {
            num.strip(): {"ans": ans.lower(), "text": sol.strip()} for num, ans, sol in solution_blocks
        }

        for q_num, q_text in question_blocks:
            # Clean extra spaces
            q_text = re.sub(r"\s+", " ", q_text).strip()

            # Extract status like "SSC CHSL Tier II (10/01/2024)"
            status_match = re.search(
                r"(SSC\s*[A-Za-z ]*\s*\d{0,4}\s*(?:Tier\s*[-–]?\s*\d+)?\s*\(?\d{0,2}/?\d{0,2}/?\d{0,4}\)?)",
                q_text,
                re.IGNORECASE,
            )
            status = status_match.group(1).strip() if status_match else exam_name
            q_text = q_text.replace(status, "").strip()

            # ✅ Extract all four options correctly
            options_found = re.findall(r"\(([a-dA-D])\)\s*(.*?)(?=\([a-dA-D]\)|$)", q_text, re.DOTALL)
            options = [{"text": opt[1].strip()} for opt in options_found]

            # Sometimes options are broken across lines — fix missing (a)-(d)
            if len(options) < 4:
                fixed_opts = re.findall(r"\([a-dA-D]\)[^()]+", q_text)
                options = [{"text": re.sub(r"\([a-dA-D]\)", "", o).strip()} for o in fixed_opts]

            # Extract question part (text before first (a))
            question_text = re.split(r"\([aA]\)", q_text)[0].strip()

            # Map solution to correct answer
            ans_letter = solution_map.get(q_num, {}).get("ans", "")
            solution_text = solution_map.get(q_num, {}).get("text", "")

            answer = ""
            if ans_letter and len(options) >= (ord(ans_letter) - 96):
                answer = options[ord(ans_letter) - 97]["text"]

            # Construct final JSON block
            q_data = {
                "id": q_id,
                "question": {"type": "text", "content": question_text},
                "options": options,
                "answer": answer,
                "solution": {"type": "text", "content": solution_text},
                "status": status,
                "videoUrl": "",
            }

            data.append(q_data)
            q_id += 1

    # 4️⃣ Save JSON
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} questions. Saved to '{output_json}'.")


# Example usage
extract_english_pdf_to_json("C:/Users/sunny/Downloads/sentenceimprovement.pdf")
