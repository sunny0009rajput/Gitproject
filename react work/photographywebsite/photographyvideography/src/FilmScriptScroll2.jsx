import { useEffect, useRef, useState } from "react";

/* ───────────────── Fonts & global styles ───────────────── */
const G = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;500&display=swap');

*,*::before,*::after{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

html{
  scroll-behavior:auto;
}

body{
  background:#f5f3ef;
  overflow-x:hidden;
}

::-webkit-scrollbar{
  width:4px;
}

::-webkit-scrollbar-track{
  background:#f0ece6;
}

::-webkit-scrollbar-thumb{
  background:#c8102e;
  border-radius:2px;
}
`;

/* ───────────────── Film strip holes ───────────────── */
function Perforations({ count = 20 }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "0 10px",
        justifyContent: "space-around",
        minHeight: "100%",
        height: "100%",
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 18,
            height: 14,
            borderRadius: 3,
            background: "#000",
            border: "2px solid #222",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────── Single angled film strip ───────────────── */
function FilmStrip({
  images,
  direction = 1,
  scrollY,
  speed = 0.4,
  rotate = -8,
}) {
  /*
    FIX:
    Large repeated images + dynamic offset
    so no blank gap appears.
  */

  const repeatedImages = Array(8).fill(images).flat();

  // different start offset for both directions
  const initialOffset = direction === -1 ? -2200 : -900;

  const translateX =
    initialOffset + scrollY * speed * direction * -1;

  return (
    <div
      style={{
        width: "150%",
        marginLeft: "-25%",
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center",
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "10px 0",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          borderTop: "3px solid #000",
          borderBottom: "3px solid #000",
          width: "100%",
          boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
        }}
      >
        {/* Left holes */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            height: 220,
          }}
        >
          <Perforations count={10} />
        </div>

        {/* Moving track */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              transform: `translateX(${translateX}px)`,
              willChange: "transform",
              transition: "transform 0.05s linear",
              padding: "0 12px",
              width: "max-content",
            }}
          >
            {repeatedImages.map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: "clamp(180px,22vw,280px)",
                  height: 200,
                  borderRadius: 10,
                  overflow: "hidden",
                  border: "2px solid #2a2a2a",
                  position: "relative",
                  background: "#000",
                }}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.92) contrast(1.04)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right holes */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            height: 220,
          }}
        >
          <Perforations count={10} />
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Images ───────────────── */
const strip1Images = [
  "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=400&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80",
];

const strip2Images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
  "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
  "https://images.unsplash.com/photo-1622495966027-e0173192c728?w=400&q=80",
];

const scenes = [
  { title: "THE STORY BEGINS", big: "ORIGINS" },
];

/* ───────────────── Main Component ───────────────── */
export default function FilmStripScroll() {
  const [scrollY, setScrollY] = useState(0);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{G}</style>

      <div style={{ background: "#f5f3ef" }}>
        {scenes.map((scene, idx) => (
          <section
            key={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              padding: "80px 0",
            }}
          >
            {/* Top Heading */}
            <div
              style={{
                textAlign: "center",
                marginBottom: 80,
                zIndex: 5,
                position: "relative",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(13px,1.6vw,17px)",
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  color: "#555",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {scene.title}
              </p>

              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(60px,11vw,150px)",
                  color: "#c8102e",
                  letterSpacing: "0.06em",
                  lineHeight: 0.9,
                }}
              >
                {scene.big}
              </h2>
            </div>

            {/* Strip 1 */}
            <FilmStrip
              images={strip1Images}
              direction={1}
              scrollY={scrollY}
              speed={0.35}
              rotate={-2}
            />

            {/* CENTER BOLD HEADING */}
            <div
              style={{
                textAlign: "center",
                margin: "70px 0",
                position: "relative",
                zIndex: 10,
              }}
            >
              <h1
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(40px,7vw,110px)",
                  color: "#111",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                }}
              >
                CINEMATIC MEMORIES
              </h1>

              <p
                style={{
                  marginTop: 12,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(16px,2vw,22px)",
                  color: "#666",
                  fontStyle: "italic",
                  letterSpacing: "0.08em",
                }}
              >
                Capturing timeless moments frame by frame
              </p>
            </div>

            {/* Strip 2 */}
            <FilmStrip
              images={strip2Images}
              direction={-1}
              scrollY={scrollY}
              speed={0.28}
              rotate={2}
            />
          </section>
        ))}
      </div>
    </>
  );
}