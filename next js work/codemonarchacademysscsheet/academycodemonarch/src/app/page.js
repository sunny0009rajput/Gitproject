import Image from "next/image";
import Navbar from "./Navbar";
import { Container, Focus } from "lucide-react";
import Script from "next/script";
import FooterSection from "./FooterSection";
import AboutSection from "./AboutSection";
import FocusSection from "./FocusSection";
import AllCourses from "./AllCourses";
import Uses1 from "./CardList";

export const metadata = {
  title: "CodeMonarch Academy - SSC Exam Preparation",
  template : "%s | CodeMonarch Academy",
  description: "CodeMonarch Academy helps students ace SSC exams with complete question and answer sheets, practice tests, and study materials. Free preparation for SSC exams with trusted content.",
  keywords: "SSC, SSC Exam, SSC Preparation, SSC Questions, SSC Answers, Study Material, Practice Questions, Online Learning, Government Exams, Competitive Exams, SSC GK, SSC English, SSC Mathematics",
  author: "CodeMonarch Academy - Sunny Rajput",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
    site: "@CodeMonarchAcad",
    creator: "@CodeMonarchAcad",
    images: ["https://academy.codemonarch.com/og-image.png"],
  },
  alternates: {
    canonical: "https://academy.codemonarch.com",
  }
};


export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeMonarch Academy",
    "url": "https://academy.codemonarch.com",
    "logo": "https://academy.codemonarch.com/LOGO.png",
    "description": "CodeMonarch Academy provides free SSC exam preparation materials, including questions, answers, and study guides for government exam aspirants.",
    "sameAs": [
      "https://www.youtube.com/channel/UCZXCgZgwwneej0Q_qXD3Kew",
      "https://www.instagram.com/codemonarchsunny/",
      "https://www.facebook.com/codemonarch"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "rajputsunny0009@gmail.com",
      "url": "https://academy.codemonarch.com/support"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Moga",
      "addressRegion": "Punjab",
      "postalCode": "142001",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <div className="min-h-screen bg-black/50">
    <Navbar/>
    <AllCourses/>
    <Uses1/>
    
    <FocusSection/>
    <AboutSection/>
    <FooterSection/>
    </div>
    
    </>
  );
}
