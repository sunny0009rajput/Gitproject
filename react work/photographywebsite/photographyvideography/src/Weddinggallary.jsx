import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   YOUR IMAGES FROM PUBLIC FOLDER
───────────────────────────────────────────── */

const rows = [
  [
    {
      id: 1,
      year: "2024",
      names: "RAKUL & JACKKY",
      image: "img1.png",
      span: "col-span-1",
      tall: true,
      floaty: true,
    },
    {
      id: 2,
      year: "2022",
      names: "NAYANTHARA & VIGNESH",
      image: "img2.png",
      span: "col-span-2",
    },
    {
      id: 3,
      year: "2017",
      names: "VIRAT & ANUSHKA",
      image: "img3.png",
      span: "col-span-2",
    },
    {
      id: 4,
      year: "2021",
      names: "RAJKUMAR & PATRALEKHA",
      image: "img4.png",
      span: "col-span-2",
      floaty: true,
    },
    {
      id: 5,
      year: "2016",
      names: "BIPASHA & KARAN",
      image: "img5.png",
      span: "col-span-1",
      tall: true,
    },
  ],

  [
    {
      id: 6,
      year: "2024",
      names: "ALPANA & YASHRAJ",
      image: "img6.png",
      span: "col-span-1",
      tall: true,
    },
    {
      id: 7,
      year: "2023",
      names: "SIDHARTH & KIARA",
      image: "img7.png",
      span: "col-span-2",
      floaty: true,
    },
    {
      id: 8,
      year: "2021",
      names: "VICKY & KATRINA",
      image: "img8.png",
      span: "col-span-2",
    },
    {
      id: 9,
      year: "2021",
      names: "SHIBANI & FARHAN",
      image: "img9.png",
      span: "col-span-2",
    },
    {
      id: 10,
      year: "2018",
      names: "ISHA & AKASH",
      image: "img10.png",
      span: "col-span-1",
      tall: true,
      floaty: true,
    },
  ],

  [
    {
      id: 11,
      year: "2021",
      names: "DIA & VAIBHAV",
      image: "img11.png",
      span: "col-span-1",
      tall: true,
    },
    {
      id: 12,
      year: "2024",
      names: "RADHIKA & ANANT",
      image: "img12.png",
      span: "col-span-2",
    },
    {
      id: 13,
      year: "2024",
      names: "ADITI & SIDHARTH",
      image: "img13.png",
      span: "col-span-2",
      floaty: true,
    },
    {
      id: 14,
      year: "2019",
      names: "SHLOKA & AKASH",
      image: "img14.png",
      span: "col-span-2",
    },
    {
      id: 15,
      year: "2021",
      names: "VARUN & NATASHA",
      image: "img15.png",
      span: "col-span-1",
      tall: true,
    },
  ],
];

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */

function WeddingCard({ item, index }) {
  return (
    <div
      className={`
        wedding-card
        relative
        overflow-hidden
        rounded-2xl
        cursor-pointer
        group
        ${item.span}
        ${item.floaty ? "float-card" : ""}
      `}
      style={{
        minHeight: item.tall ? "230px" : "190px",
      }}
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.names}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <p className="text-[11px] tracking-[0.25em] text-amber-200/80 mb-1">
          {item.year}
        </p>

        <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
          {item.names}
        </h3>
      </div>

      {/* HOVER SHINE */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-700
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          -translate-x-full
          group-hover:translate-x-full
        "
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function WeddingGallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ─────────────────────────────
         ENTRY ANIMATION
      ───────────────────────────── */

      gsap.from(".wedding-card", {
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      /* ─────────────────────────────
         FLOATING COLUMN ANIMATION
         2nd & 4th vertical columns
      ───────────────────────────── */

      gsap.to(".float-card", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* ─────────────────────────────
         PARALLAX SCALE
      ───────────────────────────── */

      gsap.to(".wedding-card img", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        min-h-screen
        bg-[#0d0906]
        overflow-hidden
        px-3
        md:px-6
        py-16
      "
    >
      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="text-amber-300/70 tracking-[0.35em] text-xs uppercase mb-4">
          Celebrating Love
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-black
            text-white
            leading-none
          "
        >
          Celebrity
          <br />
          Weddings
        </h1>

        <p className="text-white/40 mt-5 tracking-[0.25em] text-xs uppercase">
          A Chronicle of Timeless Unions
        </p>
      </div>

      {/* GRID */}
      <div className="space-y-3">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="
              grid
              grid-cols-2
              md:grid-cols-8
              gap-3
            "
            style={{
              gridAutoRows:
                rowIndex === 1 ? "230px" : "210px",
            }}
          >
            {row.map((item, itemIdx) => (
              <WeddingCard
                key={item.id}
                item={item}
                index={itemIdx}
              />
            ))}
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="text-center pt-20">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-20 bg-white/20" />

          <span className="text-rose-300/60 text-xl">
            ♥
          </span>

          <div className="h-px w-20 bg-white/20" />
        </div>

        <p className="text-white/20 text-xs tracking-[0.3em] uppercase">
          And Many More Beautiful Stories
        </p>
      </div>
    </section>
  );
}