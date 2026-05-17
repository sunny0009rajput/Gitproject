import MainPage from "./MainPage";
import englishData from "../../data/english.json"; // 👈 Import local GK JSON

// ✅ SEO Metadata for /sscsheet/gk
export async function generateMetadata() {
  const chapters = englishData.chapters || [];

  const chapterTitles = chapters.map((ch) => ch.title).join(", ");

  const title = "SSC English Chapter List – CodeMonarch Academy";
  const description = `Access all SSC English chapters including ${chapterTitles || "Dance, Arts, Personality, Arts Awards, Musical Instruments, Festivals, Fairs, Songs, Painting, Dress, Tribes, First in India, and world Sports, Books and Authors, Famous Personality, Important Days, State GK, Organisation, World GK, Computer, Full Form, Religious, Places, Awards, Important Events, Founder, Entertainment, Schemes, Miscellaneous, Ancient History, Medieval History, Modern History, Politics, Geography, Economics, Physics, Chemistry, Biology"}. Expand each topic to explore questions, notes, and video solutions. Prepare effectively with CodeMonarch Academy.`;

  const image = "https://academy.codemonarch.com/default-og-image.png";

  return {
    title,
    description,
    keywords: [
      "SSC English Questions",
      "SSC General Knowledge",
      "SSC Exam Preparation",
      "SSC Chapterwise Practice",
      "SSC English Notes",
      "CodeMonarch Academy",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://academy.codemonarch.com/sscsheet/english",
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

// ✅ Page Component
export default function Page() {
  const itemListElements = (englishData.chapters || []).map((chapter, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: chapter.title,
    url: `https://academy.codemonarch.com/sscsheet/english?chapter=${encodeURIComponent(chapter.title)}`,
  }));

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "SSC English Chapter List",
            description:
              "Comprehensive SSC English chapter list including History, Polity, Geography, Science, and more. Each chapter contains solved questions, notes, and video explanations.",
            itemListElement: itemListElements,
          }),
        }}
      />
      {/* Client UI */}
      <MainPage />
    </>
  );
}
