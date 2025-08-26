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
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Elegant fashion background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        {/* Additional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-amber-900/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 lg:py-0">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Sparkle Icon and Title */}
            <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
              <Star className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-amber-300 fill-current mr-2 sm:mr-3 animate-pulse drop-shadow-lg" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 tracking-wide drop-shadow-2xl">
                Gold
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-6 font-light tracking-wide drop-shadow-lg">
              Products you Love. Quality we Trust.
            </p>
            
            {/* CTA Button */}
            <button className="group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-black/30 backdrop-blur-sm border-2 border-amber-400 text-amber-400 text-sm sm:text-base font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl mx-auto lg:mx-0">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
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
                className="group relative bg-black/40 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-amber-400/30 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Category Icon/Image Placeholder */}
                <div className="text-lg sm:text-2xl lg:text-3xl mb-1 sm:mb-2 lg:mb-3 text-center group-hover:animate-bounce filter drop-shadow-sm">
                  {category.image}
                </div>
                
                {/* Category Name */}
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white text-center group-hover:text-amber-300 transition-colors duration-300 drop-shadow-md">
                  {category.name}
                </h3>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 rounded-lg sm:rounded-xl transition-opacity duration-300"></div>
                
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 20px rgba(251, 191, 36, 0.3)'}}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Floating Sparkles with Enhanced Visibility */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <Sparkles className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-amber-300 opacity-80 animate-ping drop-shadow-lg" />
      </div>
      <div className="absolute top-2/3 left-1/4">
        <Sparkles className="w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 text-yellow-300 opacity-60 animate-ping delay-1000 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-1/3">
        <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-orange-300 opacity-70 animate-ping delay-500 drop-shadow-lg" />
      </div>

      {/* Corner Accent Elements */}
      <div className="absolute top-4 right-4 w-12 h-12 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border border-yellow-300/40 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
}