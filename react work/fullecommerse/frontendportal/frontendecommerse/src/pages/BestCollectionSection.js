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

function BestCollectionSection() {

    const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

    // Best Sellers Data
      const bestSellers = [
        {
          id: 1,
          name: "Premium Cotton Shirt",
          price: 2499,
          originalPrice: 3999,
          image:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
          rating: 4.8,
          reviews: 124,
          badge: "Best Seller",
        },
        {
          id: 2,
          name: "Designer Denim Jacket",
          price: 4999,
          originalPrice: 7999,
          image:
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
          rating: 4.9,
          reviews: 89,
          badge: "Trending",
        },
        {
          id: 3,
          name: "Casual Summer Dress",
          price: 1999,
          originalPrice: 2999,
          image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
          rating: 4.7,
          reviews: 156,
          badge: "New",
        },
        {
          id: 4,
          name: "Classic Chinos",
          price: 1799,
          originalPrice: 2499,
          image:
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
          rating: 4.6,
          reviews: 203,
          badge: "Popular",
        },
      ];


  return (
    <div>
      {/* Best Sellers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved pieces that customers can't get enough of
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        product.badge === "Best Seller"
                          ? "bg-red-500 text-white"
                          : product.badge === "Trending"
                          ? "bg-purple-500 text-white"
                          : product.badge === "New"
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}

                  
                  <button
                    className={`absolute top-5 right-4 z-20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                      isFavorited
                        ? "bg-red-500 text-white scale-110 animate-bounce"
                        : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500"
                    }`}
                  >
                    <Heart
                      onClick={handleFavorite}
                      className={`w-5 h-5 transition-all duration-300 ${
                        isFavorited ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BestCollectionSection;
