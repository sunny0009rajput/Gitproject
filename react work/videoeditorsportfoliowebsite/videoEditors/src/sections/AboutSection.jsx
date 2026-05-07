import React from "react";
import youtubeIcon from "../assets/youtubeIcon.jpg";
import instagramIcon from "../assets/instagramIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import facebookIcon from "../assets/facebookIcon.png";

const AboutSection = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: (
        <img
          src={youtubeIcon}
          alt="YouTube"
          className="w-6 h-6 object-contain"
        />
      ),
      url: "#",
      hoverColor: "hover:bg-red-600",
    },
    {
      name: "Instagram",
      icon: (
        <img
          src={instagramIcon}
          alt="Instagram"
          className="w-6 h-6 object-contain"
        />
      ),
      url: "#",
      hoverColor: "hover:bg-pink-600",
    },
    {
      name: "Twitter",
      icon: (
        <img
          src={twitterIcon}
          alt="Twitter"
          className="w-6 h-6 object-contain"
        />
      ),
      url: "#",
      hoverColor: "hover:bg-blue-400",
    },
    {
      name: "Facebook",
      icon: (
        <img
          src={facebookIcon}
          alt="Facebook"
          className="w-6 h-6 object-contain"
        />
      ),
      url: "#",
      hoverColor: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-4">
      <section id="about"></section>
      <div className="max-w-7xl mx-auto">
        {/* Desktop and Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative group">
              <img
                src="https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
                alt="Dhruv Rathee"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Headphones Overlay Effect */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-800/30 to-transparent rounded-t-3xl"></div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* About Label */}
            <div>
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
                ABOUT ME
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              CREATIVE VIDEO EDITOR
            </h2>

            {/* Subtitle */}
            <p className="text-white/80 text-lg font-medium tracking-wide">
              VIDEO EDITOR • CONTENT CREATOR • STORYTELLER
            </p>

            {/* Description Paragraphs */}
            <div className="space-y-6">
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                I specialize in creating high-quality video content that
                captures attention and tells compelling stories. From YouTube
                videos and reels to commercials and cinematic edits, I focus on
                delivering visually engaging content.
              </p>

              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                With expertise in Adobe Premiere Pro, After Effects, motion
                graphics, transitions, color grading, and sound design, I help
                creators and brands bring their ideas to life through
                professional editing.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-white/80 text-base mb-4">Find Dhruv on:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          {/* Mobile Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
              alt="Dhruv Rathee"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl mx-auto"
            />

            {/* Mobile Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Mobile Content */}
          <div className="text-center space-y-6">
            {/* About Label */}
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
              ABOUT
            </span>

            {/* Mobile Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              CREATIVE VIDEO EDITOR
            </h2>

            {/* Mobile Subtitle */}
            <p className="text-white/80 text-base sm:text-lg font-medium tracking-wide">
              VIDEO EDITOR • CONTENT CREATOR • STORYTELLER
            </p>

            {/* Mobile Description */}
            <div className="space-y-4">
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                I create engaging videos for YouTube, social media, brands, and
                businesses that help them stand out online.
              </p>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                My skills include cinematic editing, reels editing, transitions,
                color correction, motion graphics, and storytelling.
              </p>
            </div>

            {/* Mobile Social Links */}
            <div className="pt-4">
              <p className="text-white/80 text-sm mb-4">Find Dhruv on:</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.hoverColor} active:scale-95`}
                    aria-label={social.name}
                  >
                    {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
