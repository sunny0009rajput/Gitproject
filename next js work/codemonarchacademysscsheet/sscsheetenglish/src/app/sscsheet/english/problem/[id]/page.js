import MainPage from "./MainPage";
import englishData from "../../../../data/english.json"; // Local english data

// Generate SEO metadata from local JSON
export async function generateMetadata({ params, searchParams }) {
  const id = params.id;
  const chapter = searchParams.chapter || "General";

  const chapterKey = chapter.replace(/\s/g, "_");
  const chapterData = englishData[chapter] || englishData[chapterKey];

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
    ? `${cleanQuestion} | ${chapter} SSC Question ${id} - CodeMonarch Academy`
    : `SSC ${chapter} Question ${id} - CodeMonarch Academy`;

  const description = cleanQuestion
    ? `${cleanQuestion} - Detailed explanation, answer, and video solution for SSC ${chapter} Question ${id}. Prepare smarter with CodeMonarch Academy.`
    : `SSC Exam Question ${id} from ${chapter}. Learn the answer and explanation on CodeMonarch Academy.`;

  const image =
    problem?.question?.type === "image"
      ? problem.question.content
      : "https://academy.codemonarch.com/default-og-image.png";

  return {
    title,
    description,
    keywords: [
      cleanQuestion,
      `SSC Question ${id}`,
      `${chapter} English Questions`,
      "SSC Exam Preparation",
      "SSC Previous Year Questions",
      "CodeMonarch Academy",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://academy.codemonarch.com/sscsheet/english/problem/${id}?chapter=${chapter}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Page UI
export default function Page() {
  return <MainPage />;
}
