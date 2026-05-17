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

export const metadata = {
  title: "CodeMonarch Academy",
  description: "Prepare for SSC exams with CodeMonarch Academy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="6Pi_urUbWqfF-CnaQTtyN-gO6Bh5i4a5dGaPX6yY3ug"
        />
        {/* monetag ads*/}
        <meta name="monetag" content="3efa3a55b1873f59648cb05a09647f33"></meta>
        {/* monetag ads multi ads*/}
        {/* <script
          src="https://fpyf8.com/88/tag.min.js"
          data-zone="182317"
          async
          data-cfasync="false"
        ></script> */}
        {/* in page push */}
        <Script id="monetag-tag6" strategy="afterInteractive">
  {`
    (function(s){
      s.dataset.zone='10130288',
      s.src='https://forfrogadiertor.com/tag.min.js'
    })
    (
      [document.documentElement, document.body]
      .filter(Boolean)
      .pop()
      .appendChild(document.createElement('script'))
    );
  `}
</Script>
{/* native banner interstial */}
{/* <Script id="monetag-tag7" strategy="afterInteractive">
  {`
    (function(s){
      s.dataset.zone='10130297',
      s.src='https://groleegni.net/vignette.min.js'
    })
    (
      [document.documentElement, document.body]
      .filter(Boolean)
      .pop()
      .appendChild(document.createElement('script'))
    );
  `}
</Script> */}
{/*  vigenete banner*/}
<Script id="monetag-tag8" strategy="afterInteractive">
  {`
    (function(s){
      s.dataset.zone='10130643',
      s.src='https://gizokraijaw.net/vignette.min.js'
    })
    (
      [document.documentElement, document.body]
      .filter(Boolean)
      .pop()
      .appendChild(document.createElement('script'))
    );
  `}
</Script>


{/* direct ads */ }
{/* https://otieu.com/4/10130318 */}


        {/* ✅ Monetag (Tag 1) */}
        <script src="https://3nbf4.com/act/files/tag.min.js?z=10130181" data-cfasync="false" async></script>
        

        {/* ✅ Monetag (Vignette) banners*/}
        <Script id="monetag-tag2" strategy="afterInteractive">
          {`
    (function() {
      const s = document.createElement('script');
      s.dataset.zone = '10129931';
      s.src = 'https://groleegni.net/vignette.min.js';
      (document.body || document.documentElement).appendChild(s);
    })();
  `}

  {/* <Script id="monetag-tag3" strategy="afterInteractive">
  {`
    (function() {
      const s = document.createElement('script');
      s.dataset.zone = '10129975';
      s.src = 'https://al5sm.com/tag.min.js';
      (document.body || document.documentElement).appendChild(s);
    })();
  `}
</Script> */}

        </Script>

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K0R1XLZNC4"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K0R1XLZNC4');
          `}
        </Script>

        {/* ✅ Google Tag Manager (GTM) */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TTSLZKNM');
          `}
        </Script>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9833872963354500"
          crossorigin="anonymous"
        ></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTSLZKNM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}