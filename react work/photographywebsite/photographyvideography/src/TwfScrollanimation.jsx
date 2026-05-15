import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      className="w-full h-full"
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

      {/* BODY */}
      <rect
        x="40"
        y="120"
        width="620"
        height="220"
        rx="20"
        fill="url(#body)"
      />

      {/* TOP */}
      <rect
        x="120"
        y="70"
        width="420"
        height="60"
        rx="12"
        fill="#707070"
      />

      {/* KNOBS */}
      <circle cx="160" cy="100" r="22" fill="#555" />
      <circle cx="540" cy="100" r="22" fill="#555" />

      {/* LENS */}
      <circle cx="350" cy="230" r="92" fill="#333" />
      <circle cx="350" cy="230" r="78" fill="#222" />
      <circle cx="350" cy="230" r="62" fill="url(#lens)" />
      <circle cx="350" cy="230" r="42" fill="#050505" />

      {/* HIGHLIGHT */}
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
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function TWFOriginalsScroll() {
  const sectionRef = useRef(null);

  const cameraRef = useRef(null);

  const stackRefs = useRef([]);

  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATES
      gsap.set(stackRefs.current, {
        y: 320,
        rotate: 6,
        scale: 0.8,
        opacity: 0,
      });

      // CAMERA FLOAT
      gsap.to(cameraRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // MASTER TIMELINE
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=6000",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      scenes.forEach((scene, index) => {
        const card = stackRefs.current[index];

        // CARD ENTRY
        master.to(
          card,
          {
            y: -260,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          index * 1.2
        );

        // STACK EFFECT
        if (index > 0) {
          master.to(
            stackRefs.current[index - 1],
            {
              y: -180,
              scale: 0.92,
              rotate:
                index % 2 === 0 ? -6 : 6,
              opacity: 0.75,
              duration: 1,
            },
            index * 1.2
          );
        }

        // BACKGROUND CHANGE
        master.to(
          bgRef.current,
          {
            backgroundColor: scene.bg,
            duration: 1,
            ease: "none",
          },
          index * 1.2
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* SECTION */}
      <section
        ref={sectionRef}
        className="relative h-[110vh] overflow-hidden"
      >
        {/* BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[#b33939]"
        >
          {/* LIGHT EFFECTS */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 70% 20%, rgba(255,255,255,0.12), transparent 35%),
                radial-gradient(circle at 20% 80%, rgba(0,0,0,0.14), transparent 45%)
              `,
            }}
          />
        </div>

       

        {/* IMAGE STACK */}
        <div className="absolute left-1/2 bottom-[220px] -translate-x-1/2 w-[340px] h-[260px] z-20">
          {scenes.map((scene, index) => (
            <div
              key={scene.id}
              ref={(el) =>
                (stackRefs.current[index] = el)
              }
              className="absolute left-1/2 bottom-0
              w-[340px] h-[250px]
              -translate-x-1/2
              border-[12px] border-white
              rounded-md overflow-hidden
              shadow-[0_35px_70px_rgba(0,0,0,0.45)]"
            >
              <img
                src={scene.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CAMERA */}
        {/* <div
          ref={cameraRef}
          className="absolute left-1/2 bottom-[-30px]
          -translate-x-1/2
          w-[min(720px,85vw)]
          z-30
          drop-shadow-[0_-20px_40px_rgba(0,0,0,0.35)]"
        >
          <CameraSVG />
        </div> */}
        <div
  ref={cameraRef}
  className="absolute left-1/2 bottom-[-30px]
  -translate-x-1/2
  w-[min(720px,85vw)]
  z-30
  drop-shadow-[0_-20px_40px_rgba(0,0,0,0.35)]"
>
  <img
    src="/cameraimage.png"
    alt="camera"
    className="w-full h-auto object-contain"
  />
</div>

        
      </section>

      
    </>
  );
}