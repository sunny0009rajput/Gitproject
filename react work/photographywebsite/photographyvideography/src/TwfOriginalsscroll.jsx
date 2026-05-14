import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    rotate: -14,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    rotate: 0,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
    rotate: 14,
  },
];

export default function TWFScrollAnimation() {
  const sectionRef = useRef(null);

  const diskRef = useRef(null);

  const redBoxRef = useRef(null);

  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATES
      gsap.set(cardsRef.current, {
        scale: 0.65,
        y: -100,
        zIndex: 1,
      });

      gsap.set(redBoxRef.current, {
        y: 0,
        scale: 1,
      });

      // TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% 50%",
          end: "90% 50%",
          scrub: 2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // DISK ROTATION
      tl.to(
        diskRef.current,
        {
          rotate: 1800,
          ease: "none",
          duration: 6,
        },
        0
      );

      // RED BOX MOVE DOWN
      tl.to(
        redBoxRef.current,
        {
          y: 200,
          scale: 0.96,
          duration: 3,
          ease: "power3.out",
        },
        0.4
      );

      // CENTER CARD
      tl.to(
        cardsRef.current[1],
        {
          y: -260,
          scale: 1,
          duration: 2.8,
          ease: "power4.out",
        },
        0.4
      );

      // LEFT CARD
      tl.to(
        cardsRef.current[0],
        {
          x: -430,
          y: -170,
          rotate: -14,
          scale: 1,
          duration: 3,
          ease: "power4.out",
        },
        0.7
      );

      // RIGHT CARD
      tl.to(
        cardsRef.current[2],
        {
          x: 430,
          y: -170,
          rotate: 14,
          scale: 1,
          duration: 3,
          ease: "power4.out",
        },
        0.7
      );

      // FINAL ARRANGEMENT
      tl.to(
        cardsRef.current[0],
        {
          x: -470,
          y: -130,
          rotate: -10,
          duration: 1.5,
          ease: "power2.out",
        },
        3
      );

      tl.to(
        cardsRef.current[1],
        {
          y: -220,
          duration: 1.5,
          ease: "power2.out",
        },
        3
      );

      tl.to(
        cardsRef.current[2],
        {
          x: 470,
          y: -130,
          rotate: 10,
          duration: 1.5,
          ease: "power2.out",
        },
        3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <section
        ref={sectionRef}
        className="relative h-[200vh] bg-[#f5f3ef] overflow-hidden"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* CARDS */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) =>
                  (cardsRef.current[index] = el)
                }
                className={`absolute
                left-1/2
                top-1/2
                w-[340px]
                -translate-x-1/2
                -translate-y-1/2
                ${
                  index === 1
                    ? "z-[2]"
                    : "z-[1]"
                }`}
              >
                <div className="bg-white rounded-[22px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RED BOX */}
          <div
            ref={redBoxRef}
            className="relative w-[380px] h-[380px] bg-[#e3121d] rounded-md overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.28)] z-[5]"
          >
            {/* LIGHT EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            {/* DISK */}
            <div
              ref={diskRef}
              className="absolute left-1/2 top-1/2
              w-[260px] h-[260px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-black"
            >
              {/* RINGS */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    inset: 14 + i * 9,
                  }}
                />
              ))}

              {/* CENTER LABEL */}
              <div
                className="absolute left-1/2 top-1/2
                w-[74px] h-[74px]
                rounded-full
                bg-gradient-to-br
                from-yellow-200 to-yellow-700
                -translate-x-1/2 -translate-y-1/2"
              />

              {/* CENTER DOT */}
              <div
                className="absolute left-1/2 top-1/2
                w-[10px] h-[10px]
                rounded-full bg-black
                -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION */}
      
    </>
  );
}