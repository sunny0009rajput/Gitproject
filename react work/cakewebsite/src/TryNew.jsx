import { useState, useEffect } from "react";
import cake from "./assets/cake.png";
import cake2 from "./assets/cake2.png";
import cake3 from "./assets/cake3.png";
import cake4 from "./assets/cake4.png";
import cake5 from "./assets/cake51.png";
import cake6 from "./assets/cake6.png";
// Google Fonts import via style tag
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Nunito:wght@400;500;600&display=swap');

  .font-dancing { font-family: 'Dancing Script', cursive; }
  .font-nunito { font-family: 'Nunito', sans-serif; }

  @keyframes floatUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatLeaf {
    0%, 100% { transform: translateY(0px) rotate(-10deg); }
    50% { transform: translateY(-18px) rotate(10deg); }
  }
  @keyframes scaleIn {
    0% { opacity: 0; transform: scale(0.85); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes slideInLeft {
    0% { opacity: 0; transform: translateX(-50px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .animate-float-up { animation: floatUp 0.7s ease forwards; }
  .animate-scale-in { animation: scaleIn 0.7s ease forwards; }
  .animate-slide-left { animation: slideInLeft 0.7s ease forwards; }
  .animate-fade-in { animation: fadeIn 0.5s ease forwards; }
  .animate-leaf { animation: floatLeaf 3s ease-in-out infinite; }
  .animate-leaf-delay { animation: floatLeaf 3.5s ease-in-out infinite 0.8s; }

  .delay-100 { animation-delay: 0.1s; opacity: 0; }
  .delay-200 { animation-delay: 0.2s; opacity: 0; }
  .delay-300 { animation-delay: 0.3s; opacity: 0; }
  .delay-500 { animation-delay: 0.5s; opacity: 0; }

  .cake-shadow {
    filter: drop-shadow(0px 20px 30px rgba(180, 80, 100, 0.25));
  }

  .btn-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(196, 80, 100, 0.4);
  }
  .btn-hover { transition: all 0.3s ease; }

  .nav-link-pink { color: #e05c7a; font-weight: 600; }

  .watermark-text {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(60px, 10vw, 130px);
    font-weight: 700;
    color: rgba(210, 120, 140, 0.13);
    pointer-events: none;
    user-select: none;
    letter-spacing: 0.05em;
    line-height: 1;
  }
`;

const cakes = [
  {
    id: 1,
    name: "Premium Blueberry Cake",
    image: cake,
    alt: "Blueberry drip cake with purple frosting",
  },
  {
    id: 2,
    name: "Strawberry Dream Cake",
    image: cake2,
    alt: "Strawberry cake with fresh berries",
  },
  {
    id: 3,
    name: "Chocolate Velvet Cake",
    image: cake3,
    alt: "Rich chocolate layer cake",
  },
  {
    id: 4,
    name: "Lemon Zest Cake",
    image: cake4,
    alt: "Zesty lemon cake with citrus glaze",
    },
    {
    id: 5,
    name: "Vanilla Dream Cake",
    image: cake5,
    alt: "Classic vanilla cake with buttercream frosting",
  },
  {
    id: 6,
    name: "Red Velvet Cake",
    image: cake6,
    alt: "Rich red velvet cake with cream cheese frosting",
  }
  
];

export default function DeliziaHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + cakes.length) % cakes.length);
  const next = () => goTo((current + 1) % cakes.length);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [current]);

  const cake = cakes[current];

  return (
    <>
      <style>{fontStyle}</style>
      <section
        className="font-nunito w-full min-h-screen relative overflow-hidden flex items-center"
        style={{ backgroundColor: "#f9c6cc" }}
      >
        {/* Background watermark text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 gap-2 opacity-80">
          <span className="watermark-text">DELICIOUS</span>
          <span className="watermark-text">DELICIOUS</span>
        </div>

        {/* Floating leaves - decorative */}
        <div className="absolute top-16 right-[38%] z-10 hidden md:block">
          <svg className="animate-leaf w-10 h-10" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="30" rx="12" ry="28" fill="#4CAF50" transform="rotate(-30 30 30)" />
            <ellipse cx="30" cy="30" rx="12" ry="28" fill="#66BB6A" opacity="0.6" transform="rotate(30 30 30)" />
            <line x1="30" y1="8" x2="30" y2="52" stroke="#2E7D32" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute top-10 right-[22%] z-10 hidden md:block">
          <svg className="animate-leaf-delay w-7 h-7" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="30" rx="12" ry="28" fill="#4CAF50" transform="rotate(-30 30 30)" />
            <ellipse cx="30" cy="30" rx="12" ry="28" fill="#81C784" opacity="0.6" transform="rotate(30 30 30)" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-[34%] z-10 hidden md:block">
          <svg className="animate-leaf w-8 h-8" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="30" rx="12" ry="28" fill="#388E3C" transform="rotate(-10 30 30)" />
            <ellipse cx="30" cy="30" rx="12" ry="28" fill="#66BB6A" opacity="0.5" transform="rotate(40 30 30)" />
          </svg>
        </div>

        {/* Main grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 md:py-0">

          {/* LEFT: Text content */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <h1
              className="font-dancing animate-slide-left leading-tight"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
                color: "#2b1414",
                animationDelay: "0.1s",
              }}
            >
              Try Our<br />New Creations
            </h1>

            <p
              className="font-nunito animate-float-up delay-300 text-sm md:text-base leading-relaxed max-w-sm"
              style={{ color: "#5a3030" }}
            >
              Discover the latest from our artisanal pastry shop,
              where we constantly add new desserts and homemade cakes,
              made with fresh, high-quality ingredients.
            </p>

            <div className="animate-float-up delay-500 mt-2">
              <button
                className="btn-hover font-nunito font-semibold text-white rounded-full px-8 py-3 text-sm md:text-base"
                style={{ backgroundColor: "#d45a72" }}
              >
                Order your cake now
              </button>
            </div>
          </div>

          {/* RIGHT: Cake carousel */}
          {/* RIGHT: Cake Swiper */}
<div className="relative flex flex-col items-center order-1 md:order-2 pt-8 md:pt-0">
  <div
    className="relative w-full h-[420px] flex items-center justify-center"
    style={{ perspective: "1000px" }}
  >
    {cakes.map((item, index) => {
      const diff = index - current;

      let position = diff;
      if (diff > cakes.length / 2) {
        position = diff - cakes.length;
      } else if (diff < -cakes.length / 2) {
        position = diff + cakes.length;
      }

      const isActive = position === 0;

      // show only center + side cakes
      let opacity = Math.abs(position) > 1 ? 0 : 1;
      let zIndex = 10 - Math.abs(position);

      let translateX = position * 220;
      let scale = isActive ? 1 : 0.8;

      let transform = `translateX(${translateX}px)`;

      if (!isActive) {
        transform += ` rotateY(${position * -25}deg) translateZ(-80px)`;
      }

      return (
        <div
          key={item.id}
          className="absolute transition-all duration-700 ease-out cursor-pointer"
          style={{
            transform,
            zIndex,
            opacity,
          }}
          onClick={() => goTo(index)}
        >
          <div
            className="w-64 md:w-72 rounded-2xl overflow-hidden"
            style={{
              transform: `scale(${scale})`,
            }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-[320px] object-cover rounded-2xl cake-shadow"
            />
          </div>
        </div>
      );
    })}
  </div>

  {/* Cake Name */}
  <h3
    className="font-dancing mt-6 text-center"
    style={{
      fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
      color: "#2b1414",
    }}
  >
    {cakes[current].name}
  </h3>

  {/* Navigation Buttons */}
  <div className="flex gap-3 mt-5">
    <button
      onClick={prev}
      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg btn-hover"
      style={{ backgroundColor: "#d45a72" }}
    >
      ←
    </button>

    <button
      onClick={next}
      className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg btn-hover border-2"
      style={{
        borderColor: "#2b1414",
        color: "#2b1414",
        backgroundColor: "transparent",
      }}
    >
      →
    </button>
  </div>

  {/* Dots */}
  <div className="flex gap-2 mt-4">
    {cakes.map((_, i) => (
      <button
        key={i}
        onClick={() => goTo(i)}
        className="rounded-full transition-all duration-300"
        style={{
          width: i === current ? "20px" : "8px",
          height: "8px",
          backgroundColor:
            i === current ? "#d45a72" : "rgba(180,80,100,0.35)",
        }}
      />
    ))}
  </div>
</div>
        </div>
      </section>
    </>
  );
}