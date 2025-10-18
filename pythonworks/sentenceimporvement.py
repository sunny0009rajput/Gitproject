import fitz  # PyMuPDF
import json
import re


def extract_english_pdf_to_json(pdf_path, output_json="homonyms.json"):
    pdf_document = fitz.open(pdf_path)
    all_text = ""

    # 1️⃣ Extract text from all pages with proper underline detection
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        page_dict = page.get_text("dict")

        page_text = ""

        for block in page_dict["blocks"]:
            if "lines" in block:
                for line in block["lines"]:
                    line_text = ""
                    underline_active = False  # Track underline sequence

                    for span in line["spans"]:
                        span_text = span["text"].strip()
                        if not span_text:
                            continue

                        # Check if span is underlined
                        is_underlined = bool(span.get("flags", 0) & 8)

                        if is_underlined:
                            if not underline_active:
                                line_text += "*"  # start underline
                                underline_active = True
                            line_text += span_text + " "
                        else:
                            if underline_active:
                                line_text = line_text.rstrip() + "*" + " "  # end underline
                                underline_active = False
                            line_text += span_text + " "

                    # Close underline at end of line if still active
                    if underline_active:
                        line_text = line_text.rstrip() + "*"

                    page_text += line_text.strip() + "\n"

            page_text += "\n"

        # 🔹 Clean up unwanted text (watermarks, headers, etc.)
        page_text = re.sub(r"www\.ssccglpinnacle\.com.*", "", page_text)
        page_text = re.sub(r"Download Pinnacle Exam Preparation App.*", "", page_text)
        page_text = re.sub(r"@ebookstore01.*", "", page_text)
        page_text = re.sub(r"Pinnacle\s*Spot the Error", "", page_text)
        page_text = re.sub(r"Page\s*\d+", "", page_text)
        page_text = re.sub(r"[\u202a-\u202e\u200e\u200f]+", "", page_text)
        page_text = re.sub(r"PDF|LRQ|LRO|RLO", "", page_text, flags=re.IGNORECASE)

        all_text += page_text + "\n"

    pdf_document.close()

    # 2️⃣ Split by exam sections (SSC CHSL, CGL, CPO, etc.)
    section_pattern = re.compile(r"(?=(SSC\s+[A-Za-z]+\s+\d{4}(?:\s+Tier\s*[-–]?\s*\d)?))", re.IGNORECASE)
    sections = section_pattern.split(all_text)

    data = []
    q_id = 1

    # 3️⃣ Process each section
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
        solution_blocks = re.findall(
            r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)",
            solution_part,
            re.DOTALL,
        )
        solution_map = {
            num.strip(): {"ans": ans.lower(), "text": sol.strip()} for num, ans, sol in solution_blocks
        }

        # 4️⃣ Process each question
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

            # ✅ Extract all four options
            options_found = re.findall(r"\(([a-dA-D])\)\s*(.*?)(?=\([a-dA-D]\)|$)", q_text, re.DOTALL)
            options = [{"text": opt[1].strip()} for opt in options_found]

            # Fix if fewer than 4 options detected
            if len(options) < 4:
                fixed_opts = re.findall(r"\([a-dA-D]\)[^()]+", q_text)
                options = [{"text": re.sub(r"\([a-dA-D]\)", "", o).strip()} for o in fixed_opts]

            # Extract question part (before first (a))
            question_text = re.split(r"\([aA]\)", q_text)[0].strip()

            # Get solution details
            ans_letter = solution_map.get(q_num, {}).get("ans", "")
            solution_text = solution_map.get(q_num, {}).get("text", "")

            # Match correct answer text
            answer = ""
            if ans_letter and len(options) >= (ord(ans_letter) - 96):
                answer = options[ord(ans_letter) - 97]["text"]

            # Construct JSON object
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

    # 5️⃣ Save JSON output
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! Found {len(data)} questions. Saved to '{output_json}'.")


# Example usage
extract_english_pdf_to_json("C:/Users/sunny/Downloads/homonyms.pdf")
