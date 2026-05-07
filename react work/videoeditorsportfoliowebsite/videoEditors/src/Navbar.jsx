import React, { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const NAV_LINKS = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "portfolio" },
    { name: "Services", id: "services" },
    
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "backdrop-blur-md bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          onClick={() => scrollToSection("home")}
          className="text-green-400 text-xl font-bold tracking-wide cursor-pointer"
        >
          Video Editor
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div>
          <a
              href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Simga Builder, Need Consultation for construction project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Sigma Builder on WhatsApp"
              className="block w-full"
            >
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
        >
          Hire Me →
        </button>
        </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>

          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>

          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/70 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.id);
                setMenuOpen(false);
              }}
              className="block py-3 text-gray-300 hover:text-green-400 border-b border-white/10 w-full text-left"
            >
              {link.name}
            </button>
          ))}
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Simga Builder, Need Consultation for construction project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Sigma Builder on WhatsApp"
              className="block w-full"
            >
            <button className="block mt-4 bg-green-500 text-black font-semibold px-5 py-3 rounded-full text-center w-full">
              Hire Me →
            </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
