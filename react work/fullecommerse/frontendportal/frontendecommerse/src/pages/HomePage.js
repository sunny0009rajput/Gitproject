import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ShoppingBag,
  Star,
  Heart,
  ArrowRight,
  Menu,
  Search,
  User,
} from "lucide-react";

const ClothingBrandHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  

  // Hero Collections Data
  const collections = [
    {
      id: 1,
      title: "Summer Essentials",
      subtitle: "Discover the perfect summer wardrobe",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
      cta: "Shop Summer Collection",
      color: "from-orange-400 to-pink-500",
    },
    {
      id: 2,
      title: "Urban Street Style",
      subtitle: "Bold designs for the modern trendsetter",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=800&fit=crop",
      cta: "Explore Street Wear",
      color: "from-purple-500 to-blue-600",
    },
    {
      id: 3,
      title: "Elegant Formals",
      subtitle: "Sophistication meets comfort",
      image:
        "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1200&h=800&fit=crop",
      cta: "Shop Formal Wear",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 4,
      title: "Casual Comfort",
      subtitle: "Everyday style that feels like home",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1200&h=800&fit=crop",
      cta: "Browse Casuals",
      color: "from-green-400 to-teal-500",
    },
  ];

  

  // Video Content Data
  

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + collections.length) % collections.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Auto-changing Collections */}
      <section className="relative h-screen overflow-hidden">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover"
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
                  <button
                    className={`bg-gradient-to-r ${collection.color} hover:scale-105 transform transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-3xl animate-fadeInUp animation-delay-600`}
                  >
                    {collection.cta}
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
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

        {/* Slide Indicators */}
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
      </section>

      {/* Best Sellers Section */}
      

      {/* Video Section */}
      
    </div>
  );
};

export default ClothingBrandHomepage;
