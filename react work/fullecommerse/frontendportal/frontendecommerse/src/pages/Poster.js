import React, { useEffect, useState } from "react";
import { Sparkles, Star } from "lucide-react";
import axios from "axios";

export default function GoldBanner() {
  const [banner, setBanner] = useState(null);
  const [categories, setCategories] = useState([]);
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const res = await axios.get(`${apiurl}/poster`);
        const posters = res.data;

        // Extract banner + category images
        const bannerPoster = posters.find(
          (p) => p.poster_category === "Poster_banner"
        );
        const categoryPosters = posters.filter(
          (p) => p.poster_category === "small_pic"
        );

        setBanner(bannerPoster?.image || null);
        setCategories(categoryPosters);
      } catch (error) {
        console.error("Error fetching posters:", error);
      }
    };

    fetchPosters();
  }, [apiurl]);

  return (
    <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {banner ? (
          <img
            src={banner}
            alt="Elegant fashion background"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
            Loading banner...
          </div>
        )}

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
        <div className="flex-1 flex items-center justify-center p-3 sm:p-4 lg:p-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 max-w-sm sm:max-w-md lg:max-w-lg w-full">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div
                  key={category._id}
                  className="group relative bg-black/40 backdrop-blur-md rounded-lg p-2 sm:p-3 lg:p-4 border border-amber-400/30 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Category Image */}
                  <div className="w-full aspect-square mb-2 sm:mb-3 overflow-hidden rounded-md group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={category.image}
                      alt={category.poster_name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white text-center group-hover:text-amber-300 transition-colors duration-300 drop-shadow-md leading-tight">
                    {category.poster_name}
                  </h3>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

                  {/* Inner Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-lg shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      boxShadow:
                        "inset 0 0 20px rgba(251, 191, 36, 0.3)",
                    }}
                  ></div>
                </div>
              ))
            ) : (
              <p className="text-white col-span-4 text-center">Loading categories...</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  );
}
