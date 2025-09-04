import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const ClothingBrandHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Dummy data instead of API
  const collections = [
    {
      _id: "1",
      image:
        "dmecommerse.png",
      title: "Summer Collection 2025",
      subtitle: "Fresh styles for your everyday look",
      cta: "Shop Now",
      color: "from-yellow-500 to-orange-600",
    },
    {
      _id: "2",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1920&q=80",
      title: "Winter Wear",
      subtitle: "Stay warm and stylish all season",
      cta: "Explore",
      color: "from-blue-600 to-indigo-700",
    },
    {
      _id: "3",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1920&q=80",
      title: "Street Fashion",
      subtitle: "Urban vibes and trendy fits",
      cta: "Discover",
      color: "from-pink-500 to-purple-600",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (collections.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [collections]);

  const nextSlide = () => {
    if (collections.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    if (collections.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Auto-changing Collections */}
      <section className="relative h-screen overflow-hidden">
        {collections.map((collection, index) => (
          <div
            key={collection._id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-[800px] h-[500px] object-cover mx-auto"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                    {collection.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeInUp animation-delay-300">
                    {collection.subtitle}
                  </p>
                  {collection.cta && (
                    <button
                      className={`bg-gradient-to-r ${
                        collection.color || "from-blue-500 to-indigo-600"
                      } hover:scale-105 transform transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-3xl animate-fadeInUp animation-delay-600`}
                    >
                      {collection.cta}
                      <ArrowRight className="inline ml-2 w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {collections.length > 0 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {collections.length > 0 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {collections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ClothingBrandHomepage;
