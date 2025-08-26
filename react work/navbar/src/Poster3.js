import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function GoldBanner() {
  const categories = [
    { name: 'Lehengas', image: '👗' },
    { name: 'Menwear', image: '👔' },
    { name: 'Sarees', image: '🥻' },
    { name: 'Jewellery', image: '💍' }
  ];

  return (
    <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
      {/* Bokeh Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-8 sm:left-16 w-12 sm:w-16 h-12 sm:h-16 bg-emerald-300 rounded-full opacity-25 blur-xl animate-pulse"></div>
        <div className="absolute top-12 sm:top-16 right-12 sm:right-24 w-8 sm:w-12 h-8 sm:h-12 bg-teal-200 rounded-full opacity-35 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 w-16 sm:w-20 h-16 sm:h-20 bg-cyan-200 rounded-full opacity-20 blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-6 sm:bottom-8 right-8 sm:right-16 w-6 sm:w-10 h-6 sm:h-10 bg-emerald-200 rounded-full opacity-40 blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-4 sm:w-6 h-4 sm:h-6 bg-teal-100 rounded-full opacity-50 blur-md animate-pulse delay-1500"></div>
        <div className="absolute top-1/4 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-cyan-100 rounded-full opacity-25 blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 lg:py-0">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Sparkle Icon and Title */}
            <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
              <Star className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-emerald-300 fill-current mr-2 sm:mr-3 animate-pulse" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 tracking-wide drop-shadow-lg">
                Gold
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 mb-4 sm:mb-6 font-light tracking-wide">
              Products you Love. Quality we Trust.
            </p>
            
            {/* CTA Button */}
            <button className="group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-transparent border-2 border-emerald-400 text-emerald-400 text-sm sm:text-base font-semibold rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl mx-auto lg:mx-0">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              <Sparkles className="inline-block ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:animate-spin" />
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="flex-1 flex items-center justify-center p-3 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-sm lg:max-w-md w-full">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group relative bg-teal-800 bg-opacity-50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-400 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Category Icon/Image Placeholder */}
                <div className="text-lg sm:text-2xl lg:text-3xl mb-1 sm:mb-2 lg:mb-3 text-center group-hover:animate-bounce">
                  {category.image}
                </div>
                
                {/* Category Name */}
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-emerald-100 text-center group-hover:text-emerald-300 transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-lg sm:rounded-xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-black to-transparent opacity-20"></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <Sparkles className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-emerald-200 opacity-60 animate-ping" />
      </div>
      <div className="absolute top-2/3 left-1/4">
        <Sparkles className="w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 text-teal-300 opacity-40 animate-ping delay-1000" />
      </div>
      <div className="absolute top-1/3 right-1/3">
        <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-200 opacity-50 animate-ping delay-500" />
      </div>
    </div>
  );
}