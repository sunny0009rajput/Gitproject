import React from 'react';
import { Star, Heart, ArrowLeft } from 'lucide-react';

function ProductDetail({ product, favorites, toggleFavorite, addToCart, setSelectedProduct }) {
  return (
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
};

export default ProductDetail