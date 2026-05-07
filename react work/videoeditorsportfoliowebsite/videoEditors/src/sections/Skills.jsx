import { useState } from "react";
import premiereIcon from "../assets/ap.png";
import afterEffectsIcon from "../assets/afterEffect.png";
import davinciIcon from "../assets/davinci.png";
import finalCutIcon from "../assets/finalcut.png";
import auditionIcon from "../assets/audition.png";
// import cinema4dIcon from "../assets/cinema4d.png";
import photoshopIcon from "../assets/photoshop.png";
import illustratorIcon from "../assets/illustrator.png";

const skills = [
  {
    category: "Video Editing",
    icon: "🎬",
    items: [
      { name: "Adobe Premiere Pro", level: 95 },
      { name: "DaVinci Resolve", level: 90 },
      { name: "Final Cut Pro", level: 85 },
      { name: "After Effects", level: 88 },
    ],
  },
  {
    category: "Motion Graphics",
    icon: "✨",
    items: [
      { name: "After Effects", level: 88 },
      { name: "Cinema 4D", level: 75 },
      { name: "Motion Bro", level: 80 },
      { name: "Lottie Animation", level: 70 },
    ],
  },
  {
    category: "Color Grading",
    icon: "🎨",
    items: [
      { name: "DaVinci Color", level: 92 },
      { name: "Lumetri Color", level: 87 },
      { name: "LUT Creation", level: 82 },
      { name: "HDR Grading", level: 78 },
    ],
  },
  {
    category: "Audio Design",
    icon: "🎵",
    items: [
      { name: "Adobe Audition", level: 85 },
      { name: "Sound Mixing", level: 88 },
      { name: "Foley Design", level: 72 },
      { name: "Music Sync", level: 90 },
    ],
  },
  {
    category: "VFX & Compositing",
    icon: "🌟",
    items: [
      { name: "Green Screen / VFX", level: 83 },
      { name: "Nuke Compositing", level: 68 },
      { name: "Rotoscoping", level: 80 },
      { name: "Tracking & Match Move", level: 77 },
    ],
  },
  {
    category: "Content & Format",
    icon: "📱",
    items: [
      { name: "YouTube / Long-form", level: 95 },
      { name: "Reels / Shorts", level: 92 },
      { name: "Documentary Editing", level: 85 },
      { name: "Brand Videos", level: 88 },
    ],
  },
];

const tools = [
  { name: "Premiere Pro", icon: premiereIcon },
  { name: "After Effects", icon: afterEffectsIcon },
  { name: "DaVinci", icon: davinciIcon },
  { name: "Audition", icon: auditionIcon },
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Illustrator", icon: illustratorIcon },
];

function SkillBar({ name, level, delay }) {
  const [animated, setAnimated] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setAnimated(true)}
      onMouseLeave={() => setAnimated(false)}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-semibold tracking-widest text-white uppercase">
          {name}
        </span>
        <span className="text-xs font-bold text-white">{level}%</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-black overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #16a34a, #4ade80)",
            boxShadow: "0 0 8px #4ade8088",
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, icon, items, index }) {
  return (
    <div
      className="relative rounded-2xl border border-green-800/50 bg-black/40 backdrop-blur-sm overflow-hidden p-6 hover:border-green-500/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/40"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-bl-3xl" />
      <div className="absolute top-0 right-0 w-4 h-4 bg-green-400/60 rounded-bl-2xl" />

      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-lg">
          {icon}
        </div>
        <h3 className="text-sm font-bold tracking-widest text-white uppercase">
          {category}
        </h3>
      </div>

      <div className="space-y-4">
        {items.map((skill, i) => (
          <SkillBar key={i} name={skill.name} level={skill.level} delay={i} />
        ))}
      </div>
    </div>
  );
}

export default function VideoEditorSkills() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <section id="portfolio"></section>
      {/* Animated grid background */}
      {/* <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#16a34a22 1px, transparent 1px), linear-gradient(90deg, #16a34a22 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      /> */}

      {/* Glow blobs */}
      {/* <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #15803d33 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/40 bg-green-500/10 text-white text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Portfolio · Skills
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-none"
            style={{
              fontFamily: "'Courier New', monospace",
              background:
                "linear-gradient(135deg, #bbf7d0 0%, #4ade80 50%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            CRAFT &amp; TOOLS
          </h1>

          <p className="text-white/70 text-sm sm:text-base tracking-widest max-w-xl mx-auto leading-relaxed">
            Every frame is intentional. Every cut tells a story.
            <br className="hidden sm:block" />
            Here's what I bring to the edit bay.
          </p>

          {/* Decorative line */}
          <div className="flex items-center gap-4 mt-8 max-w-sm mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-green-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-green-500/60" />
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {[
            { value: "6+", label: "Years Experience" },
            { value: "300+", label: "Projects Done" },
            { value: "50M+", label: "Views Generated" },
            { value: "40+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-green-800/10 bg-[#0a1a0f]/60 p-4 text-center"
            >
              <div
                className="text-2xl sm:text-3xl font-black text-white leading-none"
                style={{ textShadow: "0 0 20px #4ade8066" }}
              >
                {stat.value}
              </div>
              <div className="text-white text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>

        {/* Tools Section */}
        <div className="rounded-2xl border border-green-800/10 bg-[#0a1a0f]/80 backdrop-blur-sm p-6 sm:p-8">
  
  <h2 className="text-xs font-bold tracking-widest text-white uppercase mb-6 text-center">
    ⬡ Software Arsenal
  </h2>

  <div className="flex flex-wrap justify-evenly items-center gap-y-6 w-full">
    {tools.map((tool, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-2 group cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-green-800/60 bg-green-950/60 group-hover:border-green-400/70 group-hover:bg-green-900/40 transition-all duration-200 group-hover:scale-110">
          
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-8 h-8 object-contain"
          />
          
        </div>

        <span className="text-white text-[10px] tracking-wider text-center leading-tight group-hover:text-green-400 transition-colors">
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}
