
import { useState, useEffect } from "react";
import VideoSection from "./VideoSection";

export default function Hero({ activeVideo, setActiveVideo }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((v) => (v + 1) % VIDEOS.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [setActiveVideo]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden bg-black text-white">
      
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-green-950"></div>

      {/* Top Right Green Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_30%)]"></div>

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(34,197,94,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Blur Glow Left */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-[120px]"></div>

      {/* Blur Glow Right */}
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-400/10 rounded-full blur-[120px]"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-sm text-green-400 border border-green-500/30">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for new projects
        </div>

        {/* Hero Heading */}
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight">
          Unleash Your <br />
          Viral Potential <br />
          <span className="text-green-400 green-glow">
            With Pro Editing
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We transform raw footage into captivating content that gets seen,
          shared, and loved. Take your channel to the next level with expert
          editing magic.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Simga Builder, Need Consultation for construction project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Sigma Builder on WhatsApp"
              
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            Hire Me →
          </a>

          <a
            href="#work"
            className="glass border border-green-500/40 hover:border-green-400 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:bg-green-500/10"
          >
            See Portfolio
          </a>
        </div>

        {/* Client Badge */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["AT", "PS", "ML"].map((a) => (
              <div
                key={a}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-xs font-bold text-black border-2 border-black"
              >
                {a}
              </div>
            ))}
          </div>

          <span className="text-gray-400 text-sm">
            Worked with{" "}
            <span className="text-green-400 font-semibold">
              50+ clients
            </span>
          </span>
        </div>
      </div>

      {/* Video Showcase Section */}
      
    </section>
  );
}