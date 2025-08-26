import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Minus, Plus, Truck, RotateCcw, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FashionProductPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  const images = [
    '/api/placeholder/600/700',
    '/api/placeholder/600/700',
    '/api/placeholder/600/700',
    '/api/placeholder/600/700'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  
  const reviews = [
    { name: "Sarah M.", rating: 5, comment: "Perfect fit and amazing quality! Love the design." },
    { name: "Jessica L.", rating: 5, comment: "Comfortable and stylish. Exactly as pictured." },
    { name: "Emma K.", rating: 4, comment: "Great shirt, runs a bit large but overall happy with purchase." }
  ];

  const handleMouseMove = (e) => {
    if (!isZooming) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div 
                className="relative aspect-[4/5] overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onMouseMove={handleMouseMove}
              >
                <img 
                  src={images[selectedImage]} 
                  alt="Black Embellished T-Shirt"
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZooming ? 'scale-150' : 'scale-100'
                  }`}
                  style={isZooming ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                  } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Navigation */}
                <button 
                  onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 hover:opacity-100 transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setSelectedImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 hover:opacity-100 transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === idx 
                      ? 'ring-3 ring-pink-500 shadow-lg scale-105' 
                      : 'hover:scale-105 hover:shadow-md'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Product view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-pink-600 font-medium">TRENDY COLLECTION</span>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Heart className={`w-6 h-6 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Golden Butterfly Embellished Oversized T-Shirt
              </h1>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.8) 124 reviews</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">$29</span>
              <span className="text-xl text-gray-500 line-through">$45</span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                35% OFF
              </span>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <Truck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <span className="text-xs text-gray-600">Free Shipping</span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <RotateCcw className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-xs text-gray-600">Easy Returns</span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <span className="text-xs text-gray-600">Quality Assured</span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex space-x-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl border-2 font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-pink-500 bg-pink-500 text-white shadow-lg scale-105'
                        : 'border-gray-300 hover:border-pink-300 hover:bg-pink-50 hover:scale-105'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-white border-2 border-gray-300 rounded-xl">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 rounded-l-xl transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-100 rounded-r-xl transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-2">
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Product Description */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium cotton blend fabric</li>
                <li>• Golden butterfly embellishment design</li>
                <li>• Oversized comfortable fit</li>
                <li>• Machine washable</li>
                <li>• Perfect for casual and semi-formal occasions</li>
              </ul>
            </div>

            {/* Reviews Section */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review, idx) => (
                  <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{review.name}</span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}