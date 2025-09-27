import React from 'react';

const FooterSection = () => {
  const quickLinks = [
    { name: "Login", url: "#" },
    { name: "Testimonials", url: "#" },
    { name: "Top", url: "#" },
    { name: "Tech Support", url: "#" },
    { name: "Courses", url: "#" },
    { name: "Contact Us", url: "#" }
  ];

  return (
    <footer className="w-full bg-black/90 border-t border-gray-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Section - Brand and Description */}
          <div className="space-y-6">
            
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-red-600 transform rotate-45 rounded-sm"></div>
                <div className="text-white">
                  <div className="text-lg font-bold leading-none">DHRUV RATHEE</div>
                  <div className="text-red-500 text-lg font-bold leading-none">ACADEMY</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-white/80 text-base leading-relaxed">
                At Dhruv Rathee Academy, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school and home.
              </p>
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
              Copyright © 2025 Dhruv Rathee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;