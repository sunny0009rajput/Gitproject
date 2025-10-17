import fitz  # PyMuPDF
import json
import re

def extract_pdf_to_custom_json(pdf_path, output_json="first.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # 1️⃣ Extract text from all pages
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        all_text += page.get_text("text") + "\n"

    pdf_document.close()

    # 2️⃣ Split text by question pattern
    question_blocks = re.split(r"\bQ\.\d+\.", all_text)

    if not question_blocks[0].strip():
        question_blocks = question_blocks[1:]

    question_blocks = [q.strip() for q in question_blocks if q.strip()]

    data = []

    for index, block in enumerate(question_blocks):
        # ✅ ID starts from 1 and increments
        question_id = index + 1

        # --- Extract status (flexible for SSC, Graduate Level, Matric Level) ---
        status_match = re.search(
            r"((?:SSC\s*[A-Za-z]*|Graduate Level|Higher Secondary|Matric Level)\s*\d{1,2}/\d{1,2}/\d{4}\s*(?:\(.*?\))?)",
            block
        )
        status = status_match.group(1).strip() if status_match else ""
        if status:
            block = block.replace(status, "").strip()

        # --- Extract solution and answer ---
        sol_match = re.search(r"Sol\.\s*\d*\.*\s*\(?([a-dA-D])?\)?\s*(.*)", block, re.DOTALL)
        if sol_match:
            ans_letter = sol_match.group(1).lower() if sol_match.group(1) else None
            solution_text = sol_match.group(2).strip()
        else:
            ans_letter = None
            solution_text = ""

        # --- Text before solution is question + options ---
        q_text = block.split("Sol.")[0].strip()

        # --- Extract question text (before option a) ---
        question_split = re.split(r"\([aA]\)", q_text)
        question_text = question_split[0].strip() if question_split else q_text

        # --- Extract all options ---
        options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^\(]+)", q_text)
        options = [{"text": opt[1].strip()} for opt in options_pattern]

        # --- Determine correct answer ---
        if ans_letter and len(options) >= (ord(ans_letter) - 96):
            answer_index = ord(ans_letter) - 97
            answer = options[answer_index]["text"] if 0 <= answer_index < len(options) else ""
        else:
            answer = ""

        q_data = {
            "id": question_id,
            "question": {"type": "text", "content": question_text},
            "options": options,
            "answer": answer,
            "solution": {"type": "text", "content": solution_text},
            "videoUrl": "",
            "status": status
        }

        data.append(q_data)

    # 4️⃣ Save JSON output
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! JSON saved to '{output_json}'.")


# Example usage
extract_pdf_to_custom_json("C:/Users/sunny/Downloads/firsttext.pdf")
