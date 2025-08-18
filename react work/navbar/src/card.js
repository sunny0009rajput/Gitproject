import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

export default function ProductCard() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddToCart = () => {
    setIsInCart(!isInCart);
    // Reset after animation
    setTimeout(() => setIsInCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex items-center justify-center">
      <div className="group relative w-80 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
        
        {/* Product Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
          {/* Favorite Button */}
          {/* <button
            onClick={handleFavorite}
            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isFavorited 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 ${
                isFavorited ? 'fill-current animate-pulse' : ''
              }`} 
            />
          </button> */}

          {/* Quick View Button - appears on hover */}
          <button className="absolute top-4 left-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 hover:bg-white hover:scale-110">
            <Eye className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-105 transition-transform duration-500 shadow-xl">
              {/* Premium
              <br />
              Product */}
              <img src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Product Image"/>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Rating */}
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className="w-4 h-4 text-yellow-400 fill-current" 
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">(128 reviews)</span>
          </div>

          {/* Product Name */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Premium Wireless Headphones
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Experience exceptional sound quality with our premium wireless headphones featuring noise cancellation and 30-hour battery life.
          </p>

          {/* Price */}
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-gray-800">$299</span>
            <span className="text-lg text-gray-400 line-through ml-2">$399</span>
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-semibold">
              25% OFF
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isInCart
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
              }`}
            >
              <ShoppingCart className={`w-5 h-5 transition-all duration-300 ${isInCart ? 'animate-bounce' : ''}`} />
              <span className="transition-all duration-300">
                {isInCart ? 'Added!' : 'Add to Cart'}
              </span>
            </button>

            {/* Buy Now Button */}
            <button className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg relative overflow-hidden group">
              <span className="relative z-10">Buy Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}