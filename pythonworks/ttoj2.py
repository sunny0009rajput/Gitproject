import re
import json

def text_to_json(input_text):
    data = []
    q_id = 828

    # ✅ Extract the exam status (works for Graduate / Higher Secondary / Matriculation)
    status_match = re.search(
        r"(Graduate|Higher Secondary|Matriculation)\s+Level.*?(Shift\s*[-–]?\s*\d+)",
        input_text, re.IGNORECASE
    )
    status = status_match.group(0).strip() if status_match else ""

    # ✅ Remove status line from text before extracting passage/questions
    clean_text = re.sub(re.escape(status), "", input_text, flags=re.IGNORECASE)

    # ✅ Extract the passage before the first question (Q.)
    passage_match = re.search(r"^(.*?)(?=Q\.?\s*\d+)", clean_text, re.DOTALL)
    passage_text = passage_match.group(1).strip() if passage_match else ""

    # ✅ Extract all question blocks
    question_blocks = re.findall(r"(Q\.?\s*\d+\..*?)(?=Q\.?\s*\d+\.|Sol\.|$)", clean_text, re.DOTALL)

    # ✅ Extract all solution blocks
    solution_blocks = re.findall(
        r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)",
        clean_text,
        re.DOTALL | re.IGNORECASE,
    )
    solution_map = {
        num.strip(): {"ans": ans.lower(), "text": sol.strip()}
        for num, ans, sol in solution_blocks
    }

    # ✅ Process each question
    for block in question_blocks:
        block = block.strip()

        # Extract question number
        qnum_match = re.search(r"Q\.?\s*(\d+)", block)
        q_num = qnum_match.group(1) if qnum_match else str(q_id)

        # Extract question text
        question_main = re.split(r"\([aA]\)", block)[0]
        question_main = re.sub(r"Q\.?\s*\d+\.\s*", "", question_main).strip()

        # Extract options
        options_pattern = re.findall(
            r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)", block, re.DOTALL
        )
        options = [{"text": opt[1].strip()} for opt in options_pattern]

        # Get answer and solution
        ans_letter = solution_map.get(q_num, {}).get("ans", "")
        solution_text = solution_map.get(q_num, {}).get("text", "")

        answer = ""
        if ans_letter and len(options) >= (ord(ans_letter) - 96):
            answer = options[ord(ans_letter) - 97]["text"]

        # ✅ Combine passage + question (without status)
        full_question = f"{passage_text.strip()} {question_main.strip()}".strip()

        # ✅ Build JSON object
        q_data = {
            "id": q_id,
            "question": {"type": "text", "content": full_question},
            "options": options,
            "answer": answer,
            "solution": {"type": "text", "content": solution_text},
            "status": status,   # ✅ Now appears ONLY here
            "videoUrl": ""
        }

        data.append(q_data)
        q_id += 1

    # ✅ Output final formatted JSON
    print(json.dumps(data, indent=4, ensure_ascii=False))
# ✅ Example usage:
input_text = """
        There  were  two  (617)  _______buddies  who  went  through  school 
 and  college  and  even  joined  the  army  together.  War 
 (618)_______and  they  were  (619)_______in  the  same  unit.  One 
 night  they  were  ambushed.  Bullets  were  flying  (620)_______and 
 out  of  the  darkness  came  a  voice,  "Harry,  please  come  and  help 
 me".  Harry  (621)_______recognised  that  voice  of  his  childhood 
 buddy. 
 Higher Secondary 04/08/2022 ( Shift - 3 ) 
 Q.617.  (a) childhood    (b) childish       (c) child       (d) childlike 
 Q.618.  (a) broke out     (b) broke in     (c) broke up    (d) broke into 
 Q.619.  (a) fought   (b) fights   (c) fighting   (d) fight 
 Q.620.  (a) up and over    (b) over   (c) above   (d) all over 
 Q.621.  (a) initially   (b) actually   (c) immediately   (d) suddenly 
  Sol.617.(a) Childhood 
 Childhood  means  the  state  or  period  of  being  a  child.  The  given 
 passage  states  that  There  were  two  childhood  buddies  who 
 went  through  school  and  college  and  even  joined  the  army 
 together. Hence, ‘Childhood’ is the most appropriate answer. 
 Sol.618.(a) Broke out 
 The  Phrase  ‘broke  out’  means  to  suddenly  begin  to  have  a  rash. 
 The  given  passage  states  that  war  broke  out  and  they  were 
 fighting  in  the  same  unit.  Hence,  ‘Broke  out’  is  the  most 
 appropriate answer. 
 Sol.619.(c) fighting 
 The  given  passage  line  is  in  the  past  continuous  tense.  So,  here 
 we  use  the  verb  ‘Fighting’.  The  given  passage  states  that  war 
 broke out and they were fighting in the same unit. 
 Sol.620.(d) All over 
 The  phrase  ‘all  over’  means  every  one  (of)  or  the  whole.  The 
 given  passage  states  that  Bullets  were  flying  all  over  and  out  of 
 the  darkness  came  a  voice.  Hence,  ‘All  over’  is  the  most 
 appropriate answer. 
 Sol.621.(c) Immediately 
 Immediately  means  without  interval  of  time.  The  given  passage 
 states  that  Harry  immediately  recognised  that  voice  of  his 
 childhood  buddy.  Hence,  ‘Immediately’  is  the  most  appropriate 
 answer.
"""

text_to_json(input_text)
