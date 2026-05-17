import gkData from "../../data/gk.json";
import ClientPage from "./ClientPage";

// ✅ Generate SEO metadata
export async function generateMetadata() {
  const chapters = gkData.chapters || [];
  const title = "SSC GK Questions & Answers – CodeMonarch Academy";
  const description = `Access SSC GK chapters like ${chapters
    .map((c) => c.title)
    .join(", ")} with questions, answers, explanations, and video solutions.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://academy.codemonarch.com/sscsheet/gk",
      images: ["https://academy.codemonarch.com/default-og-image.png"],
    },
  };
}

// ✅ Server-rendered static HTML for SEO (limited to 10 questions)
function SEOStaticContent() {
  const chapters = gkData.chapters || [];

  const chapterDetails = chapters.map((ch) => {
    const questions = gkData[ch.title]?.[1]?.Questions || [];
    // 🔹 Only include the first 10 questions per chapter
    return { title: ch.title, questions: questions.slice(0, 10) };
  });

  return (
    <div id="seo-content" style={{ display: "none" }}>
      <h1>SSC GK Questions and Answers – CodeMonarch Academy</h1>

      {chapterDetails.map((chapter, ci) => (
        <article key={ci}>
          <h2>{chapter.title}</h2>

          {chapter.questions.length === 0 && <p>No questions available.</p>}

          {chapter.questions.map((q, qi) => (
            <div key={qi}>
              <h3>
                Q{q.id}:{" "}
                {q.question?.type === "text"
                  ? q.question.content
                  : "Image-based question"}
              </h3>

              {q.options?.length > 0 && (
                <ul>
                  {q.options.map((opt, oi) => (
                    <li key={oi}>
                      {typeof opt === "string" ? opt : opt.text}
                    </li>
                  ))}
                </ul>
              )}

              {q.answer && (
                <p>
                  <strong>Answer:</strong> {q.answer}
                </p>
              )}

              {q.solution?.content && (
                <p>
                  <strong>Explanation:</strong> {q.solution.content}
                </p>
              )}

              {q.status && (
                <p>
                  <em>Asked in:</em> {q.status}</p>
              )}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

// ✅ Main Page Component (Server + Client separation)
export default function Page() {
  return (
    <>
      {/* 👇 Hidden SEO HTML (visible to Google, lightweight) */}
      <SEOStaticContent />

      {/* 👇 Client UI (interactive) */}
      <ClientPage />
    </>
  );
}
