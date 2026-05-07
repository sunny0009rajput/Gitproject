import { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    icon: "🎬",
    title: "Thumbnail Design",
    desc: "Your thumbnail is your video's first impression. We create eye-catching, platform-specific thumbnails that entice viewers to click and watch. Our designs will reflect your content while grabbing attention instantly.",
    tag: "Design",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    desc: "We go beyond the edit! We optimize your video titles, descriptions, and tags to increase discoverability in search results on YouTube and other platforms. This helps your ideal audience find you effortlessly.",
    tag: "Growth",
  },
  {
    icon: "⚡",
    title: "Short Form Video",
    desc: "We craft bite-sized, high-impact edits perfect for capturing attention on platforms like Instagram Reels, YouTube Shorts, and TikTok. Our expertise ensures short-form content is engaging, dynamic, and packs a punch within seconds.",
    tag: "Editing",
  },
  {
    icon: "🎞️",
    title: "Long Form Video",
    desc: "From tutorials to vlogs, we edit long-form content that keeps viewers watching till the end. Precision cuts, seamless transitions, and compelling pacing — all handled with expert care.",
    tag: "Editing",
  },
  {
    icon: "🎨",
    title: "Motion Design",
    desc: "Elevate your videos with stunning motion graphics, animated intros, and dynamic overlays. We bring your brand identity to life through fluid, professional animations that captivate your audience.",
    tag: "Animation",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll(".service-card");
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - window.innerHeight / 2);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveCard(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; }
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.3); }
          50%      { box-shadow: 0 0 30px 8px rgba(34,197,94,0.15); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }

        .card-enter { animation: slideUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }

        .service-card {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.5s ease,
                      box-shadow 0.4s ease;
        }
        .service-card.active {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 32px 80px rgba(34,197,94,0.2), 0 0 0 1px rgba(34,197,94,0.3);
        }
        .service-card:not(.active) {
          opacity: 0.6;
          transform: scale(0.97);
        }
        .service-card:hover {
          opacity: 1 !important;
          transform: translateY(-12px) scale(1.03) !important;
          box-shadow: 0 40px 100px rgba(34,197,94,0.25) !important;
        }

        .dot {
          transition: all 0.3s ease;
        }
        .dot.active {
          background: #22c55e;
          height: 24px;
          border-radius: 4px;
        }

        .btn-glow:hover {
          box-shadow: 0 0 40px rgba(34,197,94,0.5);
          transform: translateY(-2px);
        }
        .btn-glow { transition: all 0.3s ease; }

        /* Sticky sidebar */
        .sticky-left {
          position: sticky;
          top: 30vh;
          align-self: flex-start;
        }

        @media (max-width: 768px) {
          .sticky-left { position: relative; top: auto; }
        }
      `}</style>

      <div className="bg-[#0a0a0a] font-sans">
  <section
    ref={sectionRef}
    className="relative bg-[#0a0a0a] max-w-7xl mx-auto px-4 sm:px-8 py-24 mt-20"
  >
    <div className="mb-16 md:mb-24 text-center md:text-left">
      
      <p className="text-green-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
        Services
      </p>

      <h2 className="syne text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
        What I can do{" "}
        <span className="text-green-400">for You</span>
      </h2>

    </div>
  </section>
</div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* LEFT — sticky */}
          <div className="md:w-5/12 sticky-left">
            <p className="inter text-gray-400 text-base leading-relaxed mb-8">
              We imagine and build experiences, products and businesses that disrupt the status quo, win hearts and realize the future. Explore how we work.
            </p>

            <a
              href="#contact"
              className="btn-glow inter inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-full text-sm mb-12"
            >
              Book a Call Now →
            </a>

            {/* Dot progress nav */}
            <div className="hidden md:flex flex-col gap-2 items-start">
              {SERVICES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const cards = cardsRef.current?.querySelectorAll(".service-card");
                    cards?.[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="flex items-center gap-3 group"
                >
                  <div className={`dot w-2 rounded-full bg-gray-600 ${activeCard === i ? "active" : "h-2"}`}></div>
                  <span className={`inter text-xs transition-all duration-300 ${activeCard === i ? "text-green-400 font-semibold" : "text-gray-600 group-hover:text-gray-400"}`}>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active card info — desktop only */}
            <div className="hidden md:block mt-10 p-5 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="text-3xl mb-2">{SERVICES[activeCard].icon}</div>
              <p className="inter text-green-400 text-xs font-semibold uppercase tracking-widest mb-1">{SERVICES[activeCard].tag}</p>
              <p className="syne text-white font-bold text-lg">{SERVICES[activeCard].title}</p>
            </div>
          </div>

          {/* RIGHT — scrollable cards */}
          <div ref={cardsRef} className="md:w-7/12 flex flex-col gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`service-card rounded-2xl p-8 cursor-pointer ${activeCard === i ? "active" : ""}`}
                style={{
                  background: activeCard === i
                    ? "linear-gradient(135deg, #16a34a 0%, #22c55e 60%, #4ade80 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: activeCard === i
                    ? "1px solid rgba(74,222,128,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
                onClick={() => {
                  const el = cardsRef.current?.querySelectorAll(".service-card")?.[i];
                  el?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                {/* Card top row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: activeCard === i ? "rgba(0,0,0,0.15)" : "rgba(34,197,94,0.1)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    className="inter text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: activeCard === i ? "rgba(0,0,0,0.15)" : "rgba(34,197,94,0.1)",
                      color: activeCard === i ? "#000" : "#22c55e",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>

                {/* Card content */}
                <h3
                  className="syne text-2xl font-black mb-3 leading-tight"
                  style={{ color: activeCard === i ? "#000" : "#fff" }}
                >
                  {s.title}
                </h3>
                <p
                  className="inter text-sm leading-relaxed"
                  style={{ color: activeCard === i ? "rgba(0,0,0,0.7)" : "#9ca3af" }}
                >
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300"
                    style={{
                      background: activeCard === i ? "rgba(0,0,0,0.15)" : "rgba(34,197,94,0.15)",
                      color: activeCard === i ? "#000" : "#22c55e",
                    }}
                  >
                    →
                  </div>
                  <span
                    className="inter text-xs font-medium"
                    style={{ color: activeCard === i ? "rgba(0,0,0,0.6)" : "#6b7280" }}
                  >
                    Learn more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  );
}