import { useState, useEffect, useRef } from "react"; 
import cake from "./assets/cake.png";
import cake2 from "./assets/cake2.png";
import cake3 from "./assets/cake3.png";
import cake4 from "./assets/cake4.png";
import cake5 from "./assets/cake51.png";
import cake6 from "./assets/cake6.png";

const cakes = [
  {
    id: 1,
    src: cake,
    alt: "Strawberry Pink Cake",
    accent: "#3b0a14",
  },
  {
    id: 2,
    src: cake2,
    alt: "Chocolate Birthday Cake",
    accent: "#1e0d05",
  },
  {
    id: 3,
    src: cake3,
    alt: "Caramel Nut Cake",
    accent: "#2a0d1a",
  },
  {
    id: 4,
    src: cake4,
    alt: "Lemon Drizzle Cake",
    accent: "#3a1a0c",
  },
  {
    id: 5,
    src: cake5,
    alt: "Red Velvet Cake",
    accent: "#4b1a2a",
  },
  {
    id: 6,
    src: cake6,
    alt: "Vanilla Berry Cake",
    accent: "#2e0c1a",
  }
];

const BakeryIcon = ({ style, className, type }) => {
  if (type === "cupcake")
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke="#c94b6e" strokeWidth="1.2" style={style} className={className}>
        <path d="M12 22 Q10 16 20 14 Q30 16 28 22 Z" />
        <rect x="10" y="22" width="20" height="10" rx="2" />
        <path d="M15 22 L15 32 M20 22 L20 32 M25 22 L25 32" />
        <path d="M17 14 Q18 8 20 10 Q22 8 23 14" />
      </svg>
    );
  if (type === "slice")
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke="#c94b6e" strokeWidth="1.2" style={style} className={className}>
        <path d="M8 32 L20 8 L32 32 Z" />
        <path d="M8 32 Q20 28 32 32" />
        <path d="M11 26 Q20 22 29 26" />
        <path d="M14 20 Q20 17 26 20" />
      </svg>
    );
  return null;
};

// Realistic 3D cake stand SVG
const CakeStand = () => (
  <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 340 }}>
    <defs>
      <radialGradient id="plateGrad" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#4a4a4a" />
        <stop offset="60%" stopColor="#1e1e1e" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </radialGradient>
      <radialGradient id="plateTopGrad" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#5a5a5a" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </radialGradient>
      <radialGradient id="baseGrad" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#3d3d3d" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </radialGradient>
      <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#111" />
        <stop offset="30%" stopColor="#3a3a3a" />
        <stop offset="70%" stopColor="#2a2a2a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
    </defs>
    {/* Plate bottom ellipse (shadow) */}
    <ellipse cx="160" cy="26" rx="148" ry="22" fill="#0a0a0a" opacity="0.5" />
    {/* Plate body */}
    <path d="M12 18 Q160 38 308 18 L300 28 Q160 50 20 28 Z" fill="url(#plateGrad)" />
    {/* Plate top surface */}
    <ellipse cx="160" cy="18" rx="148" ry="22" fill="url(#plateTopGrad)" />
    {/* Plate rim highlight */}
    <ellipse cx="160" cy="16" rx="145" ry="19" fill="none" stroke="#555" strokeWidth="1.5" opacity="0.4" />
    {/* Stem top connector */}
    <ellipse cx="160" cy="46" rx="22" ry="8" fill="#111" />
    {/* Stem */}
    <path d="M138 46 Q140 72 130 90 L190 90 Q180 72 182 46 Z" fill="url(#stemGrad)" />
    {/* Stem highlight */}
    <path d="M155 46 Q156 72 150 90 L158 90 Q154 72 165 46 Z" fill="#3a3a3a" opacity="0.4" />
    {/* Base bottom ellipse shadow */}
    <ellipse cx="160" cy="115" rx="90" ry="13" fill="#000" opacity="0.35" />
    {/* Base body */}
    <path d="M70 90 Q160 104 250 90 L255 108 Q160 124 65 108 Z" fill="url(#baseGrad)" />
    {/* Base top surface */}
    <ellipse cx="160" cy="90" rx="90" ry="13" fill="url(#baseGrad)" />
    {/* Base top highlight */}
    <ellipse cx="160" cy="89" rx="87" ry="11" fill="none" stroke="#444" strokeWidth="1" opacity="0.5" />
    {/* Base rim */}
    <ellipse cx="160" cy="108" rx="93" ry="14" fill="#0d0d0d" />
    <ellipse cx="160" cy="107" rx="90" ry="12" fill="#1a1a1a" />
    <ellipse cx="160" cy="106" rx="88" ry="10" fill="none" stroke="#333" strokeWidth="1" opacity="0.6" />
  </svg>
);

export default function HeroSection() {
  const [currentCake, setCurrentCake] = useState(0);
  const [animating, setAnimating] = useState(false);
  const dragStartX = useRef(null);
  const autoRef = useRef(null);

  const switchCake = (nextIndex) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentCake((nextIndex + cakes.length) % cakes.length);
      setAnimating(false);
    }, 350);
  };

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrentCake((prev) => {
        const next = (prev + 1) % cakes.length;
        return next;
      });
    }, 3000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrentCake((prev) => (prev + 1) % cakes.length);
    }, 3000);
    return () => clearInterval(autoRef.current);
  }, []);

  const handleDragStart = (e) => {
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) {
      switchCake(diff > 0 ? currentCake + 1 : currentCake - 1);
      resetAuto();
    }
    dragStartX.current = null;
  };

  const handleClick = () => {
    switchCake(currentCake + 1);
    resetAuto();
  };

  return (
    <section
      className="w-full min-h-[calc(100vh-72px)] relative overflow-hidden flex items-center"
      style={{ backgroundColor: "#f9c8d2", fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600&display=swap');

        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(3deg)} }
        @keyframes floatR { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-9px) rotate(-4deg)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fadeSlideIn { from{opacity:0;transform:scale(0.92) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes fadeSlideOut { from{opacity:1;transform:scale(1) translateY(0)} to{opacity:0;transform:scale(0.92) translateY(-10px)} }

        .f1{animation:float 4s ease-in-out infinite}
        .f2{animation:floatR 5s ease-in-out infinite}
        .f3{animation:floatB 3.5s ease-in-out infinite}
        .cake-in{animation:fadeSlideIn 0.35s ease forwards}
        .cake-out{animation:fadeSlideOut 0.35s ease forwards}

        .btn-glow:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(201,75,110,0.45)}
        .btn-glow{transition:all 0.25s ease}
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-10 md:py-0 flex flex-col md:flex-row items-center gap-6 md:gap-0">

        {/* ── LEFT ── */}
        <div className="w-full md:w-[48%] flex flex-col items-start gap-5 relative z-10">

          {/* Floating cake slice image – top left */}
          <div className="absolute -left-2 top-[-10px] f2 hidden md:block" style={{ zIndex: 5 }}>
            <img
              src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=100&q=80"
              alt=""
              className="w-14 h-14 object-cover rounded-full shadow-lg"
              style={{ transform: "rotate(-15deg)", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
            />
          </div>

          {/* Balloons */}
          <div className="absolute left-[38%] -top-12 f3 hidden md:block" style={{ zIndex: 5 }}>
            <svg viewBox="0 0 110 130" width="95" height="120">
              {/* Strings */}
              <path d="M25 72 Q22 95 28 115" stroke="#555" strokeWidth="1" fill="none" opacity="0.7"/>
              <path d="M55 65 Q55 90 58 115" stroke="#555" strokeWidth="1" fill="none" opacity="0.7"/>
              <path d="M80 74 Q82 95 78 115" stroke="#555" strokeWidth="1" fill="none" opacity="0.7"/>
              {/* Black balloon left */}
              <defs>
                <radialGradient id="b1" cx="35%" cy="30%"><stop offset="0%" stopColor="#555"/><stop offset="100%" stopColor="#111"/></radialGradient>
                <radialGradient id="b2" cx="35%" cy="30%"><stop offset="0%" stopColor="#f0d060"/><stop offset="100%" stopColor="#b8860b"/></radialGradient>
                <radialGradient id="b3" cx="35%" cy="30%"><stop offset="0%" stopColor="#444"/><stop offset="100%" stopColor="#0d0d0d"/></radialGradient>
              </defs>
              <ellipse cx="25" cy="38" rx="18" ry="22" fill="url(#b1)"/>
              <ellipse cx="20" cy="30" rx="5" ry="4" fill="white" opacity="0.18" transform="rotate(-20 20 30)"/>
              <path d="M22 60 L25 67 L28 60" fill="url(#b1)"/>
              {/* Gold balloon center */}
              <ellipse cx="55" cy="30" rx="20" ry="24" fill="url(#b2)"/>
              <ellipse cx="48" cy="22" rx="6" ry="5" fill="white" opacity="0.22" transform="rotate(-20 48 22)"/>
              <path d="M51 54 L55 63 L59 54" fill="url(#b2)"/>
              {/* Dark balloon right */}
              <ellipse cx="82" cy="40" rx="16" ry="19" fill="url(#b3)"/>
              <ellipse cx="77" cy="33" rx="4" ry="3.5" fill="white" opacity="0.18" transform="rotate(-20 77 33)"/>
              <path d="M79 59 L82 66 L85 59" fill="url(#b3)"/>
            </svg>
          </div>

          {/* Heading */}
          <div className="mt-16 md:mt-0">
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.2rem,4.5vw,3.6rem)", color:"#1a0a0a", fontWeight:700, lineHeight:1.15 }}>
              Best Custom
            </h1>
            <h1 style={{ fontFamily:"'Dancing Script',cursive", fontSize:"clamp(2.4rem,5vw,4rem)", color:"#c94b6e", fontWeight:700, lineHeight:1.1 }}>
              Cakes Bakery
            </h1>
          </div>

          <p style={{ color:"#5a3a3a", fontSize:"0.9rem", maxWidth:"400px", lineHeight:1.75, fontWeight:300 }}>
            We create handcrafted cakes made with love, premium ingredients, and a touch of magic. Because life's sweetest moments deserve to be celebrated in a special way.
          </p>

          <button
            className="btn-glow mt-1 text-white font-semibold text-sm tracking-wide shadow-lg"
            style={{ background:"#c94b6e", borderRadius:"999px", padding:"14px 36px", fontFamily:"'Poppins',sans-serif", border:"none", cursor:"pointer" }}
          >
            Explore Our Cakes
          </button>

          {/* Floating cupcake SVG icon */}
          <div className="absolute left-0 bottom-[-50px] f1 hidden md:block">
            <BakeryIcon type="cupcake" style={{ width:52, height:52, opacity:0.45 }} />
          </div>

          {/* Floating chocolate slice bottom-center */}
          <div className="absolute left-[34%] bottom-[-30px] f2 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=100&q=80"
              alt=""
              style={{ width:58, height:58, objectFit:"cover", borderRadius:"50%", boxShadow:"0 6px 18px rgba(0,0,0,0.28)", transform:"rotate(14deg)" }}
            />
          </div>
        </div>

        {/* ── RIGHT: CAKE ── */}
        <div className="w-full md:w-[52%] flex justify-center items-end relative"
          style={{ minHeight: 440 }}>

          {/* Organic dark blob */}
          <div
            className="absolute"
            style={{
              width: "88%", height: "88%",
              top: "50%", right: "-2%",
              transform: "translateY(-50%)",
              background: cakes[currentCake].accent,
              borderRadius: "62% 38% 55% 45% / 48% 58% 42% 52%",
              transition: "background 0.6s ease",
              zIndex: 0,
            }}
          />

          {/* Decorative outline icons on blob */}
          <div className="absolute f1" style={{ top:"10%", right:"6%", zIndex:2 }}>
            <BakeryIcon type="cupcake" style={{ width:38, height:38, opacity:0.35 }} />
          </div>
          <div className="absolute f2" style={{ bottom:"18%", right:"3%", zIndex:2 }}>
            <BakeryIcon type="slice" style={{ width:38, height:38, opacity:0.35 }} />
          </div>

          {/* Mint leaves */}
          <div className="absolute f1" style={{ bottom:"16%", right:"2%", fontSize:26, zIndex:3 }}>🌿</div>
          <div className="absolute f2" style={{ top:"22%", left:"8%", fontSize:20, zIndex:3 }}>🌿</div>

          {/* Cake image + stand — draggable/clickable */}
          <div
            className="relative flex flex-col items-center select-none"
            style={{ zIndex: 10, cursor: "grab", userSelect: "none" }}
            onClick={handleClick}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            title="Click or swipe to change cake"
          >
            {/* Cake image — circular, sits on stand */}
            {/* <div
              style={{
                width: "clamp(220px, 28vw, 340px)",
                height: "clamp(220px, 28vw, 340px)",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 8px 20px rgba(0,0,0,0.3)",
                marginBottom: "-18px",
                position: "relative",
                zIndex: 2,
                flexShrink: 0,
              }}
            >
              <img
                key={currentCake}
                src={cakes[currentCake].src}
                alt={cakes[currentCake].alt}
                className={animating ? "cake-out" : "cake-in"}
                style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block", pointerEvents:"none" }}
                draggable={false}
              />
            </div> */}
            <div
  style={{
    position: "relative",
    zIndex: 2,
    marginBottom: "-18px",
    flexShrink: 0,
  }}
>
  <img
    key={currentCake}
    src={cakes[currentCake].src}
    alt={cakes[currentCake].alt}
    className={animating ? "cake-out" : "cake-in"}
    style={{
      width: "clamp(220px, 28vw, 340px)",
      height: "auto",
      objectFit: "contain",
      display: "block",
      pointerEvents: "none",
      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))"
    }}
    draggable={false}
  />
</div>

            {/* 3D Cake Stand */}
            <div style={{ position:"relative", zIndex:1, width:"clamp(220px,28vw,340px)", marginTop:0 }}>
              <CakeStand />
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-3" style={{ zIndex:5 }}>
              {cakes.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); switchCake(i); resetAuto(); }}
                  style={{
                    width: i === currentCake ? 22 : 9,
                    height: 9,
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    background: i === currentCake ? "#c94b6e" : "rgba(201,75,110,0.3)",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corner slice icon */}
      <div className="absolute top-5 left-5 f2 hidden md:block">
        <BakeryIcon type="slice" style={{ width:42, height:42, opacity:0.3 }} />
      </div>
    </section>
  );
}