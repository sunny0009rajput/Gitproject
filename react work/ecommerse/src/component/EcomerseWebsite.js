import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Star, Heart, Menu, X, Filter, ArrowLeft } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const EcommerceWebsite = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Sample product data
  
  

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => toggleFavorite(product.id)}
            className={`p-2 rounded-full transition-colors ${
              favorites.includes(product.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart size={16} />
          </button>
        </div>
        {product.originalPrice > product.price && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            SALE
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-600">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedProduct(product)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium"
          >
            View Details
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-gray-100 text-purple-600 p-2 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  const ProductDetail = ({ product }) => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setSelectedProduct(null)}
          className="flex items-center text-purple-600 mb-6 hover:text-purple-800 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Products
        </button>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
              />
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-purple-600">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-purple-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-bold text-lg"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-4 rounded-xl transition-colors ${
                    favorites.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-100'
                  }`}
                >
                  <Heart size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <Navbar/>
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Illuminate Your Space
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium LED lights, poster cards, and innovative lighting solutions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-200 mx-1 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
};

export default EcommerceWebsite;