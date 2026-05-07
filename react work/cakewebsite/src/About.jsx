import { motion } from "framer-motion";
import chef from "./assets/chef.png";

// Using a real chef photo from Unsplash (two bakers in white uniforms)
const CHEF_IMG = chef;

// Decorative floating leaf
const Leaf = ({ style }) => (
  <svg viewBox="0 0 50 60" fill="none" style={style}>
    <ellipse cx="25" cy="30" rx="11" ry="26" fill="#4CAF50" transform="rotate(-25 25 30)" />
    <ellipse cx="25" cy="30" rx="11" ry="26" fill="#81C784" opacity="0.55" transform="rotate(25 30 30)" />
    <line x1="25" y1="6" x2="25" y2="54" stroke="#2E7D32" strokeWidth="1.4" />
  </svg>
);

export default function About() {
  return (
    <section
      style={{ backgroundColor: "#4b1a2a", fontFamily: "'Poppins', sans-serif" }}
      className="w-full min-h-screen relative overflow-hidden flex items-center"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;500;600&display=swap');

        @keyframes floatUp  { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-13px) rotate(2deg)} }
        @keyframes floatDn  { 0%,100%{transform:translateY(0) rotate(3deg)}  50%{transform:translateY(-9px) rotate(-3deg)} }
        @keyframes floatSl  { 0%,100%{transform:translateY(0)}               50%{transform:translateY(-8px)} }

        .fa { animation: floatUp 4s ease-in-out infinite; }
        .fb { animation: floatDn 5s ease-in-out infinite; }
        .fc { animation: floatSl 3.5s ease-in-out infinite; }

        .btn-about:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(201,75,110,0.45);
        }
        .btn-about { transition: all 0.25s ease; }
      `}</style>

      {/* ── TOP-RIGHT strawberry cake decoration ── */}
      <div className="absolute top-0 right-0 fc hidden md:block" style={{ zIndex: 3 }}>
        <img
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80"
          alt=""
          style={{
            width: 130, height: 130,
            objectFit: "cover",
            borderRadius: "0 0 0 60%",
            opacity: 0.92,
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* ── BOTTOM-LEFT cupcake ── */}
      <div className="absolute bottom-0 left-0 fb hidden md:block" style={{ zIndex: 3 }}>
        <img
          src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=200&q=80"
          alt=""
          style={{
            width: 110, height: 110,
            objectFit: "cover",
            borderRadius: "0 60% 0 0",
            opacity: 0.88,
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-0 flex flex-col md:flex-row items-center gap-10 md:gap-0">

        {/* ── LEFT: image in blob ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[50%] flex justify-center items-end relative"
          style={{ minHeight: 420 }}
        >
          {/* Pink organic blob */}
          <div
            style={{
              position: "absolute",
              width: "clamp(280px, 36vw, 440px)",
              height: "clamp(320px, 42vw, 500px)",
              backgroundColor: "#e96b83",
              borderRadius: "55% 45% 48% 52% / 52% 44% 56% 48%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />

          {/* Floating leaf on blob */}
          <div className="fa absolute hidden md:block" style={{ top: "18%", left: "18%", zIndex: 3 }}>
            <Leaf style={{ width: 28, height: 34 }} />
          </div>

          {/* Chef image — clipped to bottom of blob */}
          <div style={{ position: "relative", zIndex: 2, width: "clamp(260px,34vw,420px)" }}>
            <img
              src={CHEF_IMG}
              alt="Our bakers"
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                // Clip bottom of image so it bleeds into section bg naturally
                maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* ── RIGHT: text ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="w-full md:w-[50%] flex flex-col gap-5 text-white text-center md:text-left"
        >
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Our Passion For<br />Baking Cakes
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "0.92rem",
              lineHeight: 1.85,
              maxWidth: 460,
              fontWeight: 300,
            }}
          >
            We are a bakery specializing in homemade desserts, custom cakes,
            brownies, and a wide variety of gourmet sweets. Our passion for
            baking allows us to create perfect sweet experiences for
            celebrations, special events, or simply to enjoy anytime.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="btn-about text-white font-semibold shadow-lg"
              style={{
                background: "#c94b6e",
                borderRadius: 999,
                padding: "14px 40px",
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              View our products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}