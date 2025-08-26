import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, Star, Sparkles } from "lucide-react";

export default function RoundBoxCollection() {
  const [activeTab, setActiveTab] = useState("categories");
  const scrollRef = useRef(null);

  // Drag-to-scroll effect
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };
    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, [activeTab]);

  const categories = [
    {
      id: 1,
      name: "Jewelry",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80",
      count: 45,
      description: "Elegant jewelry boxes",
    },
    {
      id: 2,
      name: "Watches",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80",
      count: 32,
      description: "Premium watch collection",
    },
    {
      id: 3,
      name: "Cosmetics",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80",
      count: 28,
      description: "Beauty & cosmetics",
    },
    {
      id: 4,
      name: "Perfumes",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&q=80",
      count: 24,
      description: "Luxury fragrances",
    },
    {
      id: 5,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
      count: 38,
      description: "Fashion accessories",
    },
    {
      id: 6,
      name: "Gift Sets",
      image:
        "https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=300&q=80",
      count: 19,
      description: "Special gift collections",
    },
  ];

  const brands = [
    {
      id: 1,
      name: "Tiffany & Co",
      logo: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80",
      isPopular: true,
      productCount: 234,
    },
    {
      id: 2,
      name: "Cartier",
      logo: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80",
      isPopular: true,
      productCount: 189,
    },
    {
      id: 3,
      name: "Hermès",
      logo: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=300&q=80",
      isPopular: true,
      productCount: 156,
    },
    {
      id: 4,
      name: "Louis Vuitton",
      logo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
      isPopular: false,
      productCount: 98,
    },
    {
      id: 5,
      name: "Chanel",
      logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80",
      isPopular: true,
      productCount: 142,
    },
    {
      id: 6,
      name: "Rolex",
      logo: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80",
      isPopular: false,
      productCount: 67,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg border flex gap-2">
            <button
              onClick={() => setActiveTab("categories")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "categories"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "brands"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              Brands
            </button>
          </div>
        </div>

        {/* Categories Section */}
        {activeTab === "categories" && (
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Shop by Categories
            </h2>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-2 cursor-grab active:cursor-grabbing"
            >
              {categories.map((category) => (
                <div key={category.id} className="group cursor-pointer">
                  {/* Round Box Container */}
                  <div className="relative">
                    {/* Main Round Box */}
                    <div
                      className="relative w-40 h-40 rounded-full 
    bg-gradient-to-br from-white to-gray-50 shadow-lg 
    hover:shadow-2xl transition-all duration-500 
    transform group-hover:scale-110 border-4 border-white 
    overflow-hidden cursor-pointer mx-auto"
                    >
                      {/* Background Image */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover rounded-full 
    group-hover:scale-125 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
        rounded-full pointer-events-none"
                      ></div>{" "}
                      {/* stronger overlay */}
                      
                      {/* Hover Effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      ></div>
                      {/* Arrow Icon on Hover */}
                      
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="mt-4 text-center cursor-pointer">
                    <h3
                      className="font-bold text-lg text-gray-800 group-hover:text-purple-600 
      transition-colors duration-200"
                    >
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Brands Section */}
        {activeTab === "brands" && (
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Premium Brands
            </h2>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-2 cursor-grab active:cursor-grabbing"
            >
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 w-40 group cursor-pointer"
                >
                  <div
                    className="relative w-40 h-40 rounded-full 
    bg-gradient-to-br from-white to-gray-50 shadow-lg 
    hover:shadow-2xl transition-all duration-500 transform 
    group-hover:scale-110 border-4 border-white overflow-hidden mx-auto"
                  >
                    {/* Brand Image */}
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover rounded-full 
      group-hover:scale-125 transition-transform duration-700"
                    />

                    {/* Dark Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t 
      from-black/30 via-transparent to-transparent rounded-full"
                    ></div>

                    {/* Popular Badge */}
                    

                    {/* Product Count */}
                    

                    {/* Hover Glow Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br 
      from-amber-400/20 to-orange-500/20 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    ></div>

                    {/* Sparkle Animation */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 
      flex items-center justify-center transition"
                    >
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Brand Info */}
                  <div className="mt-3 text-center">
                    <h3 className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {brand.productCount} Products
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
