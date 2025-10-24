import Image from "next/image";
import Navbar from "./Navbar";
import OriginalPage from "../app/sscsheet/english/page";


export const metadata = {
  title: "CodeMonarch Academy - SSC Exam Preparation",
  template : "%s | CodeMonarch Academy",
  description: "CodeMonarch Academy helps students ace SSC exams with complete question and answer sheets, practice tests, and study materials. Prepare for SSC easily online.",
  keywords: "SSC, SSC Exam, SSC Preparation, SSC Questions, SSC Answers, Study Material, Practice Questions, Online Learning, Government Exams, Competitive Exams",
  author: "Sunny Kumar",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "CodeMonarch Academy - SSC Exam Preparation",
    description: "Ace SSC exams with CodeMonarch Academy! Access complete question & answer sheets, practice tests, and study materials online.",
    url: "https://academy.codemonarch.com",
    siteName: "CodeMonarch Academy",
    images: [
      {
        url: "https://academy.codemonarch.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeMonarch Academy - SSC Preparation"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMonarch Academy - SSC Exam Preparation | Questions & Answers",
    description: "Ace SSC exams with CodeMonarch Academy! Complete question & answer sheets, practice tests, and study materials for students online.",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    images: ["https://academy.codemonarch.com/og-image.png"],
  }
};


export default function Home() {
  return (
    <>
    
    <div className="min-h-screen bg-black/50">
    <Navbar/>
    <OriginalPage/>
    
    </div>
    
    </>
  );
}
