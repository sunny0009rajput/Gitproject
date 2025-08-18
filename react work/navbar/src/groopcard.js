import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with active noise cancellation and 30-hour battery life for all-day listening pleasure.",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop&auto=format&q=80",
    rating: 4.8,
    reviews: 342,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your health, monitor workouts, and stay connected with this advanced fitness companion featuring GPS and heart rate monitoring.",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviews: 189,
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Professional Camera",
    description: "Capture stunning photos and 4K videos with this professional-grade camera featuring advanced autofocus and image stabilization.",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=400&fit=crop&auto=format&q=80",
    rating: 4.9,
    reviews: 256,
    badge: "Premium"
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    description: "Track your health, monitor workouts, and stay connected with this advanced fitness companion featuring GPS and heart rate monitoring.",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviews: 189,
    badge: "New Arrival"
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    description: "Track your health, monitor workouts, and stay connected with this advanced fitness companion featuring GPS and heart rate monitoring.",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviews: 189,
    badge: "New Arrival"
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    description: "Track your health, monitor workouts, and stay connected with this advanced fitness companion featuring GPS and heart rate monitoring.",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviews: 189,
    badge: "New Arrival"
  },
];

function ProductCard({ product, index }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddToCart = () => {
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 2500);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden border border-gray-100"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      
      {/* Product Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
          {product.badge}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
            -{discount}% OFF
          </div>
        )}

        {/* Favorite Button */}
        {/* <button
          onClick={handleFavorite}
          className={`absolute top-16 right-4 z-20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
            isFavorited 
              ? 'bg-red-500 text-white scale-110 animate-bounce' 
              : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorited ? 'fill-current' : ''
            }`} 
          />
        </button> */}

        {/* Quick View Button - appears on hover */}
        {/* <button className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:bg-black">
          <Eye className="w-4 h-4" />
          <span className="text-sm font-medium">Quick View</span>
        </button> */}

        {/* Product Image */}
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
          )}
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700"></div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Rating */}
        {/* <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-4 h-4 transition-colors duration-300 ${
                    star <= Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500 font-medium">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div> */}

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-400 line-through ml-3">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <div className="text-right">
            <span className="text-sm text-green-600 font-semibold">
              Save ₹{product.originalPrice - product.price}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ${
              isInCart
                ? 'bg-green-500 text-white animate-pulse'
                : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-600'
            }`}
          >
            <ShoppingCart className={`w-5 h-5 transition-all duration-300 ${isInCart ? 'animate-bounce' : ''}`} />
            <span className="transition-all duration-300">
              {isInCart ? 'Added to Cart!' : 'Add to Cart'}
            </span>
          </button>

          {/* Buy Now Button */}
          <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn">
            <span className="relative z-10 flex items-center gap-3">
              Buy Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500"></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium products designed to enhance your lifestyle with cutting-edge technology and exceptional quality.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-1/4 left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 animate-pulse pointer-events-none blur-xl"></div>
      <div className="fixed bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 animate-pulse pointer-events-none blur-xl"></div>
      <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-15 animate-pulse pointer-events-none blur-lg"></div>
    </div>
  );
}