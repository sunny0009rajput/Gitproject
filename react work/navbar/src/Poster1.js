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
    <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 overflow-hidden">
      {/* Bokeh Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-8 sm:left-16 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-300 rounded-full opacity-30 blur-xl animate-pulse"></div>
        <div className="absolute top-12 sm:top-16 right-12 sm:right-24 w-8 sm:w-12 h-8 sm:h-12 bg-orange-200 rounded-full opacity-40 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-6 sm:bottom-8 right-8 sm:right-16 w-6 sm:w-10 h-6 sm:h-10 bg-amber-200 rounded-full opacity-50 blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-4 sm:w-6 h-4 sm:h-6 bg-yellow-100 rounded-full opacity-60 blur-md animate-pulse delay-1500"></div>
        <div className="absolute top-1/4 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-orange-100 rounded-full opacity-30 blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            {/* Sparkle Icon */}
            <div className="flex items-center mb-6">
              <Star className="w-12 h-12 text-yellow-300 fill-current mr-4 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold text-yellow-200 tracking-wide drop-shadow-lg">
                Gold
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 font-light tracking-wide">
              Products you Love. Quality we Trust.
            </p>
            
            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-transparent border-2 border-yellow-300 text-yellow-300 text-lg font-semibold rounded-lg hover:bg-yellow-300 hover:text-amber-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:animate-spin" />
            </button>
          </div>
        </div>

        {/* Right Side - Category Grid */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-8 max-w-md">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Category Icon/Image Placeholder */}
                <div className="text-4xl mb-4 text-center group-hover:animate-bounce">
                  {category.image}
                </div>
                
                {/* Category Name */}
                <h3 className="text-xl font-semibold text-yellow-100 text-center group-hover:text-yellow-300 transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-30"></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <Sparkles className="w-6 h-6 text-yellow-200 opacity-60 animate-ping" />
      </div>
      <div className="absolute top-3/4 left-1/4">
        <Sparkles className="w-4 h-4 text-yellow-300 opacity-40 animate-ping delay-1000" />
      </div>
      <div className="absolute top-1/3 right-1/3">
        <Sparkles className="w-5 h-5 text-orange-200 opacity-50 animate-ping delay-500" />
      </div>
    </div>
  );
}