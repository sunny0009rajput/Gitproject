import re
import json

def text_to_json(input_text):
    data = []
    q_id = 229

    # ✅ Extract the exam status (like "Matriculation Level ...")
    status_match = re.search(r"(Matriculation Level.*?Shift\s*[-–]?\s*\d+)", input_text, re.IGNORECASE)
    status = status_match.group(1).strip() if status_match else ""

    # ✅ Extract the passage/description text (before Q.111 or first question)
    passage_match = re.search(r"^(.*?)(?=Q\.?\s*\d+\.?)", input_text, re.DOTALL)
    passage_text = passage_match.group(1).strip() if passage_match else ""

    # ✅ Extract all question blocks
    question_blocks = re.findall(r"(Q\.?\s*\d+\..*?)(?=Q\.?\s*\d+\.|Sol\.|$)", input_text, re.DOTALL)

    # ✅ Extract all solution blocks like Sol.111.(a) ...
    solution_blocks = re.findall(
        r"Sol\.?\s*(\d+)\.?\s*\(?([a-dA-D])\)?\s*(.*?)(?=Sol\.?\s*\d+\.|\Z)",
        input_text,
        re.DOTALL | re.IGNORECASE,
    )
    solution_map = {num.strip(): {"ans": ans.lower(), "text": sol.strip()} for num, ans, sol in solution_blocks}

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
        options_pattern = re.findall(r"\(([a-dA-D])\)\s*([^()]+?)(?=\([a-dA-D]\)|$)", block, re.DOTALL)
        options = [{"text": opt[1].strip()} for opt in options_pattern]

        # Get answer and solution
        ans_letter = solution_map.get(q_num, {}).get("ans", "")
        solution_text = solution_map.get(q_num, {}).get("text", "")

        answer = ""
        if ans_letter and len(options) >= (ord(ans_letter) - 96):
            answer = options[ord(ans_letter) - 97]["text"]

        # ✅ Add comprehension description + question
        full_question = f"{passage_text.strip()} {question_main.strip()}".strip()

        # ✅ Build JSON structure
        q_data = {
            "id": q_id,
            "question": {"type": "text", "content": full_question},
            "options": options,
            "answer": answer,
            "solution": {"type": "text", "content": solution_text},
            "status": status,
            "videoUrl": ""
        }

        data.append(q_data)
        q_id += 1

    # ✅ Print formatted JSON
    print(json.dumps(data, indent=4, ensure_ascii=False))


# ✅ Example usage:
input_text = """
  Between  him  and  Darcy  there  was  a  very  steady  friendship,  in 
 spite  of  great  opposition  of  character.  Bingley  was  endeared  to 
 Darcy  by  the  easiness,  openness,  and  ductility  of  his  temper, 
  though  no  disposition  could  offer  a  greater  contrast  to  his  own, 
 and  though  with  his  own  he  never  appeared  dissatisfied.  On  the 
 strength  of  Darcy’s  regard  Bingley  had  the  firmest  reliance,  and 
 of  his  judgment  the  highest  opinion.  In  understanding,  Darcy  was 
 the superior. 
 Bingley  was  by  no  means  deficient,  but  Darcy  was  clever.  He  was 
 at  the  same  time  haughty,  reserved,  and  fastidious,  and  his 
 manners,  though  well  bred,  were  not  inviting.  In  that  respect  his 
 friend  had  greatly  the  advantage.  Bingley  was  sure  of  being  liked 
 wherever he appeared, Darcy was continually giving offence. 
 The  manner  in  which  they  spoke  of  the  Meryton  assembly  was 
 sufficiently characteristic. 
 Bingley had never met with pleasanter people or prettier girls in 
 his  life;  everybody  had  been  most  kind  and  attentive  to  him;  there 
 had  been  no  formality,  no  stiffness;  he  had  soon  felt  acquainted 
 with  all  the  room;  and  as  to  Miss  Bennet,  he  could  not  conceive 
 an  angel  more  beautiful.  Darcy,  on  the  contrary,  had  seen  a 
 collection  of  people  in  whom  there  was  little  beauty  and  no 
 fashion,  for  none  of  whom  he  had  felt  the  smallest  interest,  and 
 from  none  received  either  attention  or  pleasure.  Miss  Bennet  he 
 acknowledged to be pretty, but she smiled too much. 
 Mrs.  Hurst  and  her  sister  allowed  it  to  be  so—but  still  they 
 admired  her  and  liked  her,  and  pronounced  her  to  be  a  sweet  girl, 
 and one whom they should not object to know more of. 
 Miss  Bennet  was  therefore  established  as  a  sweet  girl,  and  their 
 brother  felt  authorised  by  such  commendation  to  think  of  her  as 
 he chose. 
 Graduate Level 02/08/2022 ( Shift - 3)
  Q.206.  Select  the  most  appropriate  title  for  the  passage  from  the 
 following options. 
 (a) Darcy and Bingley  (b) Darcy and Friends 
 (c) Bingley and Friends       (d) The Town of Meryton 
 Q.207.  Select  the  most  appropriate  meaning  of  ‘fastidious’  from 
 the following options. 
 (a) Undemanding   (b) Concerned about accuracy and detail 
 (c) Queasy               (d) Prissy 
 Q.208.  Who was understanding, clever, haughty and  reserved? 
 (a) Miss Bennett  (b) Bingley  (c) Mrs. Hurst   (d) Darcy 
 Q.209.  Select the synonym of ‘dependence’ from the  passage. 
 (a) Misgiving  (b) Reliance  (c) Relay  (d) Skepticism 
 Q.210.  What is the central theme of the passage? 
 (a) Darcy and his unlikeable qualities 
 (b) The contrast between Bingley and Darcy 
 (c) The similarities between Darcy and Bingley 
 (d) Bingley and his attractive qualities
  Sol.206.(a)  Darcy and Bingley 
 It  can  be  inferred  from  the  passage  that  the  passage  is  about  the 
 friendship  between  Darcy  and  Bingley.  Hence,  ‘Darcy  and 
 Bingley’ is the most suitable title for the passage. 
 Sol.207.(b)  Concerned about accuracy and detail 
 Fastidious means Concerned about accuracy and detail. 
 Sol.208.(d)  Darcy 
 It  can  be  inferred  from  the  passage  that  Darcy  was 
 understanding, clever, haughty and reserved. 
 (Line/s  from  the  Passage-  Darcy  was  clever.  He  was  at  the 
 same  time  haughty,  reserved,  and  fastidious,  and  his  manners, 
 though well bred, were not inviting.) 
 Sol.209.(b)  Reliance 
 Dependence  - Reliance 
 Skepticism  - the theory that certain knowledge is impossible. 
 Relay  - to tell something you heard. 
 Misgiving  - a feeling of doubt or worry about a future  event. 
 Sol.210.(b)  The contrast between Bingley and Darcy 
 It  can  be  inferred  that  the  Central  Theme  of  the  Passage  is  “The 
 contrast between Bingley and Darcy”. 
"""

text_to_json(input_text)
