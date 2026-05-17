"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import useSmoothScroll from "./UseSmoothScroll";

function Navbar() {
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  // Activate smooth scrolling
  useSmoothScroll(navRef, burgerRef);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isVisible, setIsVisible] = useState({});

  const sections = [
    "Home",
    "Services",
    "Pricing_Plan",
    "Review",
    "Contact",
  ];

  // Track which sections are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));

            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <nav
        ref={navRef}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo2.png"
                  alt="CodeMonarch"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                CodeMonarch
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium relative group ${
                    activeSection === section ? "text-black" : ""
                  }`}
                >
                  {section.replace("_", " ")}

                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={burgerRef}
              className="md:hidden"
              aria-label="Open navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block text-gray-700 hover:text-red-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.replace("_", " ")}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;