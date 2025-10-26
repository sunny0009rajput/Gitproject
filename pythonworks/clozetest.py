import fitz  # PyMuPDF
import json
import re

def extract_english_pdf_to_json(pdf_path, output_json="comprehension2.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # ✅ Step 1: Extract and clean text
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text = page.get_text("text")

        # Fix hyphen and newline issues
        text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)
        text = re.sub(r"(?<=\w)\n(?=\w)", " ", text)
        text = text.replace("\n", "|||")  # 👈 add fixed separator for manual adjustments

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
    section_pattern = re.compile(r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d+)?))", re.IGNORECASE)
    sections = section_pattern.split(all_text)
    data = []
    q_id = 1

    # ✅ Step 3: Process each section
    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip()
        content = sections[i + 1].strip()

        # Split into question & solution parts
        parts = re.split(r"(?:Solutions?|SOLUTION)\s*[:-]", content, flags=re.IGNORECASE, maxsplit=1)
        question_part = parts[0]
        solution_part = parts[1] if len(parts) > 1 else ""

        # Extract solution mapping
        solution_blocks = re.findall(r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)", solution_part, re.DOTALL)
        solution_map = {num.strip(): {"ans": ans.lower(), "text": sol.strip()} for num, ans, sol in solution_blocks}

        # Extract sets (e.g. SET-1, SET-2)
        set_blocks = re.findall(r"(SET[-–]?\s*\d+\.?.*?)(?=(?:SET[-–]?\s*\d+|$))", question_part, re.DOTALL | re.IGNORECASE)

        for set_block in set_blocks:
            set_match = re.search(r"(SET[-–]?\s*\d+)", set_block)
            set_name = set_match.group(1).strip() if set_match else ""

            # Extract passage (the text between Q.(01...) and SSC)
            passage_match = re.search(r"\)\s*(.*?)\s*SSC\s", set_block, re.DOTALL)
            passage_text = passage_match.group(1).replace("|||", " ").strip() if passage_match else ""

            # ✅ Extract each question line like "Q.1. (a)..."
            question_lines = re.findall(r"Q\.?\s*(\d+)\.?\s*(.*?)\s*(?=Q\.?\s*\d+\.|$)", set_block, re.DOTALL)

            for num, qline in question_lines:
                # ✅ Extract all (a)-(d) options from that line
                option_matches = re.findall(r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)", qline, re.DOTALL)
                options = [{"text": opt.strip()} for _, opt in option_matches]

                # ✅ Build question text (passage + set info)
                question_text = f"{set_name}. {passage_text}"

                # ✅ Map answer from solutions
                ans_letter = solution_map.get(num, {}).get("ans", "")
                solution_text = solution_map.get(num, {}).get("text", "")
                answer = ""
                if ans_letter:
                    index = ord(ans_letter) - 97
                    if 0 <= index < len(options):
                        answer = options[index]["text"]

                # ✅ Build JSON entry
                q_data = {
                    "id": q_id,
                    "question": {"type": "text", "content": question_text},
                    "options": options,
                    "answer": answer,
                    "solution": {"type": "text", "content": solution_text},
                    "status": exam_name,
                    "videoUrl": ""
                }
                data.append(q_data)
                q_id += 1

    # ✅ Step 4: Save JSON
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} questions. Saved to '{output_json}'.")


# ✅ Example usage
extract_english_pdf_to_json("C:/Users/sunny/Downloads/comprehension.pdf")
