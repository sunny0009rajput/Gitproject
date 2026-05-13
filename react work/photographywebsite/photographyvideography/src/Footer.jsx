import { useState, useRef } from "react";

// ─── PASTE YOUR YOUTUBE VIDEO ID HERE ────────────────────────────────────────
// e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  "dQw4w9WgXcQ"
const DEFAULT_VIDEO_ID = "CKGMItyu_7o";
// ─────────────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    name: "Vimeo",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 7.42c-.09 2.09-1.55 4.95-4.38 8.59C14.72 19.7 12.2 21.5 10.1 21.5c-1.32 0-2.44-1.22-3.35-3.67L5.2 12.06C4.55 9.61 3.85 8.38 3.1 8.38c-.16 0-.73.34-1.69 1.02L0 8.08c1.06-.93 2.1-1.86 3.12-2.79C4.56 4.12 5.64 3.38 6.36 3.3c1.74-.17 2.81 1.02 3.21 3.57.43 2.74.73 4.44.9 5.1.5 2.27 1.05 3.4 1.65 3.4.47 0 1.17-.74 2.1-2.23.93-1.49 1.43-2.63 1.49-3.4.13-1.28-.37-1.93-1.49-1.93-.53 0-1.08.12-1.65.36 1.1-3.6 3.19-5.35 6.28-5.26 2.29.06 3.37 1.55 3.25 4.51z" />
      </svg>
    ),
  },
];

// Extracts video ID from a full YouTube URL or plain ID
function parseVideoId(input) {
  if (!input) return "";
  input = input.trim();
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1).split("?")[0];
    if (url.searchParams.get("v")) return url.searchParams.get("v");
  } catch (_) {}
  // assume it's already an ID if no URL parse
  return input.split("&")[0].split("?")[0];
}

// YouTube iframe embed as full-bleed background
function YouTubeBackground({ videoId }) {
  // Embed params: autoplay, mute, loop, no controls, no branding, cover mode
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {/*
        The iframe is made larger than the container and centred so the
        16:9 video always covers the footer area (like object-fit: cover).
        Min-width/height trick keeps it covering any aspect ratio.
      */}
      <iframe
        src={src}
        title="Background video"
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100% + 200px)",
          height: "calc(100% + 200px)",
          minWidth: "177.78vh", // 16/9 * 100vh
          minHeight: "56.25vw", // 9/16 * 100vw
          border: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function VideoFooter() {
  const [hovered, setHovered] = useState(null);

  // For the live demo — lets you type/paste a video ID or URL and see it instantly
  const [inputVal, setInputVal] = useState("");
  const [videoId, setVideoId] = useState(DEFAULT_VIDEO_ID);
  const [showInput, setShowInput] = useState(DEFAULT_VIDEO_ID === "YOUR_VIDEO_ID_HERE");

  const handleApply = () => {
    const id = parseVideoId(inputVal);
    if (id) { setVideoId(id); setShowInput(false); }
  };

  const isPlaceholder = videoId === "YOUR_VIDEO_ID_HERE";

  return (
    <div className="w-full" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

      {/* ── Video ID configurator (visible when no real ID set) ── */}
      {showInput && (
        <div
          className="w-full px-4 py-3 flex flex-col sm:flex-row items-center gap-3"
          style={{ background: "#111", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-xs shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
            YouTube video URL or ID:
          </span>
          <input
            type="text"
            placeholder="https://youtube.com/watch?v=... or VIDEO_ID"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleApply()}
            className="flex-1 rounded-lg px-3 py-2 text-xs outline-none"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "0.5px solid rgba(255,255,255,0.15)",
              color: "#fff",
              minWidth: 0,
            }}
          />
          <button
            onClick={handleApply}
            className="shrink-0 rounded-lg px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80"
            style={{ background: "#e8603c", color: "#fff", border: "none", cursor: "pointer" }}
          >
            Apply →
          </button>
        </div>
      )}

      {/* ── Main footer ── */}
      <footer
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(360px, 55vw, 520px)" }}
      >
        {/* YouTube background or placeholder */}
        {!isPlaceholder ? (
          <YouTubeBackground videoId={videoId} />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg,#1a0a00 0%,#2d1200 40%,#0d0d1a 100%)",
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ color: "rgba(255,255,255,0.15)", fontSize: "13px", letterSpacing: "0.1em" }}
            >
              ▶ Enter your YouTube video ID above to preview
            </div>
          </div>
        )}

        {/* Gradient overlay — top transparent → bottom dark for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        {/* Footer content layer */}
        <div
          className="relative z-10 flex flex-col items-center justify-end px-4 sm:px-8 pb-8 pt-12"
          style={{ minHeight: "clamp(360px, 55vw, 520px)" }}
        >
          {/* Spacer + CTA */}
          <div className="flex-1 flex items-center justify-center w-full">
            <a
              href="#enquire"
              className="flex items-center gap-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.90)",
                color: "#111",
                padding: "12px 32px",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                backdropFilter: "blur(14px)",
                boxShadow: "0 6px 32px rgba(0,0,0,0.22)",
                transform: hovered === "cta" ? "scale(1.03)" : "scale(1)",
              }}
              onMouseEnter={() => setHovered("cta")}
              onMouseLeave={() => setHovered(null)}
            >
              Enquire Now
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s",
                  transform: hovered === "cta" ? "translateX(5px)" : "translateX(0)",
                }}
              >
                →
              </span>
            </a>
          </div>

          {/* ── Contact strip ── */}
          <div
            className="w-full mt-6 px-5 sm:px-8 py-5 sm:py-6"
            style={{
              background: "rgba(0,0,0,0.42)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "0.5px solid rgba(255,255,255,0.09)",
              borderRadius: "16px",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4">

              {/* Phone */}
              <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Phone
                </span>
                <a
                  href="tel:+919819863229"
                  style={{ color: "rgba(255,255,255,0.88)", fontSize: "13px", fontWeight: 300, textDecoration: "none", letterSpacing: "0.04em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
                >
                  +91 98198 63229
                </a>
              </div>

              {/* Divider */}
              <div className="hidden sm:block" style={{ width: "0.5px", alignSelf: "stretch", background: "rgba(255,255,255,0.12)" }} />
              <div className="block sm:hidden w-full" style={{ height: "0.5px", background: "rgba(255,255,255,0.10)" }} />

              {/* Studio address */}
              <div className="flex flex-col items-center gap-1 text-center">
                <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  The Studio
                </span>
                <address
                  style={{ color: "rgba(255,255,255,0.82)", fontSize: "12px", fontWeight: 300, fontStyle: "normal", lineHeight: 1.65, letterSpacing: "0.02em" }}
                >
                  Astha Bunglow no.30, JP Rd, Aram Nagar Part 2,{" "}
                  <br className="hidden sm:block" />
                  Versova, Andheri West, Mumbai, Maharashtra 400061
                </address>
              </div>

              {/* Divider */}
              <div className="hidden sm:block" style={{ width: "0.5px", alignSelf: "stretch", background: "rgba(255,255,255,0.12)" }} />
              <div className="block sm:hidden w-full" style={{ height: "0.5px", background: "rgba(255,255,255,0.10)" }} />

              {/* Email */}
              <div className="flex flex-col items-center sm:items-end gap-1 text-center sm:text-right">
                <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Email
                </span>
                <a
                  href="mailto:info@theweddingfilmer.co.in"
                  style={{ color: "rgba(255,255,255,0.82)", fontSize: "13px", fontWeight: 300, textDecoration: "none", letterSpacing: "0.02em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
                >
                  info@theweddingfilmer.co.in
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Change video button (bottom-right corner, subtle) */}
        {!isPlaceholder && (
          <button
            onClick={() => setShowInput((v) => !v)}
            className="absolute bottom-4 right-4 z-20 text-xs px-3 py-1.5 rounded-full transition-opacity hover:opacity-100"
            style={{
              background: "rgba(0,0,0,0.45)",
              color: "rgba(255,255,255,0.45)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              opacity: 0.6,
              letterSpacing: "0.06em",
              fontSize: "10px",
            }}
          >
            ✎ Change video
          </button>
        )}
      </footer>

      {/* ── Bottom bar ── */}
      <div
        className="w-full px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ background: "#0c0c0c", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-center sm:text-left"
          style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "0.03em" }}
        >
          © 2024 — The Wedding Filmer &nbsp;|&nbsp;
          <span style={{ color: "rgba(255,255,255,0.2)" }}>Website Partners —</span>{" "}
          <a
            href="#"
            style={{ color: "#e8603c", textDecoration: "none", opacity: 0.85 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}
          >
            DesignAR
          </a>
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: "34px",
                height: "34px",
                border: "0.5px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.45)",
                background: "transparent",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}