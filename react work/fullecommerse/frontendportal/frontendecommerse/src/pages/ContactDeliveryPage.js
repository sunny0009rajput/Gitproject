import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Home, 
  MapPin, 
  Phone, 
  CreditCard,
  Truck,
  Package,
  Clock,
  ChevronRight,
  Star,
  Info
} from 'lucide-react';

export default function DeliveryAddressPage() {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showAddAddress, setShowAddAddress] = useState(false);

  const addresses = [
    {
      id: 1,
      name: "Sunny Kumar",
      type: "HOME",
      address: "Sv grand mens pg, Gowlidoddy",
      city: "Hyderabad, TELANGANA - 500032",
      mobile: "9478583103",
      cashOnDelivery: true,
      isDefault: true
    }
  ];

  const orderItems = [
    {
      id: 1,
      name: "Black Hoodie",
      image: "/api/placeholder/60/80",
      estimatedDelivery: "25 Sep 2025",
      color: "black"
    },
    {
      id: 2,
      name: "Maroon Sweater", 
      image: "/api/placeholder/60/80",
      estimatedDelivery: "4 Sep 2025",
      color: "maroon"
    },
    {
      id: 3,
      name: "Blue Jeans",
      image: "/api/placeholder/60/80", 
      estimatedDelivery: "1 Sep - 3 Sep",
      color: "blue"
    },
    {
      id: 4,
      name: "Black T-Shirt",
      image: "/api/placeholder/60/80",
      estimatedDelivery: "31 Aug - 2 Sep", 
      color: "black"
    }
  ];

  const priceDetails = {
    totalMRP: 17796,
    discount: 10644,
    platformFee: 0,
    totalAmount: 7152,
    itemCount: 4
  };

  const AddressForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border animate-fadeIn">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Address</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Full Name"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
          />
          <input 
            type="text" 
            placeholder="Mobile Number"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
          />
        </div>
        <textarea 
          placeholder="Address"
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all resize-none"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input 
            type="text" 
            placeholder="City"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
          />
          <input 
            type="text" 
            placeholder="State"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
          />
          <input 
            type="text" 
            placeholder="Pincode"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
            <span className="text-sm text-gray-700">Make this my default address</span>
          </label>
        </div>
        <div className="flex space-x-4 pt-4">
          <button 
            onClick={() => setShowAddAddress(false)}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button className="flex-1 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium">
            Save Address
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Address Selection Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Select Delivery Address</h1>
              <button 
                onClick={() => setShowAddAddress(true)}
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-pink-500 hover:text-pink-500 transition-all duration-200 font-medium group"
              >
                <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                ADD NEW ADDRESS
              </button>
            </div>

            {/* Default Address Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-wide">Default Address</h2>
              
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div 
                    key={address.id}
                    className={`relative bg-white rounded-xl p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer hover:shadow-lg group ${
                      selectedAddress === address.id 
                        ? 'border-pink-500 ring-4 ring-pink-100 scale-[1.02]' 
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                    onClick={() => setSelectedAddress(address.id)}
                  >
                    {/* Selection Radio */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        selectedAddress === address.id 
                          ? 'border-pink-500 bg-pink-500' 
                          : 'border-gray-300 group-hover:border-pink-400'
                      }`}>
                        {selectedAddress === address.id && (
                          <div className="w-full h-full rounded-full bg-white scale-50 transition-all duration-200" />
                        )}
                      </div>
                    </div>

                    <div className="ml-12">
                      {/* Address Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl font-bold text-gray-900">{address.name}</h3>
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            <Home className="w-3 h-3 mr-1" />
                            {address.type}
                          </span>
                        </div>
                      </div>

                      {/* Address Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3 text-gray-700">
                          <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{address.address}</p>
                            <p>{address.city}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span>Mobile: <span className="font-medium">{address.mobile}</span></span>
                        </div>

                        {address.cashOnDelivery && (
                          <div className="flex items-center space-x-3 text-green-700">
                            <CreditCard className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="font-medium">• Cash on Delivery available</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-pink-500 hover:text-pink-500 transition-all duration-200 font-medium group">
                          <Trash2 className="w-4 h-4 inline mr-2 group-hover:text-red-500" />
                          REMOVE
                        </button>
                        <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-pink-500 hover:text-pink-500 transition-all duration-200 font-medium group">
                          <Edit3 className="w-4 h-4 inline mr-2" />
                          EDIT
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Address Form */}
            {showAddAddress && <AddressForm />}

            {/* Add New Address Button */}
            {!showAddAddress && (
              <button 
                onClick={() => setShowAddAddress(true)}
                className="w-full p-6 border-2 border-dashed border-gray-300 rounded-xl text-pink-500 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
                  <span className="text-lg font-semibold">Add New Address</span>
                </div>
              </button>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              {/* Delivery Estimates */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Truck className="w-6 h-6 mr-3 text-green-600" />
                  DELIVERY ESTIMATES
                </h3>
                
                <div className="space-y-4">
                  {orderItems.map((item, index) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="relative w-14 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 mb-1">{item.name}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1 text-green-600" />
                          <span>Estimated delivery by <span className="font-medium text-gray-900">{item.estimatedDelivery}</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Package className="w-6 h-6 mr-3 text-blue-600" />
                  PRICE DETAILS ({priceDetails.itemCount} Items)
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Total MRP</span>
                    <span className="font-medium">₹{priceDetails.totalMRP.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-green-600">
                    <span>Discount on MRP</span>
                    <span className="font-medium">-₹{priceDetails.discount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center">
                      <span>Platform Fee</span>
                      <button className="ml-2 text-gray-400 hover:text-pink-500 transition-colors">
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  
                  <hr className="border-gray-200" />
                  
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total Amount</span>
                    <span>₹{priceDetails.totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>CONTINUE</span>
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Delivery Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-green-800">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium">FREE delivery on all orders</span>
                  </div>
                  <div className="flex items-center space-x-3 text-green-800">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium">Cash on delivery available</span>
                  </div>
                  <div className="flex items-center space-x-3 text-green-800">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium">Easy returns & exchange</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}