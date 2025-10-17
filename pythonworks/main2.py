import fitz  # PyMuPDF
import json
import re
import os

def extract_pdf_to_custom_json(pdf_path, output_json="questions_output2.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # 1️⃣ Extract text from all pages
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        all_text += page.get_text("text") + "\n"

    pdf_document.close()

    # 2️⃣ Split text by questions like "Q.433.", "Q.434.", etc.
    question_blocks = re.split(r"\bQ\.\d+\.", all_text)
    question_blocks = [q.strip() for q in question_blocks if q.strip()]

    data = []
    q_id = 1

    # 3️⃣ Extract question, options, answer, solution from each block
    for block in question_blocks:
        # Example pattern: extract question and options
        match = re.search(r"^(.*?)(?:\n| )\(?a\)?\)?(.*?)\(?b\)?\)?(.*?)\(?c\)?\)?(.*?)(?:\(?d\)?\)?(.*))?$", block, re.DOTALL | re.IGNORECASE)

        question_text = ""
        options = []
        answer = ""
        solution_text = ""
        status = ""

        # Extract the "Sol." answer/solution line
        sol_match = re.search(r"Sol\.\s*\d*\.*\s*\(?[a-dA-D]\)?\s*(.*?)$", block, re.DOTALL)
        if sol_match:
            solution_text = sol_match.group(1).strip()

        # Extract answer letter (like "(a)", "(b)" etc.)
        ans_letter_match = re.search(r"Sol\.\s*\d*\.*\s*\(?([a-dA-D])\)?", block)
        if ans_letter_match:
            ans_letter = ans_letter_match.group(1).lower()
        else:
            ans_letter = None

        # Extract the question text before "Sol."
        q_text = block.split("Sol.")[0].strip()

        # Find question statement
        lines = q_text.split("\n")
        question_line = lines[0].strip()
        rest_text = "\n".join(lines[1:])

        # Extract options (a), (b), (c), (d)
        options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^\(]+)", rest_text)
        for opt in options_pattern:
            options.append({"text": opt[1].strip()})

        # Extract answer value based on letter
        if ans_letter and 0 < ord(ans_letter) - 97 < len(options) + 1:
            answer = options[ord(ans_letter) - 97]["text"]

        # Try to get exam info like "SSC CHSL ..." as status
        status_match = re.search(r"(SSC .*?\d{4}.*?)\n", block)
        if status_match:
            status = status_match.group(1).strip()

        # Create question JSON object
        q_data = {
            "id": q_id,
            "question": {"type": "text", "content": question_line},
            "options": options,
            "answer": answer,
            "solution": {"type": "text", "content": solution_text},
            "videoUrl": "",  # you can later map your YouTube video link here
            "status": status
        }

        data.append(q_data)
        q_id += 1

    # 4️⃣ Save JSON file
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! JSON saved to '{output_json}'.")

# 🧩 Example usage
extract_pdf_to_custom_json("C:/Users/sunny/Downloads/3artsandaward.pdf")

