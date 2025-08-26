import React, { useState } from 'react';
import { 
  Star, 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  Settings,
  Gift,
  Info,
  Check,
  Percent,
  Wallet,
  Shield,
  Zap
} from 'lucide-react';

export default function PaymentSelectionPage() {
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [showMoreOffers, setShowMoreOffers] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const paymentMethods = [
    {
      id: 'recommended',
      name: 'Recommended',
      icon: Star,
      type: 'section',
      description: 'Best options for you'
    },
    {
      id: 'cash',
      name: 'Cash On Delivery',
      icon: Banknote,
      type: 'payment',
      description: 'You can pay via Cash/UPI on delivery.',
      recommended: true,
      cashIcon: true
    },
    {
      id: 'upi',
      name: 'UPI (Pay via any App)',
      icon: Smartphone,
      type: 'payment',
      description: 'Pay using Google Pay, PhonePe, Paytm & more',
      popular: false
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      type: 'payment',
      description: '8 offers available',
      offers: 8,
      hasOffers: true
    },
    {
      id: 'payin3',
      name: 'Pay in 3',
      icon: Clock,
      type: 'payment',
      description: 'Split your payment into 3 easy installments',
      isNew: true,
      badge: 'NEW'
    },
    {
      id: 'paylater',
      name: 'Pay Later',
      icon: Wallet,
      type: 'payment',
      description: 'Buy now, pay after 15 days',
      popular: false
    }
  ];

  const bankOffers = [
    {
      id: 1,
      title: '10% Instant Discount on YES Bank Credit Card',
      description: 'on a min spend of ₹3,500. T&C Apply',
      icon: Percent,
      color: 'blue'
    },
    {
      id: 2,
      title: '5% Cashback on HDFC Debit Cards',
      description: 'Maximum cashback ₹500. Valid till 31st Dec',
      icon: Gift,
      color: 'green'
    },
    {
      id: 3,
      title: '₹100 off on SBI Credit Cards',
      description: 'on orders above ₹2,000. Use code SBI100',
      icon: Banknote,
      color: 'purple'
    }
  ];

  const priceDetails = {
    totalMRP: 17796,
    discount: 10644,
    platformFee: 0,
    totalAmount: 7152,
    itemCount: 4
  };

  const savedCards = [
    {
      id: 'card1',
      name: 'HDFC Bank',
      number: '**** **** **** 1234',
      type: 'Credit Card',
      color: 'blue'
    },
    {
      id: 'card2', 
      name: 'SBI Bank',
      number: '**** **** **** 5678',
      type: 'Debit Card',
      color: 'green'
    }
  ];

  const getPaymentIcon = (method) => {
    const Icon = method.icon;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Payment Methods Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Bank Offers */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Settings className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Bank Offer</h2>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-700 font-medium">
                    10% Instant Discount on YES Bank Credit Card on a min spend of ₹3,500. T&C Apply
                  </p>
                  <button 
                    onClick={() => setShowMoreOffers(!showMoreOffers)}
                    className="mt-3 flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors"
                  >
                    <span>Show More</span>
                    {showMoreOffers ? 
                      <ChevronUp className="w-4 h-4 ml-1 transition-transform" /> : 
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform" />
                    }
                  </button>
                </div>
              </div>

              {/* Additional Offers */}
              {showMoreOffers && (
                <div className="p-6 space-y-4 animate-slideDown">
                  {bankOffers.map((offer) => (
                    <div key={offer.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${
                          offer.color === 'blue' ? 'bg-blue-100' :
                          offer.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                        }`}>
                          <offer.icon className={`w-5 h-5 ${
                            offer.color === 'blue' ? 'text-blue-600' :
                            offer.color === 'green' ? 'text-green-600' : 'text-purple-600'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                            {offer.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-6 border-b bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">Choose Payment Mode</h2>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Payment Options Sidebar */}
                <div className="w-full lg:w-80 border-r border-gray-100">
                  {paymentMethods.map((method) => {
                    if (method.type === 'section') {
                      return (
                        <div key={method.id} className="p-4 bg-gray-50 border-b border-gray-100">
                          <div className="flex items-center space-x-3 text-gray-700">
                            {getPaymentIcon(method)}
                            <span className="font-medium">{method.name}</span>
                          </div>
                        </div>
                      );
                    }

                    const isSelected = selectedPayment === method.id;
                    
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full p-4 border-b border-gray-100 text-left transition-all duration-200 group hover:bg-blue-50 ${
                          isSelected ? 'bg-pink-50 border-r-4 border-r-pink-500' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg transition-all duration-200 ${
                            isSelected 
                              ? 'bg-pink-100 text-pink-600' 
                              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                          }`}>
                            {method.id === 'cash' && method.cashIcon ? (
                              <Banknote className="w-5 h-5" />
                            ) : (
                              getPaymentIcon(method)
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className={`font-medium transition-colors ${
                                isSelected ? 'text-pink-900' : 'text-gray-900'
                              }`}>
                                {method.name}
                              </span>
                              {method.badge && (
                                <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full font-medium">
                                  {method.badge}
                                </span>
                              )}
                              {method.hasOffers && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                  {method.offers} offers
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Payment Details */}
                <div className="flex-1 p-6">
                  {selectedPayment === 'cash' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-6 border-2 border-pink-200 bg-pink-50 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-6 h-6 rounded-full border-2 border-pink-500 bg-pink-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-pink-900">Cash on Delivery (Cash/UPI)</h3>
                            <p className="text-pink-700 text-sm mt-1">You can pay via Cash/UPI on delivery.</p>
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <Banknote className="w-8 h-8 text-green-600" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                          <div className="flex items-center space-x-3">
                            <Shield className="w-6 h-6 text-green-600" />
                            <div>
                              <h4 className="font-semibold text-green-900">Secure Payment</h4>
                              <p className="text-sm text-green-700">100% safe and secure</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                          <div className="flex items-center space-x-3">
                            <Zap className="w-6 h-6 text-blue-600" />
                            <div>
                              <h4 className="font-semibold text-blue-900">Instant Confirmation</h4>
                              <p className="text-sm text-blue-700">Order confirmed immediately</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPayment === 'card' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Card</h3>
                      
                      {/* Saved Cards */}
                      <div className="space-y-3">
                        {savedCards.map((card) => (
                          <div 
                            key={card.id}
                            onClick={() => setSelectedCard(card.id)}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                              selectedCard === card.id 
                                ? 'border-pink-500 bg-pink-50' 
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className={`w-12 h-8 rounded-lg flex items-center justify-center ${
                                  card.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                                }`}>
                                  <CreditCard className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900">{card.name}</h4>
                                  <p className="text-sm text-gray-600">{card.number}</p>
                                  <p className="text-xs text-gray-500">{card.type}</p>
                                </div>
                              </div>
                              {selectedCard === card.id && (
                                <Check className="w-6 h-6 text-pink-500" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add New Card */}
                      <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-all duration-200 group">
                        <div className="flex items-center justify-center space-x-3">
                          <CreditCard className="w-6 h-6 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">Add New Card</span>
                        </div>
                      </button>
                    </div>
                  )}

                  {selectedPayment === 'upi' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">UPI Payment</h3>
                      <div className="p-6 border-2 border-blue-200 bg-blue-50 rounded-xl">
                        <div className="flex items-center space-x-4 mb-4">
                          <Smartphone className="w-8 h-8 text-blue-600" />
                          <div>
                            <h4 className="font-semibold text-blue-900">Pay with UPI</h4>
                            <p className="text-blue-700 text-sm">Use any UPI app to pay</p>
                          </div>
                        </div>
                        <input 
                          type="text"
                          placeholder="Enter UPI ID (e.g., 9876543210@paytm)"
                          className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Price Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              {/* Price Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Info className="w-6 h-6 mr-3 text-blue-600" />
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
                      <button className="ml-2 text-pink-500 hover:text-pink-600 transition-colors">
                        <span className="text-sm font-medium">Know More</span>
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

                <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}