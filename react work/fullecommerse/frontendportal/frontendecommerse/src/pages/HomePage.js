import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const ClothingBrandHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [collections, setCollections] = useState([]); // ✅ data from API
  const apiurl = process.env.REACT_APP_BACKEND_URL; // ✅ your backend URL

  // ✅ Fetch slider data from backend
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await axios.get(`${apiurl}/slider`,);
        setCollections(res.data); // backend should return array of slides
      } catch (err) {
        console.error("Failed to fetch slider data", err);
      }
    };

    fetchCollections();
  }, [apiurl]);

  // Auto-slide functionality
  useEffect(() => {
    if (collections.length === 0) return; // ✅ avoid errors before data loads
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
            key={collection._id} // ✅ use DB id
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
                  {collection.cta && (
                    <button
                      className={`bg-gradient-to-r ${collection.color || "from-blue-500 to-indigo-600"} hover:scale-105 transform transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-3xl animate-fadeInUp animation-delay-600`}
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
