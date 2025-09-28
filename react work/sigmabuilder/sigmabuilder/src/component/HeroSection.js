import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Static table of data (instead of backend)
  const collections = [
    {
      _id: "1",
      title: "Turn Land Into Your Landmark",
      subtitle: "Start your dream home with us today—designed and built for your lifestyle.",
      image:
        "r1.png",
      cta: "Start Building",
      color: "from-gray-700 to-black",
    },
    {
      _id: "2",
      title: "Build on Vision, Live the Dream",
      subtitle: "Let’s create a strong, stylish home that lasts for generations",
      image:
        "r2.png",
      cta: "Get a Free Quote",
      color: "from-gray-700 to-black",
    },
    {
      _id: "3",
      title: "Your Space, Your Home",
      subtitle: "Partner with us now to design and build the home you’ve always wanted.",
      image:
        "r3.png",
      cta: "Schedule a Consultation",
      color: "from-gray-700 to-black",
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
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen overflow-hidden">
        {collections.map((collection, index) => (
          <div
            key={collection._id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

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
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
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
    </div>
  );
};

export default HeroSection;
