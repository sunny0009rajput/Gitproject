import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   SCENES
───────────────────────────────────────────── */

const scenes = [
  {
    id: 1,
    bg: "#b33939",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
  },

  {
    id: 2,
    bg: "#c97d60",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
  },

  {
    id: 3,
    bg: "#5b8fa8",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
  },

  {
    id: 4,
    bg: "#6d597a",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
];

/* ─────────────────────────────────────────────
   CAMERA SVG
───────────────────────────────────────────── */

function CameraSVG() {
  return (
    <svg
      viewBox="0 0 700 380"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="body" x1="0" x2="1">
          <stop offset="0%" stopColor="#1d1d1d" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>

        <radialGradient id="lens">
          <stop offset="0%" stopColor="#050505" />
          <stop offset="50%" stopColor="#111" />
          <stop offset="100%" stopColor="#222" />
        </radialGradient>
      </defs>

      {/* body */}
      <rect
        x="40"
        y="120"
        width="620"
        height="220"
        rx="20"
        fill="url(#body)"
      />

      {/* top */}
      <rect
        x="120"
        y="70"
        width="420"
        height="60"
        rx="12"
        fill="#707070"
      />

      {/* knobs */}
      <circle cx="160" cy="100" r="22" fill="#555" />
      <circle cx="540" cy="100" r="22" fill="#555" />

      {/* lens */}
      <circle cx="350" cy="230" r="92" fill="#333" />
      <circle cx="350" cy="230" r="78" fill="#222" />
      <circle cx="350" cy="230" r="62" fill="url(#lens)" />
      <circle cx="350" cy="230" r="42" fill="#050505" />

      {/* highlight */}
      <circle
        cx="330"
        cy="208"
        r="8"
        fill="rgba(255,255,255,0.08)"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */

export default function SmoothCameraScroll() {
  const containerRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  const vh =
    typeof window !== "undefined"
      ? window.innerHeight
      : 1000;

  const sceneHeight = vh * 1.8;

  const totalHeight = sceneHeight * scenes.length;

  /* ───────────────────────────────────────── */

  useEffect(() => {
    const el = containerRef.current;

    const handleScroll = () => {
      setScrollY(el.scrollTop);
    };

    el.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ─────────────────────────────────────────
     SCENE
  ───────────────────────────────────────── */

  const sceneIndex = Math.min(
    Math.floor(scrollY / sceneHeight),
    scenes.length - 1
  );

  const progress =
    (scrollY - sceneIndex * sceneHeight) /
    sceneHeight;

  const currentScene = scenes[sceneIndex];

  const nextScene =
    scenes[Math.min(sceneIndex + 1, scenes.length - 1)];

  /* ─────────────────────────────────────────
     BACKGROUND BLEND
  ───────────────────────────────────────── */

  const hexToRgb = (hex) => {
    const n = parseInt(hex.slice(1), 16);

    return {
      r: (n >> 16) & 255,
      g: (n >> 8) & 255,
      b: n & 255,
    };
  };

  const mix = (a, b, t) => a + (b - a) * t;

  const c1 = hexToRgb(currentScene.bg);
  const c2 = hexToRgb(nextScene.bg);

  const bgProgress =
    progress > 0.6 ? (progress - 0.6) / 0.4 : 0;

  const bg = `rgb(
    ${mix(c1.r, c2.r, bgProgress)},
    ${mix(c1.g, c2.g, bgProgress)},
    ${mix(c1.b, c2.b, bgProgress)}
  )`;

  /* ─────────────────────────────────────────
     IMAGE STACK ANIMATION
  ───────────────────────────────────────── */

  const ease = (t) => 1 - Math.pow(1 - t, 4);

  const imageProgress = ease(
    Math.min(Math.max(progress, 0), 1)
  );

  /* current image */
  const currentY = 300 - imageProgress * 360;

  const currentRotate =
    6 - imageProgress * 6;

  const currentScale =
    0.8 + imageProgress * 0.2;

  const currentOpacity = imageProgress;

  /* previous stack */
  const previousImages = scenes.slice(
    0,
    sceneIndex
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: `${totalHeight + vh}px`,
        overflowY: "scroll",
        overflowX: "hidden",
        background: bg,
      }}
    >
      {/* scroll space */}
      <div
        style={{
          height: totalHeight + vh,
        }}
      >
        {/* sticky scene */}
        <div
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background: bg,
            transition:
              "background 120ms linear",
          }}
        >
          {/* ambient lights */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `
                radial-gradient(circle at 70% 20%, rgba(255,255,255,0.12), transparent 35%),
                radial-gradient(circle at 20% 80%, rgba(0,0,0,0.14), transparent 45%)
              `,
            }}
          />

          {/* IMAGE STACK */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 220,
              transform: "translateX(-50%)",
              width: 340,
              height: 260,
              zIndex: 10,
            }}
          >
            {/* PREVIOUS STACKED IMAGES */}

            {previousImages.map((img, i) => {
              const depth =
                previousImages.length - i;

              return (
                <div
                  key={img.id}
                  style={{
                    position: "absolute",

                    width: 320,
                    height: 230,

                    left: "50%",
                    bottom: `${depth * -8}px`,

                    transform: `
                      translateX(-50%)
                      rotate(${depth % 2 === 0 ? -6 : 6}deg)
                      scale(${1 - depth * 0.03})
                    `,

                    border: "12px solid white",
                    borderRadius: 6,

                    overflow: "hidden",

                    opacity: 0.95 - depth * 0.12,

                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.25)",
                  }}
                >
                  <img
                    src={img.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}

            {/* CURRENT IMAGE */}

            <div
              style={{
                position: "absolute",

                width: 340,
                height: 250,

                left: "50%",
                bottom: 0,

                transform: `
                  translateX(-50%)
                  translateY(${currentY}px)
                  rotate(${currentRotate}deg)
                  scale(${currentScale})
                `,

                opacity: currentOpacity,

                border: "12px solid white",
                borderRadius: 6,

                overflow: "hidden",

                boxShadow:
                  "0 35px 70px rgba(0,0,0,0.45)",

                willChange: "transform",
              }}
            >
              <img
                src={currentScene.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* CAMERA */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: -30,
              transform: "translateX(-50%)",

              width: "min(720px,85vw)",

              zIndex: 20,

              filter:
                "drop-shadow(0 -20px 40px rgba(0,0,0,0.35))",
            }}
          >
            <CameraSVG />
          </div>

          {/* SIDE NAV */}
          <div
            style={{
              position: "absolute",
              left: 32,
              top: "50%",
              transform: "translateY(-50%)",

              display: "flex",
              flexDirection: "column",
              gap: 18,

              zIndex: 50,
            }}
          >
            {scenes.map((s, i) => (
              <div
                key={s.id}
                style={{
                  color:
                    i === sceneIndex
                      ? "white"
                      : "rgba(255,255,255,0.35)",

                  fontSize: 13,
                  letterSpacing: "0.15em",

                  display: "flex",
                  alignItems: "center",
                  gap: 8,

                  transition: "0.3s",

                  fontFamily: "sans-serif",
                }}
              >
                {i === sceneIndex && <span>▶</span>}

                {i === sceneIndex
                  ? `Scene ${s.id}`
                  : s.id}
              </div>
            ))}
          </div>

          {/* BRAND */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: 32,

              color: "rgba(255,255,255,0.55)",

              letterSpacing: "0.28em",

              fontSize: 12,

              zIndex: 50,

              fontFamily: "sans-serif",
            }}
          >
            TWF's Story//
          </div>

          {/* SCROLL INDICATOR */}
          {scrollY < 80 && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 28,

                transform: "translateX(-50%)",

                color: "rgba(255,255,255,0.7)",

                fontSize: 28,

                animation:
                  "bounce 2s infinite",

                zIndex: 50,
              }}
            >
              ↓
            </div>
          )}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        body{
          overflow:hidden;
          background:#111;
        }

        ::-webkit-scrollbar{
          display:none;
        }

        @keyframes bounce{
          0%,100%{
            transform:translateX(-50%) translateY(0);
          }

          50%{
            transform:translateX(-50%) translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}