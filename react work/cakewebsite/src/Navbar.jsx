import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "New", path: "/tryNew" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f9c8d2] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        
        {/* Main Navbar */}
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[#c94b6e] text-2xl">🎂</span>

              <span
                className="text-[#2d1a1a] text-2xl font-bold tracking-wide"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Delizia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-[#c94b6e]"
                    : "text-[#2d1a1a] hover:text-[#c94b6e]"
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.name}

                {/* Underline effect */}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#c94b6e] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2d1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#f9c8d2] rounded-lg shadow-lg p-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#c94b6e]"
                    : "text-[#2d1a1a] hover:text-[#c94b6e]"
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;