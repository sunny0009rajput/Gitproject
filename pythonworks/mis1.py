import fitz  # PyMuPDF
import json
import re

def extract_selected_questions_to_json(
    pdf_path,
    output_json="selected_questions.json",
    selected_numbers=None,
    start_id=674
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

    # ✅ Step 1: Extract and clean text
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
        text = re.sub(r"Pinnacle\s*Spot the Error", "", text)
        text = re.sub(r"Page\s*\d+", "", text)
        text = re.sub(r"\s{2,}", " ", text).strip()
        all_text += text + "|||"

    pdf_document.close()

    # ✅ Step 2: Split by SSC exam sections (if any)
    section_pattern = re.compile(
        r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d+)?))",
        re.IGNORECASE
    )
    sections = section_pattern.split(all_text)
    data = []
    q_id = start_id

    if len(sections) <= 1:
        sections = ["", all_text]

    # ✅ Step 3: Process each section
    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip() if sections[i].strip() else "General"
        content = sections[i + 1].strip()

        # Match questions along with status line
        question_blocks = re.findall(
            r"Q\s*\.?\s*(\d+)\.?\s*(.*?)\s*\|\|\|\s*(Graduate Level|Higher Secondary|Matric Level).*?\((Shift\s*[-–]?\d+)\)\s*\|\|\|"
            r"(.*?)(?=(Q\s*\.?\s*\d+\.|$))",
            content,
            re.DOTALL | re.IGNORECASE
        )

        for block in question_blocks:
            q_num, q_text, level, shift, options_text, _ = block
            q_num_clean = str(int(q_num.strip()))
            if q_num_clean not in selected_numbers:
                continue

            q_text = re.sub(r"\s+", " ", q_text).strip()
            status = f"{level.strip()} ({shift.strip()})"

            # Extract options
            options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^()]+)", options_text, re.DOTALL)
            options = [{"text": opt[1].strip() + " |||"} for opt in options_pattern]

            question_text = re.split(r"\([aA]\)", options_text)[0].strip() or q_text

            q_data = {
                "id": q_id,
                "question": {"type": "text", "content": question_text + " |||"},
                "options": options,
                "answer": "",
                "solution": {"type": "text", "content": ""},
                "status": status,
                "videoUrl": "",
            }
            data.append(q_data)
            q_id += 1

    # ✅ Step 4: Save JSON
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} selected questions. Saved to '{output_json}'.")

# 🧠 Example usage
extract_selected_questions_to_json(
    "C:/Users/sunny/Downloads/sentenceimprovement.pdf",
    output_json="selected_questions_final_clean8.json",
    selected_numbers=[
        220, 221, 222, 223, 224, 434, 435, 436, 437, 438, 439, 440,
        441, 442, 443, 444, 445, 446, 447, 448, 449, 450,
        451, 452, 453, 454
    ],
    start_id=674
)
