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

    # ✅ Step 2: Split by exam sections
    section_pattern = re.compile(
        r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d+)?))",
        re.IGNORECASE
    )
    sections = section_pattern.split(all_text)
    data = []
    q_id = start_id

    # ✅ Step 3: Process each section
    for i in range(1, len(sections), 2):
        exam_name = sections[i].strip()
        content = sections[i + 1].strip()

        # Split question & solution parts
        parts = re.split(
            r"(?:Solutions?|SOLUTION)\s*[:-]",
            content,
            flags=re.IGNORECASE,
            maxsplit=1,
        )
        question_part = parts[0]
        solution_part = parts[1] if len(parts) > 1 else ""

        # ✅ Match questions
        question_blocks = re.findall(
            r"(?:^|\|\|\|)\s*Q\s*\.?\s*(\d+)\)?\.?\s*(.*?)(?=(?:\|\|\|\s*Q\s*\.?\s*\d+|\|\|\|\s*Solutions?|SOLUTION|$))",
            question_part,
            re.DOTALL | re.IGNORECASE,
        )

        # ✅ Match solutions flexibly
        solution_blocks = re.findall(
            r"Sol\.?\s*(\d+)\)?\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)",
            solution_part,
            re.DOTALL | re.IGNORECASE,
        )

        # Build solution map
        solution_map = {
            num.strip(): {"ans": ans.lower(), "text": sol.strip()}
            for num, ans, sol in solution_blocks
        }

        # ✅ Process each question
        for q_num, q_text in question_blocks:
            q_num_clean = str(int(q_num.strip()))
            if q_num_clean not in selected_numbers:
                continue

            q_text = re.sub(r"(\w)/(\w)", r"\1 / \2", q_text)
            q_text = re.sub(r"\s+", " ", q_text).strip()

            # Extract exam/status
            # status_match = re.search(
            #     r"(SSC\s*[A-Za-z ]*\s*(?:Tier\s*[-–]?\s*\d+)?\s*\(?\d{1,2}\s*/\s*\d{1,2}\s*/\s*\d{4}\)?)",
            #     q_text,
            #     re.IGNORECASE,
            # )
            # status = status_match.group(1).strip() if status_match else exam_name
            #
            # # Remove status text from the question (so it doesn’t appear twice)
            # if status_match:
            #     q_text = q_text.replace(status_match.group(0), "").strip()

            # ✅ Extract exam and shift info (like Shift 1, Shift–2, etc.)
            status_match = re.search(
                r"(SSC\s*[A-Za-z ]*\s*(?:Tier\s*[-–]?\s*\d+)?(?:\s*Shift\s*[-–]?\s*\d+)?\s*\(?\d{1,2,3,4}\s*/\s*\d{1,2,3,4}\s*/\s*\d{4}\)?)",
                q_text,
                re.IGNORECASE,
            )

            # Also catch isolated 'Shift' mentions if not inside the main match
            shift_match = re.search(r"(Shift\s*[-–]?\s*\d+)", q_text, re.IGNORECASE)

            if status_match:
                status = status_match.group(1).strip()
            elif shift_match:
                status = f"{exam_name} {shift_match.group(1).strip()}"
            else:
                status = exam_name

            # Remove the matched status and shift text from question
            if status_match:
                q_text = q_text.replace(status_match.group(0), "").strip()
            if shift_match:
                q_text = re.sub(r"Shift\s*[-–]?\s*\d+", "", q_text, flags=re.IGNORECASE).strip()

            q_text = re.sub(r"\s{2,}", " ", q_text).strip(" .")

            # ✅ Extract options
            options_pattern = re.findall(
                r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)",
                q_text,
                re.DOTALL,
            )
            options = [{"text": opt[1].strip() + " |||"} for opt in options_pattern]
            question_text = re.split(r"\([aA]\)", q_text)[0].strip()

            ans_letter = solution_map.get(q_num_clean, {}).get("ans", "")
            solution_text = solution_map.get(q_num_clean, {}).get("text", "")
            answer = ""
            if ans_letter and len(options) >= (ord(ans_letter) - 96):
                answer = options[ord(ans_letter) - 97]["text"]

            q_data = {
                "id": q_id,
                "question": {"type": "text", "content": question_text + " |||"},
                "options": options,
                "answer": answer,
                "solution": {"type": "text", "content": solution_text},
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
    output_json="selected_questions_final_clean6.json",
    selected_numbers=[
        220,
        221, 222, 223, 224, 434, 435, 436, 437, 438, 439, 440, 441, 442,
        443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454
    ],
    start_id=674
)
