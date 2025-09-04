import React from 'react';
import {
  Dumbbell,
  
} from "lucide-react";

function Footer() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
        <footer className="py-8 bg-white border-t border-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <img className="w-10 h-10 text-black " src="logo2.png"/>
                {/* <Dumbbell className="w-5 h-5 text-black" /> */}
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                TechMonarch
              </span>
            </div>
            <p className="text-gray-700">© 2025 PowerFit Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer