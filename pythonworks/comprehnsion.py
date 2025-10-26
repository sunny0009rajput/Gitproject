import fitz  # PyMuPDF
import json
import re

def extract_english_pdf_to_json(pdf_path, output_json="comprehension7.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # ✅ Step 1: Extract and clean PDF text
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text = page.get_text("text")

        # Fix hyphenation and newlines
        text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)
        text = re.sub(r"(?<=\w)\n(?=\w)", " ", text)
        text = text.replace("\n", "|||")

        # Remove irrelevant lines
        text = re.sub(r"[\u202a-\u202e\u200e\u200f]+", " ", text)
        text = re.sub(r"www\.ssccglpinnacle\.com.*", "", text)
        text = re.sub(r"Download Pinnacle Exam Preparation App.*", "", text)
        text = re.sub(r"@ebookstore01.*", "", text)
        text = re.sub(r"Pinnacle\s*Spot the Error", "", text)
        text = re.sub(r"Page\s*\d+", "", text)
        text = re.sub(r"\s{2,}", " ", text).strip()

        all_text += text + "\n"

    pdf_document.close()

    # ✅ Step 2: Split exam-wise sections
    section_pattern = re.compile(
        r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d+)?))",
        re.IGNORECASE,
    )
    sections = section_pattern.split(all_text)
    data = []
    q_id = 1

    # ✅ Step 3: Process each exam section
    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip()
        content = sections[i + 1].strip()

        # Split into question and solution parts
        parts = re.split(r"(?:Solutions?|SOLUTION)\s*[:-]", content, flags=re.IGNORECASE, maxsplit=1)
        question_part = parts[0]
        solution_part = parts[1] if len(parts) > 1 else ""

        # Extract solution mapping
        solution_blocks = re.findall(
            r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)",
            solution_part,
            re.DOTALL | re.IGNORECASE,
        )
        solution_map = {num.strip(): {"ans": ans.lower(), "text": sol.strip()} for num, ans, sol in solution_blocks}

        # ✅ Detect SET blocks
        set_blocks = re.findall(r"(SET[-–]?\s*\d+\.?.*?)(?=(?:SET[-–]?\s*\d+|$))", question_part, re.DOTALL | re.IGNORECASE)
        if not set_blocks:
            set_blocks = [question_part]

        for set_block in set_blocks:
            set_match = re.search(r"(SET[-–]?\s*\d+)", set_block)
            set_name = set_match.group(1).strip() if set_match else ""

            # ✅ Extract passage/description text (remove exam mentions)
            passage_match = re.search(rf"{set_name}\.?\s*(Q\.?\(?1\)?\.?.*?)?(.*?)(?=Q\.?\s*1|$)", set_block, re.DOTALL)
            passage_text = ""
            if passage_match:
                passage_text = passage_match.group(2).replace("|||", " ").strip()
            else:
                generic_passage = re.search(r"^(.*?)(?=Q\.?\s*1)", set_block, re.DOTALL)
                passage_text = generic_passage.group(1).replace("|||", " ").strip() if generic_passage else ""

            # Remove any “SSC …” pattern from passage
            passage_text = re.sub(r"SSC\s+[A-Za-z]+\s+\d{4}.*?(?=SET|Q\.?\s*\d+|$)", "", passage_text, flags=re.IGNORECASE).strip()

            # ✅ Extract all questions
            question_blocks = re.findall(r"Q\.?\s*(\d+)\.?\s*(.*?)(?=(?:Q\.?\s*\d+\.|$))", set_block, re.DOTALL | re.IGNORECASE)

            for q_num, q_text in question_blocks:
                q_text = re.sub(r"(\w)/(\w)", r"\1 / \2", q_text)
                q_text = re.sub(r"\s+", " ", q_text).strip()

                # Remove any embedded exam name from question
                q_text = re.sub(r"SSC\s+[A-Za-z]+\s+\d{4}.*?(?=\(|Q\.?\s*\d+|$)", "", q_text, flags=re.IGNORECASE).strip()

                # ✅ Extract options
                options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)", q_text, re.DOTALL)
                options = [{"text": opt[1].strip()} for opt in options_pattern]
                question_main = re.split(r"\([aA]\)", q_text)[0].strip()

                # ✅ Combine SET + Passage + Question (cleanly)
                final_question_text = f"{set_name}. {passage_text} {question_main}".strip()

                # ✅ Get answer and solution
                ans_letter = solution_map.get(q_num, {}).get("ans", "")
                solution_text = solution_map.get(q_num, {}).get("text", "")
                answer = ""
                if ans_letter and len(options) >= (ord(ans_letter) - 96):
                    answer = options[ord(ans_letter) - 97]["text"]

                # ✅ Build JSON structure
                q_data = {
                    "id": q_id,
                    "question": {"type": "text", "content": final_question_text},
                    "options": options,
                    "answer": answer,
                    "solution": {"type": "text", "content": solution_text},
                    "status": exam_name,
                    "videoUrl": "",
                }

                data.append(q_data)
                q_id += 1

    # ✅ Step 4: Save JSON output
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} questions. Saved to '{output_json}'.")


# ✅ Example usage
extract_english_pdf_to_json("C:/Users/sunny/Downloads/comprehension.pdf")
