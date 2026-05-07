"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Static table of data (instead of backend)
  const collections = [
    {
      _id: "1",
    //   title: "Turn Land Into Your Landmark",
    //   subtitle:
    //     "Start your dream home with us today designed and built for your lifestyle.",
      image: "/r1_new.png",
    //   cta: "Start Building",
    //   color: "from-gray-700 to-black",
    },
    {
      _id: "2",
    //   title: "Build on Vision, Live the Dream",
    //   subtitle:
    //     "Let's create a strong, stylish home that lasts for generations",
      image: "/r2_new.png",
    //   cta: "Get a Free Quote",
    //   color: "from-gray-700 to-black",
    },
    {
      _id: "3",
    //   title: "Your Space, Your Home",
    //   subtitle:
    //     "Partner with us now to design and build the home you've always wanted.",
      image: "/r3_new.png",
    //   cta: "Schedule a Consultation",
    //   color: "from-gray-700 to-black",
    },
  ];

  // ✅ Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [collections.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + collections.length) % collections.length
    );

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {collections.map((collection, index) => (
        <div
          key={collection._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image using Next.js Image */}
          <div className="absolute inset-0">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${collection.color} opacity-60`}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {collection.title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
                {collection.subtitle}
              </p>
              {collection.cta && (
                <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in-delay-2">
                  {collection.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {collections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
