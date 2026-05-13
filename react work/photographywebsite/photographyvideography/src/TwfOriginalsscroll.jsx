import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Peer Vi Tu",
    views: "7.1M+ VIEWS",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    rotate: -10,
  },
  {
    id: 2,
    title: "Waheguru",
    views: "5.9M+ VIEWS",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    rotate: 0,
  },
  {
    id: 3,
    title: "Chal Le Chal",
    views: "805K+ VIEWS",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
    rotate: 10,
  },
];

const ease = (t) => 1 - Math.pow(1 - t, 4);

function VinylDisk({ progress }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 260,
        height: 260,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, #222 0%, #111 40%, #000 100%)",
        left: "50%",
        bottom: -20,
        transform: `
          translateX(-50%)
          translateY(${(1 - progress) * 160}px)
          rotate(${progress * 360}deg)
        `,
        transition: "transform .04s linear",
        zIndex: 1,
        boxShadow: "0 20px 50px rgba(0,0,0,.4)",
      }}
    >
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 18 + i * 9,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.05)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          width: 74,
          height: 74,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #f7e0af, #af8130)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#111",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </div>
  );
}

function Sleeve() {
  return (
    <div
      style={{
        width: 360,
        height: 360,
        background: "#ef111b",
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: "0 30px 80px rgba(0,0,0,.22)",
        zIndex: 5,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,.08), transparent 40%)",
        }}
      />

      <h1
        style={{
          position: "absolute",
          top: 62,
          width: "100%",
          textAlign: "center",
          fontSize: 58,
          color: "#f0d6a4",
          letterSpacing: ".08em",
          fontWeight: 400,
          fontFamily: "serif",
        }}
      >
        ORIGINALS
      </h1>
    </div>
  );
}

function ImageCard({ card, index, progress }) {
  /*
    START:
    all cards hidden INSIDE box

    THEN:
    slowly emerge upward
    THEN:
    spread left/right
  */

  const reveal = ease(progress);

  const x =
    index === 0
      ? -360 * reveal
      : index === 1
      ? 0
      : 360 * reveal;

  const y =
    index === 1
      ? -240 * reveal
      : -180 * reveal;

  const rotate = card.rotate * reveal;

  const scale = 0.6 + reveal * 0.4;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: 180,
        width: 330,
        transform: `
          translateX(-50%)
          translateX(${x}px)
          translateY(${-y}px)
          rotate(${rotate}deg)
          scale(${scale})
        `,
        transition: "transform .05s linear",
        zIndex: index === 1 ? 12 : 10,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,.2)",
        }}
      >
        <div
          style={{
            aspectRatio: "3/4",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={card.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,.45), transparent 40%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 20,
            }}
          >
            <h2
              style={{
                fontFamily: "cursive",
                color: "rgba(255,255,255,.92)",
                fontSize: 54,
                fontWeight: 400,
              }}
            >
              {card.title}
            </h2>
          </div>
        </div>

        <div
          style={{
            padding: "18px 10px 10px",
            background: "#f7f4ef",
          }}
        >
          <p
            style={{
              fontSize: 11,
              color: "#8d8d8d",
              letterSpacing: ".14em",
              marginBottom: 10,
            }}
          >
            TWF ORIGINALS → {card.views}
          </p>

          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: ".08em",
              color: "#222",
            }}
          >
            {card.title.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TWFOriginalsAnimation() {
  const scrollRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;

    const onScroll = () => {
      setScrollY(el.scrollTop);
    };

    el.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const vh =
    typeof window !== "undefined"
      ? window.innerHeight
      : 900;

  const totalHeight = vh * 5;

  /*
    Animation Timeline

    0 → 0.25
    disk rises

    0.2 → 1
    cards emerge from box slowly
  */

  const raw = Math.min(scrollY / (vh * 2.5), 1);

  const diskProgress = Math.min(raw / 0.3, 1);

  const cardsProgress = Math.max(
    0,
    (raw - 0.15) / 0.85
  );

  return (
    <div
      ref={scrollRef}
      style={{
        position: "fixed",
        inset: 0,
        overflowY: "scroll",
        background: "#f5f3ef",
        scrollbarWidth: "none",
      }}
    >
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          overflow:hidden;
          font-family:Arial;
        }

        ::-webkit-scrollbar{
          display:none;
        }
      `}</style>

      <div style={{ height: totalHeight }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* CENTER */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* IMAGE CARDS */}
            <div
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              {cards.map((card, index) => (
                <ImageCard
                  key={card.id}
                  card={card}
                  index={index}
                  progress={cardsProgress}
                />
              ))}
            </div>

            {/* VINYL */}
            <VinylDisk progress={diskProgress} />

            {/* BOX */}
            <Sleeve />
          </div>

          {/* SCROLL ICON */}
          <div
            style={{
              position: "absolute",
              bottom: 34,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid #111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "#111",
              }}
            >
              ↓
            </div>
          </div>

          {/* EXIT */}
          <div
            style={{
              position: "absolute",
              right: 34,
              bottom: 36,
              fontSize: 12,
              color: "#777",
              letterSpacing: ".12em",
            }}
          >
            ← EXIT
          </div>
        </div>
      </div>
    </div>
  );
}