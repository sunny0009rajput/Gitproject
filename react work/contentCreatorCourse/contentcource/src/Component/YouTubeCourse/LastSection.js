import React from 'react';
import { Play, BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';

const LastSection = () => {
  const handleRegisterClick = () => {
    // Handle registration logic here
    alert("Registration started! Redirecting to enrollment page...");
  };

  return (
    <div className="relative min-h-screen bg-black/90 overflow-hidden">
      {/* Background Red Lighting Effects */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/30 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl transform translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-red-400/10 rounded-full blur-2xl"></div>
      </div> */}

      {/* Red Vertical Lines */}
      {/* <div className="absolute inset-0 opacity-40">
        <div className="absolute right-1/3 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-transparent"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-red-500 to-red-400"></div>
        <div className="absolute right-1/5 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-600 via-red-500 to-transparent"></div>
        <div className="absolute right-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-red-600 to-transparent"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-red-500">The YouTube Blueprint</span>
              </h1>
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight block mt-2">
                Make Content Creation Your Career
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Have you ever dreamt of becoming a Youtuber? This is your 
                blueprint to getting there. Whether you want to take up content 
                creation as a full time career or a part-time job, this all-in-one 
                course is your perfect plan of action. Learn to ideate, script, 
                film, and edit amazing videos. Then understand the secret to 
                getting lakhs of followers and making money as a content 
                creator. It's time to live your dream life!
              </p>
            </div>

            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 py-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center border border-red-500/30">
                  <Play className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">7.5 hours of video content</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center border border-red-500/30">
                  <BookOpen className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">7 Chapters</div>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Students Enrolled</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">4.9</div>
                <div className="text-gray-400 text-sm flex items-center justify-center sm:justify-start gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  Rating
                </div>
              </div>
              <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">Lifetime</div>
                <div className="text-gray-400 text-sm">Access</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleRegisterClick}
                className="group bg-red-600 hover:bg-red-500 text-white font-bold text-lg sm:text-xl py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25 flex items-center gap-3"
              >
                Register today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[35rem] overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42846f_1690182028155%201%20(1).png"
                  alt="Content Creator"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:from-black/40"></div>
                
                {/* Red Lighting Effect on Image */}
                <div className="absolute inset-0 bg-gradient-to-l from-red-600/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Join 10K+ Creators</div>
                    <div className="text-gray-400 text-xs">Building Their Dream Career</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -inset-8 bg-gradient-to-r from-red-600/5 to-red-900/5 rounded-3xl -z-10 blur-xl"></div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-red-500/50 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 -left-8 w-4 h-4 bg-red-500/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 -right-6 w-6 h-6 border border-red-400/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default LastSection;