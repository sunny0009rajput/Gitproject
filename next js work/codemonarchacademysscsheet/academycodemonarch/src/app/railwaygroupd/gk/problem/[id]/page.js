import MainPage from "./MainPage";
import gkData from "../../../../data/groupdgk.json"; // Local GK data

// ✅ Generate SEO metadata (your existing code remains same)
export async function generateMetadata({ params, searchParams }) {
  const id = params.id;
  const chapter = searchParams.chapter || "General";

  const chapterKey = chapter.replace(/\s/g, "_");
  const chapterData = gkData[chapter] || gkData[chapterKey];

  let problem = null;
  let questionText = "";

  try {
    const questions = chapterData?.[1]?.Questions || [];
    const probIndex = questions.findIndex((q) => String(q.id) === id);
    problem = questions[probIndex];

    if (problem?.question?.type === "text") {
      questionText = problem.question.content;
    } else if (problem?.question?.type === "image") {
      questionText = `Image-based question from ${chapter}`;
    }
  } catch (error) {
    console.error("Error fetching problem data for SEO:", error);
  }

  const cleanQuestion = questionText
    ?.replace(/<\/?[^>]+(>|$)/g, "")
    ?.replace(/\s+/g, " ")
    ?.trim()
    ?.slice(0, 120);

  const title = cleanQuestion
    ? `${cleanQuestion} | ${chapter} Railway Group D Question ${id} - CodeMonarch Academy`
    : `Railway Group D ${chapter} Question ${id} - CodeMonarch Academy`;

  const description = cleanQuestion
    ? `${cleanQuestion} - Detailed explanation, answer, and video solution for Railway Group D ${chapter} Question ${id}. Prepare smarter with CodeMonarch Academy.`
    : `Railway Group D Exam Question ${id} from ${chapter}. Learn the answer and explanation on CodeMonarch Academy.`;

  const image =
    problem?.question?.type === "image"
      ? problem.question.content
      : "https://academy.codemonarch.com/default-og-image.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
  };
}

// ✅ SERVER COMPONENT: Adds static question text for SEO (visible in View Source)
export default async function Page({ params, searchParams }) {
  const id = params.id;
  const chapter = searchParams.chapter || "General";
  const chapterKey = chapter.replace(/\s/g, "_");
  const chapterData = gkData[chapter] || gkData[chapterKey];
  const questions = chapterData?.[1]?.Questions || [];
  const problem = questions.find((q) => String(q.id) === id);

  const questionText =
    problem?.question?.type === "text"
      ? problem.question.content
      : "Image-based question from this chapter.";

  const answerText = problem?.answer || "Answer not available.";
  const explanation =
    problem?.solution?.type === "text"
      ? problem.solution.content?.slice(0, 200) || "Explanation coming soon."
      : "Image-based explanation.";

  return (
    <>
      {/* ✅ Static SEO content (visible in View Source) */}
      <section
        style={{
          display: "none", // hidden from users but readable in HTML
        }}
      >
        <h1>{chapter} - Question {id}</h1>
        <p>{questionText}</p>
        <p>Answer: {answerText}</p>
        <p>Explanation: {explanation}</p>
      </section>

      {/* ✅ Dynamic client-side app */}
      <MainPage />
    </>
  );
}
