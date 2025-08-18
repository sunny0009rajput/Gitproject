import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  Home,
  Users,
  FolderOpen,
  Calendar,
  Waves
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Dashboard');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Dashboard', icon: Home },
    { name: 'Team', icon: Users },
    { name: 'Projects', icon: FolderOpen },
    { name: 'Calendar', icon: Calendar }
  ];

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-slate-700 px-4 lg:px-6 h-16 flex items-center justify-between relative shadow-lg">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
            <Waves className="w-5 h-5 text-white transform -rotate-12" />
          </div>
          <span className="text-white font-semibold text-lg hidden sm:block">Brand</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.name)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeLink === link.name
                    ? 'text-white bg-slate-600'
                    : 'text-slate-300 hover:text-white hover:bg-slate-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{link.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right side elements */}
        <div className="flex items-center space-x-4">
          {/* Desktop Search */}
          <div className="hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-80 pl-10 pr-3 py-2 border-0 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-500 transition-all duration-200"
              placeholder="Search..."
            />
          </div>

          {/* Notification Button */}
          <button className="hidden md:block relative p-2 text-slate-300 hover:text-white hover:bg-slate-600 rounded-lg transition-colors duration-200">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-700"></span>
          </button>

          {/* Profile Avatar */}
          <div className="w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200 shadow-md">
            <User className="w-5 h-5 text-gray-600" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-slate-600 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-slate-700 border-t border-slate-600 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2'
        }`}>
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-0 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Search..."
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.name)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeLink === link.name
                        ? 'text-white bg-slate-600'
                        : 'text-slate-300 hover:text-white hover:bg-slate-600'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Notification */}
            <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-600 transition-all duration-200">
              <div className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-slate-700"></span>
              </div>
              <span>Notifications</span>
            </button>
          </div>
        </div>
      </nav>

      
      
    </div>
  );
};

export default Navbar;