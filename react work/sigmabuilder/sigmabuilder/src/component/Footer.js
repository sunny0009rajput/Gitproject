import React from 'react';
import { Youtube, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Review", url: "/review" },
    { name: "Services", url: "/services" },
    { name: "Tech Support", url: "/contact" },
    { name: "Projects", url: "/projects" },
    { name: "Contact Us", url: "/contact" },
    {name: "Top", url: ""},
    { name: "About Us", url: "/about" }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border-t border-gray-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Section - Logo, Brand, Description */}
          <div className="space-y-6">
            {/* Logo and Brand */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <div className="w-24 h-10 flex items-center justify-center">
                <img className="h-full w-auto" src="logo1.png" alt="Sigma Builder"/>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  SIGMA BUILDER
                </span>
                <span className="text-blue-200 text-lg font-semibold leading-none mt-1">
                  Making a house a home
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-md mt-4">
              <p className="text-white/80 text-base leading-relaxed">
                At Sigma Builder, we craft exceptional living and commercial spaces,
                blending modern design with lasting quality. Your vision, our expertise.
              </p>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-white text-lg mb-3 font-semibold">
                  Find us on:
                </p>
                <div className="flex space-x-4">
                  {[ 
                    { icon: <Youtube />, color: "hover:bg-red-600", url: "https://www.youtube.com/@SigmaBuilders51" },
                    { icon: <Instagram />, color: "hover:bg-pink-600", url: "https://www.instagram.com/sigma_buildersofficial/" },
                    { icon: <Twitter />, color: "hover:bg-blue-400", url: "#" },
                    { icon: <Facebook />, color: "hover:bg-blue-600", url: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      aria-label="Social link"
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${s.color} hover:scale-110 hover:shadow-lg`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">
              QUICK LINKS
            </h3>
            
            {/* Desktop Layout - 2 columns */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Layout - Single column */}
            <div className="block sm:hidden space-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Copyright © 2025 Sigma Builder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
