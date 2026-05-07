"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [sscOpen, setSscOpen] = useState(false); // Desktop dropdown
  const [mobileSscOpen, setMobileSscOpen] = useState(false); // Mobile dropdown

  const sscRef = useRef(null);
  const mobileSscRef = useRef(null);
  const router = useRouter();

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sscRef.current && !sscRef.current.contains(event.target)) setSscOpen(false);
      if (mobileSscRef.current && !mobileSscRef.current.contains(event.target)) setMobileSscOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigate and close mobile menu
  const handleMobileNavigate = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="h-20 bg-black/10 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/LOGO.png"
              alt="CodeMonarch Academy Logo"
              width={240}
              height={160}
              className="object-contain shadow-md transition-all duration-300 hover:opacity-90"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center relative">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

           

            <NavLink to="/support">Support</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-black/90 rounded-2xl border border-white/20 shadow-xl transition-all overflow-hidden">
            <button
              onClick={() => handleMobileNavigate("/")}
              className="block w-full text-left px-4 py-3 text-white text-base font-medium hover:bg-white/10 transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleMobileNavigate("/about")}
              className="block w-full text-left px-4 py-3 text-white text-base font-medium hover:bg-white/10 transition-all duration-300"
            >
              About
            </button>

            

            <button
              onClick={() => handleMobileNavigate("/support")}
              className="block w-full text-left px-4 py-3 text-white text-base font-medium hover:bg-white/10 transition-all duration-300"
            >
              Support
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------- Subcomponents -------------------- */

const NavLink = ({ to, children }) => (
  <Link
    href={to}
    className="text-white hover:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
  >
    {children}
  </Link>
);

const DropdownLink = ({ to, children }) => (
  <Link
    href={to}
    className="block px-4 py-2 text-white text-sm hover:bg-white/10 transition-all duration-200"
  >
    {children}
  </Link>
);
