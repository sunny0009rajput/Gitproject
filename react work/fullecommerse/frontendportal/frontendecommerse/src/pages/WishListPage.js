import React, { useState } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=500&fit=crop",
      title: "RARE RABBIT Men Holland Regular Fit Shirt",
      currentPrice: 2165,
      originalPrice: 3799,
      discount: 43,
      inStock: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
      title: "RARE RABBIT Men Holland Slim Fit Shirt",
      currentPrice: 2165,
      originalPrice: 3799,
      discount: 43,
      inStock: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      title: "RARE RABBIT Men Luxem Slim Fit Shirt",
      currentPrice: 2069,
      originalPrice: 2999,
      discount: 31,
      inStock: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
      title: "StyleCast x Revolte Men Shacket",
      currentPrice: 2621,
      originalPrice: 5699,
      discount: 54,
      inStock: true
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const moveToCart = (id) => {
    // Simulate moving to cart
    console.log(`Moving item ${id} to cart`);
    // You can add actual cart logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-red-500 fill-current" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Wishlist</h1>
          </div>
          <p className="text-gray-600">{wishlistItems.length} items</p>
        </div>

        {/* Wishlist Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>

                  {/* Discount Badge */}
                  {item.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                      ({item.discount}% OFF)
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Price Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      Rs.{item.currentPrice.toLocaleString()}
                    </span>
                    {item.originalPrice > item.currentPrice && (
                      <>
                        <span className="text-sm text-gray-500 line-through">
                          Rs.{item.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-red-500 font-medium">
                          ({item.discount}% OFF)
                        </span>
                      </>
                    )}
                  </div>

                  {/* Move to Cart Button */}
                  <button
                    onClick={() => moveToCart(item.id)}
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    MOVE TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Save items you love to your wishlist</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Continue Shopping
            </button>
          </div>
        )}

        {/* Summary Section (when items exist) */}
        {wishlistItems.length > 0 && (
          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Wishlist Summary
                </h3>
                <p className="text-gray-600">
                  {wishlistItems.length} items • Total savings: Rs.{wishlistItems.reduce((acc, item) => acc + (item.originalPrice - item.currentPrice), 0).toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Share Wishlist
                </button>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                  Move All to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;