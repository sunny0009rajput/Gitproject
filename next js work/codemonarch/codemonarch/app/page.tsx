import type { Metadata } from "next";
import Image from "next/image";
import Codemonarchpage from "./Codemonarchpage";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CodeMonarch | Website Development & App Development Services",
  description:
    "CodeMonarch provides professional website development, app development, UI/UX design, SEO optimization, and freelancing services. Build modern websites, web apps, and mobile apps for your business.",

  keywords: [
    "website development",
    "web development company",
    "freelance web developer",
    "app development",
    "mobile app development",
    "Next.js developer",
    "React developer",
    "MERN stack developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "SEO optimized website",
    "responsive website design",
    "business website development",
    "ecommerce website development",
    "custom website development",
    "portfolio website developer",
    "landing page developer",
    "website designer",
    "UI UX design",
    "software development services",
    "web application development",
    "Android app developer",
    "freelancing services",
    "CodeMonarch",
    "website developer India",
    "best web developer",
    "fast website development",
    "startup website developer",
    "website development services India"
  ],

  authors: [{ name: "Sunny Rajput - CodeMonarch" }],

  creator: "CodeMonarch",
  publisher: "CodeMonarch",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  metadataBase: new URL("https://codemonarch.com"),

  alternates: {
    canonical: "https://codemonarch.com",
  },

  openGraph: {
    title:
      "CodeMonarch | Website Development & App Development Services",
    description:
      "Professional website and app development services for startups, businesses, and creators. Modern UI, SEO optimization, and high-performance applications.",
    url: "https://codemonarch.com",
    siteName: "CodeMonarch",
    images: [
      {
        url: "https://codemonarch.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeMonarch Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CodeMonarch | Website & App Development Services",
    description:
      "Hire CodeMonarch for modern website development, app development, and freelancing services.",
    creator: "@codemonarch",
    images: ["https://codemonarch.com/og-image.png"],
  },

  category: "technology",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "CodeMonarch",

    url: "https://codemonarch.com",

    logo: "https://codemonarch.com/logo.png",

    image: "https://codemonarch.com/og-image.png",

    description:
      "CodeMonarch provides website development, app development, UI/UX design, SEO optimization, and freelancing services for businesses and startups.",

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },

    founder: {
      "@type": "Person",
      name: "Sunny Rajput",
    },

    sameAs: [
      "https://www.instagram.com/codemonarchsunny/",
      "https://www.youtube.com/",
      "https://www.linkedin.com/",
      "https://github.com/"
    ],

    serviceType: [
      "Website Development",
      "Web Application Development",
      "Mobile App Development",
      "UI/UX Design",
      "SEO Services",
      "Freelancing Services",
    ],

    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      {/* SEO Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Codemonarchpage />
    </>
  );
}