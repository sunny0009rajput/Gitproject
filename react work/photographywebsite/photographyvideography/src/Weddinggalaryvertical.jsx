import { useEffect, useRef } from "react";
import gsap from "gsap";

/* ─────────────────────────────────────────────
   IMAGES FROM PUBLIC FOLDER

   public/gallery/img1.png
   public/gallery/img2.png
   ...
───────────────────────────────────────────── */

const columns = [
  [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
  ],

  [
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
  ],

  [
    "img9.png",
    "img10.png",
    "img11.png",
    "img12.png",
  ],

  [
    "img13.png",
    "img14.png",
    "img15.png",
    "img1.png",
  ],
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function InfiniteGallery() {
  const columnsRef = useRef([]);

  useEffect(() => {
    const animations = [];

    columnsRef.current.forEach((column, index) => {
      if (!column) return;

      // ODD / EVEN DIRECTION
      const direction = index % 2 === 0 ? -1 : 1;

      // HALF HEIGHT BECAUSE CONTENT IS DUPLICATED
      const totalHeight = column.scrollHeight / 2;

      // INITIAL POSITION
      gsap.set(column, {
        y: direction === 1 ? -totalHeight : 0,
      });

      // INFINITE LOOP
      const animation = gsap.to(column, {
        y: direction === 1 ? 0 : -totalHeight,

        duration: 22,

        ease: "none",

        repeat: -1,
      });

      animations.push(animation);
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, []);

  return (
    <section
      className="
        min-h-screen
        bg-[#0b0b0b]
        flex
        items-center
        justify-center
        px-4
        py-20
        overflow-hidden
      "
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          max-w-[1450px]
          bg-[#141414]
          rounded-[34px]
          overflow-hidden
          p-4
          md:p-8
          shadow-[0_30px_120px_rgba(0,0,0,0.5)]
        "
      >
        {/* HEADER */}
        <div className="text-center mb-12">
          <p
            className="
              text-white/40
              text-xs
              tracking-[0.35em]
              uppercase
              mb-4
            "
          >
            Endless Collection
          </p>

          <h1
            className="
              text-white
              text-5xl
              md:text-7xl
              font-black
              leading-none
            "
          >
            Infinite
            <br />
            Gallery
          </h1>

          <p
            className="
              text-white/30
              text-xs
              tracking-[0.25em]
              uppercase
              mt-5
            "
          >
            Smooth GSAP Infinite Scroll
          </p>
        </div>

        {/* GALLERY */}
        <div
          className="
            h-[750px]
            overflow-hidden
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
        >
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="relative overflow-hidden h-full"
            >
              {/* MOVING COLUMN */}
              <div
                ref={(el) =>
                  (columnsRef.current[columnIndex] = el)
                }
                className="
                  flex
                  flex-col
                  gap-4
                  will-change-transform
                "
              >
                {/* ORIGINAL IMAGES */}
                {column.map((image, index) => (
                  <div
                    key={`original-${index}`}
                    className="
                      relative
                      rounded-[24px]
                      overflow-hidden
                      shrink-0
                      group
                    "
                  >
                    <img
                      src={image}
                      alt=""
                      className="
                        w-full
                        h-[280px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />
                  </div>
                ))}

                {/* DUPLICATE FOR INFINITE LOOP */}
                {column.map((image, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="
                      relative
                      rounded-[24px]
                      overflow-hidden
                      shrink-0
                      group
                    "
                  >
                    <img
                      src={image}
                      alt=""
                      className="
                        w-full
                        h-[280px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="pt-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-20 h-px bg-white/20" />

            <span className="text-white/50 text-xl">
              ✦
            </span>

            <div className="w-20 h-px bg-white/20" />
          </div>

          <p
            className="
              text-white/25
              text-xs
              tracking-[0.3em]
              uppercase
            "
          >
            Infinite Vertical Loop Animation
          </p>
        </div>
      </div>
    </section>
  );
}