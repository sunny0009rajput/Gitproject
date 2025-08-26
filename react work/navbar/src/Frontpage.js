import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ShoppingBag, Star, Heart, ArrowRight, Menu, Search, User } from 'lucide-react';

const ClothingBrandHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hero Collections Data
  const collections = [
    {
      id: 1,
      title: "Summer Essentials",
      subtitle: "Discover the perfect summer wardrobe",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
      cta: "Shop Summer Collection",
      color: "from-orange-400 to-pink-500"
    },
    {
      id: 2,
      title: "Urban Street Style",
      subtitle: "Bold designs for the modern trendsetter",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=800&fit=crop",
      cta: "Explore Street Wear",
      color: "from-purple-500 to-blue-600"
    },
    {
      id: 3,
      title: "Elegant Formals",
      subtitle: "Sophistication meets comfort",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1200&h=800&fit=crop",
      cta: "Shop Formal Wear",
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 4,
      title: "Casual Comfort",
      subtitle: "Everyday style that feels like home",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1200&h=800&fit=crop",
      cta: "Browse Casuals",
      color: "from-green-400 to-teal-500"
    }
  ];

  // Best Sellers Data
  const bestSellers = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Designer Denim Jacket",
      price: 4999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      badge: "Trending"
    },
    {
      id: 3,
      name: "Casual Summer Dress",
      price: 1999,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "New"
    },
    {
      id: 4,
      name: "Classic Chinos",
      price: 1799,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 203,
      badge: "Popular"
    }
  ];

  // Video Content Data
  const videoContent = [
    {
      id: 1,
      title: "Summer Collection 2024",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=533&fit=crop",
      duration: "2:34"
    },
    {
      id: 2,
      title: "Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=533&fit=crop",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Style Guide",
      thumbnail: "https://images.unsplash.com/photo-1542295669297-4d352b042bcd?w=300&h=533&fit=crop",
      duration: "3:12"
    }
  ];

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
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                LUXE
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors font-medium">New Arrivals</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Men</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Women</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Collections</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Sale</a>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
              <User className="w-5 h-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Auto-changing Collections */}
      <section className="relative h-screen overflow-hidden">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                  <button className={`bg-gradient-to-r ${collection.color} hover:scale-105 transform transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-3xl animate-fadeInUp animation-delay-600`}>
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
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
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
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-red-500 text-white' :
                      product.badge === 'Trending' ? 'bg-purple-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Quick Shop Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick Shop
                    </button>
                  </div>
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
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
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

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Style Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get inspired by our latest fashion content and styling tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoContent.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[9/16] bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group-hover:scale-125">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay In Style</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClothingBrandHomepage;