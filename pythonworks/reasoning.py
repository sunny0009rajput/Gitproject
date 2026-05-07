import fitz  # PyMuPDF
import json
import re

def extract_pdf_to_custom_json(pdf_path, output_json="analogy2.json"):
    # --- Read PDF into a single text blob ---
    pdf_document = fitz.open(pdf_path)
    all_text = ""
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        all_text += page.get_text("text") + "\n"
    pdf_document.close()

    # --- 1) Locate the answer-key block (a long sequence like "1.(c) 2.(c) ...") ---
    # Look for a contiguous sequence of at least 5 answers (tuned threshold)
    key_block_match = re.search(r"(?:\d+\.\s*\(?[a-dA-D]\)?\s*){5,}", all_text)
    if key_block_match:
        answer_key_text = key_block_match.group(0)
        # For safety, also trim any trailing/leading garbage
        answer_key_text = answer_key_text.strip()
    else:
        # fallback: whole doc (less ideal but still works)
        answer_key_text = all_text

    # --- 2) Parse answer keys from that block only ---
    # Matches like: 1.(c)  OR 185.(d) OR 13. (a)
    answer_pattern = re.findall(r"(\d+)\.\s*\(?([a-dA-D])\)?", answer_key_text)
    answer_map = {int(num): letter.lower() for num, letter in answer_pattern}

    # --- 3) Split questions but keep the original question numbers ---
    # Use capturing group so the question number is preserved in the split result:
    parts = re.split(r"Q\.\s*(\d+)\.", all_text)

    # parts layout: [pretext, num1, block1, num2, block2, ...]
    # If doc starts with preface, parts[0] is pretext (may be empty)
    data = []

    # iterate over pairs (number, block)
    for i in range(1, len(parts), 2):
        num_str = parts[i]
        block = parts[i+1].strip()
        try:
            question_id = int(num_str)
        except:
            # fallback to sequential ID if something weird happens
            question_id = len(data) + 1

        # --- Extract status (exam name, date, shift, etc.) ---
        status_match = re.search(
            r"((?:SSC\s*[A-Za-z]*|Graduate Level|Higher Secondary|Matric Level)\s*\d{1,2}/\d{1,2}/\d{4}\s*(?:\(.*?\))?)",
            block
        )
        status = status_match.group(1).strip() if status_match else ""
        if status:
            # remove the status substring from block so it doesn't pollute question text
            block = block.replace(status, "").strip()

        # --- Remove NOTE lines (common in your files) ---
        block = re.sub(r"NOTE:.*(?:\n|$)", "", block, flags=re.IGNORECASE)

        # --- Extract question text (everything before option (a) ) ---
        # Some files place options on same line or next lines; split at "(a)" occurrence
        question_split = re.split(r"\([aA]\)", block, maxsplit=1)
        question_text = question_split[0].strip() if question_split else block

        # clean extra newlines/spaces in question_text
        question_text = re.sub(r"\n{2,}", "\n", question_text).strip()

        # --- Extract options ---
        # This finds (a) text, (b) text, etc. It captures up to the next "(" (start of another option) or line end.
        # This is tolerant to multi-line option text.
        options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^\(\n][^\(]*?(?=(?:\(|$)))", block, flags=re.DOTALL)
        # fallback: sometimes options appear with no spaces/newlines — try a simpler pattern then
        if not options_pattern:
            options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^\(]+)", block)

        # Build options list preserving option letter order a->d if present
        # Sort by letter to ensure option order
        options_pattern_sorted = sorted(options_pattern, key=lambda x: x[0].lower())
        options = [{"text": opt[1].strip()} for opt in options_pattern_sorted]

        # --- Determine answer using answer_map (mapped from answer-key block) ---
        ans_letter = answer_map.get(question_id, "")
        answer = ""
        if ans_letter and options:
            # find option whose letter matches ans_letter (if we kept letters in pattern)
            # Because we sorted options_pattern_sorted by letter, index mapping works:
            idx = ord(ans_letter) - ord('a')
            if 0 <= idx < len(options):
                answer = options[idx]["text"]
            else:
                # fallback: try to find by matching original options_pattern tuple
                for letter, text in options_pattern:
                    if letter.lower() == ans_letter:
                        answer = text.strip()
                        break

        # --- Build final question data ---
        q_data = {
            "id": question_id,
            "question": {"type": "text", "content": question_text},
            "options": options,
            "answer": answer,
            "solution": {"type": "text", "content": "coming soon"},
            "status": status,
            "videoUrl": ""
        }

        data.append(q_data)

    # --- Save to JSON ---
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"✅ Extraction complete! JSON saved to '{output_json}'.")
    print(f"✅ {len(data)} questions processed successfully.")
    # optional return
    return data


# Example usage (change path as necessary)
if __name__ == "__main__":
    extract_pdf_to_custom_json("C:/Users/sunny/Downloads/Analogytxt.pdf")
