import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_DATA = [
  {
    title: "YouTube Editing",
    desc: "Professional long-form editing for creators.",
    icon: "🎬",
  },
  {
    title: "Short Form Content",
    desc: "Viral reels, shorts & TikTok edits.",
    icon: "📱",
  },
  {
    title: "Motion Graphics",
    desc: "Premium animations and transitions.",
    icon: "✨",
  },
  {
    title: "Thumbnail Design",
    desc: "High CTR thumbnails for better clicks.",
    icon: "🖼️",
  },
  {
    title: "Podcast Editing",
    desc: "Audio cleanup + engaging visuals.",
    icon: "🎙️",
  },
];

function CardSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) =>
      prev === CARD_DATA.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CARD_DATA.length - 1 : prev - 1
    );
  };

  return (
    <section id="services" className="py-24 bg-black px-4 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            OUR <span className="text-green-400">Services</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            High-quality long-form edits for YouTube videos,
            podcasts, tutorials, documentaries, and more.
          </p>
        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        

        {/* LEFT SIDE CONTENT */}
        <div className="text-left">
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            <span className="text-white">What can I do</span>
            <br />
            <span className="text-green-400">for you</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
            I help creators and brands transform raw footage into engaging,
            high-converting content. From long-form YouTube videos to viral
            short-form edits, I deliver content that gets views, engagement,
            and results.
          </p>

          <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
            Book a Call Now →
          </button>
        </div>

        {/* RIGHT SIDE CARD STACK */}
        <div className="relative h-[450px] flex justify-center items-center">
          {CARD_DATA.map((card, index) => {
            const position =
              (index - activeIndex + CARD_DATA.length) %
              CARD_DATA.length;

            return (
              <div
                key={index}
                className="absolute w-[280px] sm:w-[340px] md:w-[380px] h-[350px] rounded-3xl p-8 bg-green-500/5 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-700"
                style={{
                  transform: `
                    translateX(${position * 50}px)
                    scale(${1 - position * 0.08})
                  `,
                  zIndex: CARD_DATA.length - position,
                  opacity: position > 2 ? 0 : 1,
                }}
              >
                <div className="text-6xl mb-6">{card.icon}</div>

                <h3 className="text-white text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}

          {/* Buttons */}
          <div className="absolute -bottom-16 flex gap-4">
            <button
              onClick={prevCard}
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-green-500 transition flex items-center justify-center"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={nextCard}
              className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 transition flex items-center justify-center"
            >
              <ChevronRight className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSliderSection;