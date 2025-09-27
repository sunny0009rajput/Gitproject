import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      {/* Top bar is always h-20 */}
      <div className="h-20 bg-black/10 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex justify-between items-center">
          {/* Brand */}
          <h1 className="text-white text-2xl font-bold tracking-wide">
            BrandName
          </h1>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/youtube">YouTube Course</NavLink>
            <NavLink to="/chatgptcourse">ChatGPT Course</NavLink>
            <NavLink to="/timemanagementcourse">Time Management Course</NavLink>
            <NavLink to="/EBook">E-Book</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>

          {/* Mobile Login button (always visible) */}
          <div className="md:hidden flex items-center space-x-2">
            <NavLink to="/login">Login</NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown lives OUTSIDE the h-20 bar */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-black/90 rounded-2xl border border-white/20 shadow-xl transition-all">
          <MobileLink to="/home" close={() => setIsOpen(false)}>
            Home
          </MobileLink>
          <MobileLink to="/youtube">YouTube Course</MobileLink>
          <MobileLink to="/chatgptcourse">ChatGPT Course</MobileLink>
          <MobileLink to="/timemanagementcourse">Time Management Course</MobileLink>
          <MobileLink to="/EBook" close={() => setIsOpen(false)}>
            E-Book
          </MobileLink>
          <MobileLink to="/login" close={() => setIsOpen(false)}>
            Login
          </MobileLink>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium
               transition-all duration-300 hover:bg-white/10 hover:scale-105"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, close }) => (
  <Link
    to={to}
    onClick={close}
    className="block px-4 py-3 text-white text-base font-medium hover:bg-white/10
               transition-all duration-300 transform hover:translate-x-2"
  >
    {children}
  </Link>
);

export default Navbar;
