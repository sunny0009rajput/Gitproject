import fitz  # PyMuPDF
import json
import re

def extract_english_pdf_to_json(pdf_path, output_json="spoterror10.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # 1️⃣ Extract and clean text
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text = page.get_text("text")

        # Fix line breaks and spacing
        text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)
        text = re.sub(r"(?<=\w)\n(?=\w)", " ", text)
        text = text.replace("\n", " ")

        # Remove repeating headers and watermarks
        text = re.sub(r"www\.ssccglpinnacle\.com.*", "", text)
        text = re.sub(r"Download Pinnacle Exam Preparation App.*", "", text)
        text = re.sub(r"@ebookstore01.*", "", text)
        text = re.sub(r"Pinnacle\s*Spot the Error", "", text)
        text = re.sub(r"Page\s*\d+", "", text)

        # Remove unwanted invisible marks
        text = re.sub(r"[\u202a-\u202e\u200e\u200f]+", "", text)
        text = re.sub(r"PDF|LRQ|LRO|RLO", "", text, flags=re.IGNORECASE)

        # Normalize spaces
        text = re.sub(r"\s{2,}", " ", text).strip()
        all_text += text + "\n"

    pdf_document.close()

    # 2️⃣ Split by exam section (SSC CHSL, CGL, etc.)
    section_pattern = re.compile(
        r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d)?))", re.IGNORECASE
    )
    sections = section_pattern.split(all_text)
    data = []
    q_id = 1

    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip()
        content = sections[i + 1].strip()

        # Split between questions and solutions
        parts = re.split(r"(?:Solutions?|SOLUTION)\s*[:-]", content, flags=re.IGNORECASE, maxsplit=1)
        question_part = parts[0]
        solution_part = parts[1] if len(parts) > 1 else ""

        # Extract question blocks (Q1...Q2... etc.)
        question_blocks = re.findall(
            r"Q\.?\s*(\d+)\.?\s*(.*?)(?=(?:Q\.?\s*\d+\.|$))",
            question_part,
            re.DOTALL | re.IGNORECASE,
        )

        # Extract all solutions
        solution_blocks = re.findall(
            r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)",
            solution_part,
            re.DOTALL | re.IGNORECASE,
        )
        solution_map = {
            num.strip(): {"ans": ans.lower(), "text": sol.strip()}
            for num, ans, sol in solution_blocks
        }

        for q_num, q_text in question_blocks:
            q_text = re.sub(r"\s+", " ", q_text).strip()

            # Extract full status (e.g. SSC CHSL Tier II (10/01/2024))
            status_match = re.search(
                r"((?:SSC\s*[A-Za-z ]*|Graduate Level|Higher Secondary|Matric Level)\s*\d{0,4}\s*(?:Tier\s*[-–]?\s*\d+)?\s*\(?\d{0,2}/?\d{0,2}/?\d{0,4}\)?\s*(?:\(.*?\))?)",
                q_text,
                re.IGNORECASE,
            )
            status = status_match.group(1).strip() if status_match else exam_name
            q_text = q_text.replace(status, "").strip()

            # ✅ FIXED OPTION EXTRACTION
            # Capture all 4 options correctly even if text contains "/" or multiple parentheses
            options_pattern = re.findall(
                r"\(([a-dA-D])\)\s*(.*?)(?=\([a-dA-D]\)|$)",
                q_text,
                re.DOTALL
            )
            options = [{"text": opt[1].strip()} for opt in options_pattern]

            # Extract question text before (a)
            question_text = re.split(r"\([aA]\)", q_text)[0].strip()

            # Map correct solution
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
extract_english_pdf_to_json("C:/Users/sunny/Downloads/spoterror.pdf")
