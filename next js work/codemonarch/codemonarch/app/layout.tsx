import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeMonarch | Website Development & App Development Services",
  description: "CodeMonarch provides professional website development, app development, UI/UX design, SEO optimization, and freelancing services. Build modern websites, web apps, and mobile apps for your business.",
  metadataBase: new URL("https://codemonarch.com"),
  alternates: {
    canonical: "https://codemonarch.com",
  },
  openGraph: {
    title: "CodeMonarch | Website Development & App Development Services",
    description: "Professional website and app development services for startups, businesses, and creators.",
    url: "https://codemonarch.com",
    siteName: "CodeMonarch",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ✅ Schema Markup (JSON-LD) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeMonarch",
              url: "https://codemonarch.com",
              logo: "https://codemonarch.com/logo2.png",
              description: "Professional website development, app development, and digital services",
              sameAs: [
                "https://www.facebook.com/codemonarch",
                "https://twitter.com/codemonarch",
                "https://www.linkedin.com/company/codemonarch",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: ["IN", "US", "GB", "CA"],
              },
            }),
          }}
        />

        {/* ✅ Mobile & Performance Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="CodeMonarch" />
        <meta name="theme-color" content="#0000ff" />
        <meta name="color-scheme" content="light dark" />

        {/* ✅ Preconnect to External Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />

        {/* ✅ RSS Feed Link */}
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7WN5P2WGL7"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7WN5P2WGL7');
          `}
        </Script>

        {/* ✅ Google Tag Manager (GTM) */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WRVSRNQT');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRVSRNQT"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}