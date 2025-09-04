import React from 'react';
import {
  Dumbbell,
  
} from "lucide-react";

function Footer() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
        <footer className="py-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                PowerFit Gym
              </span>
            </div>
            <p className="text-gray-400">© 2025 PowerFit Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer