import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  X, 
  Heart, 
  ShoppingBag, 
  Tag, 
  Truck, 
  Shield,
  Clock,
  MapPin,
  ChevronDown,
  Star,
  Gift
} from 'lucide-react';

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "StyleCraft Sweater",
      description: "Half Sleeves Cotton Sweatshirt",
      price: 118,
      originalPrice: 158,
      discount: 25,
      size: "S",
      color: "Black",
      quantity: 1,
      image: "/api/placeholder/120/150",
      rating: 4.5,
      reviews: 234,
      inStock: true,
      deliveryDate: "25 Aug 2025"
    },
    {
      id: 2,
      name: "StyleCraft Sweater", 
      description: "Half Sleeves Cotton Sweatshirt",
      price: 118,
      originalPrice: 158,
      discount: 25,
      size: "L",
      color: "Maroon",
      quantity: 1,
      image: "/api/placeholder/120/150",
      rating: 4.3,
      reviews: 189,
      inStock: true,
      deliveryDate: "26 Aug 2025"
    },
    {
      id: 3,
      name: "SLIM LIMITS",
      description: "Men Baggy/Low-rise Loose Jeans",
      price: 1041,
      originalPrice: 1299,
      discount: 20,
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "/api/placeholder/120/150",
      rating: 4.7,
      reviews: 445,
      inStock: true,
      deliveryDate: "1 Sep - 3 Sep"
    },
    {
      id: 4,
      name: "T-Shirt",
      description: "Women Black Shirts",
      price: 220,
      originalPrice: 299,
      discount: 26,
      size: "M",
      color: "Black",
      quantity: 1,
      image: "/api/placeholder/120/150",
      rating: 4.2,
      reviews: 167,
      inStock: false,
      deliveryDate: "25 Aug - 3 Sep"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Quality Partner, 208023');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const deliveryFee = 0; // Free delivery
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and checkout when ready</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Delivery Location */}
            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Deliver to
                </h3>
                <button 
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                >
                  Change
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <p className="text-gray-700 font-medium">{deliveryLocation}</p>
              <p className="text-sm text-gray-500">We will deliver to your doorstep with care</p>
            </div>

            {/* Available Offers */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 lg:p-6 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                <Gift className="w-5 h-5 mr-2" />
                Available Offers
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-green-700">• Get 10% instant discount on Credit Card payment</p>
                <p className="text-green-700">• Free delivery on orders above ₹499</p>
                <p className="text-green-700">• Buy 2 get 1 free on selected items</p>
              </div>
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 lg:p-6 border-b bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">
                  {cartItems.length} Items Selected
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors group">
                    <div className="flex flex-col sm:flex-row gap-4">
                      
                      {/* Product Image */}
                      <div className="relative flex-shrink-0 w-full sm:w-32 h-40 sm:h-32">
                        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-300">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">Out of Stock</span>
                            </div>
                          )}
                          {item.discount > 0 && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                              {item.discount}% OFF
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            
                            {/* Rating */}
                            <div className="flex items-center mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">({item.reviews})</span>
                              </div>
                            </div>

                            {/* Size and Color */}
                            <div className="flex items-center space-x-4 mb-3">
                              <span className="text-sm text-gray-600">Size: <span className="font-medium">{item.size}</span></span>
                              <span className="text-sm text-gray-600">Color: <span className="font-medium">{item.color}</span></span>
                            </div>
                          </div>

                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
                            {item.originalPrice > item.price && (
                              <span className="text-gray-500 line-through">₹{item.originalPrice}</span>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                              <Heart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="mt-4 flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-green-600" />
                          {item.inStock ? 
                            `Delivery expected by ${item.deliveryDate}` : 
                            'Currently out of stock'
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add More from Wishlist */}
            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
              <button className="w-full text-left flex items-center justify-between hover:bg-gray-50 p-3 rounded-lg transition-colors">
                <span className="font-medium text-gray-900">Add More from Wishlist</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              {/* Promo Code */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-green-600" />
                  Apply Coupon
                </h3>
                <div className="flex space-x-2">
                  <input 
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Apply
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span>-₹{savings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total Amount</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 mb-4">
                  <ShoppingBag className="w-6 h-6" />
                  <span>Place Order</span>
                </button>

                {/* Security Features */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <Truck className="w-6 h-6 text-green-600 mb-2" />
                    <span className="text-xs text-gray-600">Free Delivery</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-xs text-gray-600">Secure Payment</span>
                  </div>
                </div>
              </div>

              {/* Recently Viewed */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">You might also like</h3>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={`/api/placeholder/48/48`} 
                          alt="Recommended item"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900">Stylish T-Shirt</p>
                        <p className="text-xs text-gray-500">₹299</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}