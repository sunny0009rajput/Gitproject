import { useEffect, useRef, useState } from "react";

/* ─── Fonts & global styles ─── */
const G = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:auto}
body{background:#f5f3ef;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:#f0ece6}
::-webkit-scrollbar-thumb{background:#c8102e;border-radius:2px}
`;

/* ─── Film strip perforations ─── */
function Perforations({ count = 20 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "0 10px", justifyContent: "space-around", minHeight: "100%", height: "100%" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ width: 18, height: 14, borderRadius: 3, background: "#000", border: "2px solid #222", flexShrink: 0 }} />
      ))}
    </div>
  );
}

/* ─── Single film strip ─── */
function FilmStrip({ images, direction = 1, scrollY, speed = 0.4 }) {
  const translateX = scrollY * speed * direction * -1;

  return (
    <div style={{
      background: "#111",
      padding: "10px 0",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      borderTop: "3px solid #000",
      borderBottom: "3px solid #000",
      width: "100%",
    }}>
      {/* Left sprocket holes */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", height: 220 }}>
        <Perforations count={10} />
      </div>

      {/* Scrolling image track */}
      <div style={{
        flex: 1,
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          display: "flex",
          gap: 12,
          transform: `translateX(${translateX}px)`,
          willChange: "transform",
          transition: "transform 0.05s linear",
          padding: "0 12px",
        }}>
          {/* Duplicate images for seamless feel */}
          {[...images, ...images, ...images].map((src, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: "clamp(180px, 22vw, 280px)",
              height: 200,
              borderRadius: 10,
              overflow: "hidden",
              border: "2px solid #2a2a2a",
              position: "relative",
            }}>
              <img
                src={src}
                alt=""
                loading="lazy"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.92) contrast(1.04)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right sprocket holes */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", height: 220 }}>
        <Perforations count={10} />
      </div>
    </div>
  );
}

/* ─── Image sets ─── */
const strip1Images = [
  "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=400&q=80", // monks
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", // wedding ballroom
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80", // mountains
  "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80", // forest
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80", // temple
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80", // wedding couple
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", // landscape
  "https://images.unsplash.com/photo-1537981931969-b2b6dd17f2f6?w=400&q=80", // desert
];

const strip2Images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80", // wedding group
  "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&q=80", // indian wedding
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80", // couple portrait
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80", // party crowd
  "https://images.unsplash.com/photo-1622495966027-e0173192c728?w=400&q=80", // celebration
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", // portrait
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80", // venue
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80", // reception
];

const scenes = [
  { title: "THE STORY BEGINS", big: "ORIGINS" },
  { title: "ACROSS THE WORLD", big: "JOURNEYS" },
  { title: "THE TEAM GETS", big: "BIGGER" },
  { title: "A DECADE OF", big: "MEMORIES" },
  { title: "THE VISION LIVES", big: "ON" },
];

/* ─── Main component ─── */
export default function FilmStripScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      // Determine active scene
      const winMid = window.scrollY + window.innerHeight * 0.4;
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (winMid >= top && winMid < bottom) setActiveScene(i);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{G}</style>

      {/* Exit button */}
      <div style={{
        position: "fixed", bottom: 32, right: 32, zIndex: 50,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 13, letterSpacing: "0.12em",
        color: "#888", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 6,
        textTransform: "uppercase",
      }}>
        ← exit
      </div>

      {/* Scroll down hint */}
      <div style={{
        position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
        zIndex: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <div style={{
          width: 36, height: 36, border: "1.5px solid #bbb",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          color: "#888", fontSize: 16, animation: "bounce 2s infinite",
        }}>↓</div>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(5px)}
        }
      `}</style>

      <div ref={containerRef} style={{ background: "#f5f3ef" }}>
        {scenes.map((scene, idx) => (
          <section
            key={idx}
            ref={el => sectionRefs.current[idx] = el}
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              paddingLeft: "clamp(80px, 10vw, 140px)",
              paddingRight: "clamp(16px, 4vw, 48px)",
            }}
          >
            {/* Headline */}
            <div style={{
              textAlign: "center",
              marginBottom: idx % 2 === 0 ? "clamp(24px,4vw,48px)" : 0,
              marginTop: idx % 2 !== 0 ? 0 : 0,
              order: idx % 2 === 0 ? 0 : 1,
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(13px,1.6vw,17px)",
                fontWeight: 300,
                letterSpacing: "0.28em",
                color: "#555",
                textTransform: "uppercase",
                marginBottom: 4,
              }}>
                {scene.title}
              </p>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(52px,10vw,130px)",
                color: "#c8102e",
                letterSpacing: "0.06em",
                lineHeight: 0.9,
              }}>
                {scene.big}
              </h2>
            </div>

            {/* Film strips */}
            <div style={{
              order: idx % 2 === 0 ? 1 : 0,
              marginBottom: idx % 2 !== 0 ? "clamp(24px,4vw,48px)" : 0,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginLeft: "calc(-1 * clamp(80px, 10vw, 140px))",
              marginRight: "calc(-1 * clamp(16px, 4vw, 48px))",
            }}>
              {/* Strip A — moves left on scroll down */}
              <FilmStrip
                images={strip1Images}
                direction={1}
                scrollY={scrollY}
                speed={0.35}
              />
              {/* Strip B — moves right on scroll down */}
              <FilmStrip
                images={strip2Images}
                direction={-1}
                scrollY={scrollY}
                speed={0.28}
              />
            </div>

          </section>
        ))}
      </div>
    </>
  );
}