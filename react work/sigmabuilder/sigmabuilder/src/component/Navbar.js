import React, { useState, useEffect, useRef } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navRef = useRef(null);
  const burgerRef = useRef(null);


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const sections = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const location = useLocation();

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
    <div className="bg-black text-white overflow-x-hidden">
      <nav
        ref={navRef}
        className="fixed top-0 w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 opacity-80 text-white backdrop-blur-md z-50 border-b border-white-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <div className="w-24 h-10 flex items-center justify-center">
                <img className="h-full w-auto" src="logo1.png" alt="Sigma Builder"/>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  SIGMA BUILDER
                </span>
                {/* <span className="text-blue-200 text-lg font-semibold leading-none mt-1">
                  Making a house a home
                </span> */}
              </div>
            </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <Link
                  key={section.name}
                  to={section.path}
                  className={`text-white hover:text-indigo-500 transition-colors duration-300 font-medium relative group ${
                    activeSection === section.path ? "text-black" : ""
                  }`}
                >
                  {section.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
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
          <div className="md:hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 opacity-80 backdrop-blur-md border-t border-white-800">
            <div className="px-6 py-4 space-y-4">
              {sections.map((section) => (
                <Link
                  key={section.name}
                  to={section.path}
                  className="block text-black-300 hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
