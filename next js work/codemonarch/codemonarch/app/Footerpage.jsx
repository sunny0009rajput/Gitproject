

import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo2.png"
                  alt="CodeMonarch"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                CodeMonarch
              </span>
            </div>

            {/* Copyright */}
            <p className="text-gray-700 text-sm text-center md:text-right">
              © 2025 CodeMonarch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;