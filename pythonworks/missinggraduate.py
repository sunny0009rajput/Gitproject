import fitz  # PyMuPDF
import json
import re


def extract_selected_questions_to_json(
    pdf_path,
    output_json="selected_questions.json",
    selected_numbers=None,
    start_id=194,
):
    if not selected_numbers:
        print("⚠️ Please provide a list of question numbers to extract.")
        return

    # 🧹 Clean selected numbers
    cleaned_numbers = []
    for num in selected_numbers:
        try:
            cleaned_numbers.append(str(int(float(str(num).strip()))))
        except:
            continue
    selected_numbers = set(cleaned_numbers)

    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # ✅ Step 1: Extract & clean text from PDF
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text = page.get_text("text")

        # Cleanup
        text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)
        text = re.sub(r"(?<=\w)\n(?=\w)", " ", text)
        text = text.replace("\n", "|||")
        text = re.sub(r"[\u202a-\u202e\u200e\u200f]+", " ", text)
        text = re.sub(r"www\.ssccglpinnacle\.com.*", "", text)
        text = re.sub(r"Download Pinnacle Exam Preparation App.*", "", text)
        text = re.sub(r"@ebookstore01.*", "", text)
        text = re.sub(r"Page\s*\d+", "", text)
        text = re.sub(r"\s{2,}", " ", text).strip()
        all_text += text + "|||"

    pdf_document.close()

    # ✅ Step 2: Match questions directly (Q.435 ... Q.436 etc.)
    question_blocks = re.findall(
        r"(?:^|\|\|\|)\s*Q\.?\s*(\d+)\.?\s*(.*?)(?=(?:\|\|\|\s*Q\.?\s*\d+\.|\Z))",
        all_text,
        re.DOTALL | re.IGNORECASE,
    )

    data = []
    q_id = start_id

    for q_num, q_text in question_blocks:
        q_num_clean = str(int(q_num.strip()))
        if q_num_clean not in selected_numbers:
            continue

        q_text = re.sub(r"\s+", " ", q_text).strip()

        # ✅ Extract full status (including date and shift)
        # Example: Graduate Level 27/06/2023 (Shift - 4)
        status_match = re.search(
            r"(Graduate Level|Higher Secondary|Matric Level)\s*\d{1,2}/\d{1,2}/\d{4}\s*\(.*?\)",
            q_text,
            re.IGNORECASE,
        )

        if status_match:
            status = status_match.group(0).strip()
            # Remove status from the question text
            q_text = q_text.replace(status, "").strip()
        else:
            # fallback: only level
            level_match = re.search(
                r"(Graduate Level|Higher Secondary|Matric Level)", q_text, re.IGNORECASE
            )
            status = level_match.group(1).strip().title() if level_match else ""

            if level_match:
                q_text = q_text.replace(level_match.group(1), "").strip()

        # ✅ Extract options
        options_pattern = re.findall(
            r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)",
            q_text,
            re.DOTALL,
        )
        options = [{"text": opt[1].strip() + " |||"} for opt in options_pattern]

        # ✅ Extract question text (before options)
        question_text = re.split(r"\([aA]\)", q_text)[0].strip()

        q_data = {
            "id": q_id,
            "question": {"type": "text", "content": question_text + " |||"},
            "options": options,
            "answer": "",  # solution not provided in your snippet
            "solution": {"type": "text", "content": ""},
            "status": status,
            "videoUrl": "",
        }

        data.append(q_data)
        q_id += 1

    # ✅ Step 3: Save JSON
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} selected questions. Saved to '{output_json}'.")


# 🧠 Example usage
extract_selected_questions_to_json(
    "C:/Users/sunny/Downloads/comprehension.pdf",
    output_json="comprehension8.json",
    selected_numbers=[
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
    ],
    start_id=194,
)
