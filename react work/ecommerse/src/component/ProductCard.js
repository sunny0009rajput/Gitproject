import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

function ProductCard({ product, favorites, toggleFavorite, addToCart, setSelectedProduct }) {
  return (
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
};

export default ProductCard