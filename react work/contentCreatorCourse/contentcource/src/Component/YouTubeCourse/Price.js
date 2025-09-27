import React, { useState } from 'react';
import { ChevronDown, Plus, Tag, CreditCard } from 'lucide-react';

const Price = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    state: 'Karnataka'
  });
  
  const [showCoupon, setShowCoupon] = useState(false);
  const [showGST, setShowGST] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const coursePrice = 5931.36;
  const gstAmount = 1067.64;
  const totalAmount = 6999.00;

  const paymentMethods = [
    { name: 'UPI', logo: '🎯' },
    { name: 'PhonePe', logo: '📱', color: 'text-purple-600' },
    { name: 'Paytm', logo: '💳', color: 'text-blue-600' },
    { name: 'Visa', logo: '💳', color: 'text-blue-800' },
    { name: 'Mastercard', logo: '💳', color: 'text-red-600' },
    { name: 'RuPay', logo: '💳', color: 'text-orange-600' },
    { name: 'GPay', logo: '🎨', color: 'text-green-600' }
  ];

  return (
    <div className="min-h-screen pt-28 bg-black/90 py-4 px-4 sm:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-28">
          {/* Left Column - Course Details */}
          <div className="bg-gray-700 rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 h-fit">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              The Youtube Blueprint: Make Content Creation your Career!
            </h1>
            <p className="text-white mb-4">By Dhruv Rathee Academy</p>
            
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-white">₹6999</span>
              <span className="text-white ml-2">(Inclusive of GST)</span>
            </div>

            {/* Course Image */}
            <div className="mb-6">
              <img src="https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42843b_Frame%20237864%20(1).png" alt="Course" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Course Description */}
            <div className="text-white space-y-4 mb-6">
              <p>
                Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation as a full time career or a part-time job, this all-in-one course is your perfect plan of action. Learn to ideate, script, film, and edit amazing videos. Then understand the secret to getting lakhs of followers and making money as a content creator. It's time to live your dream life!
              </p>
              
              <p className="italic">
                <strong>Note:</strong> This course is in Hindi with English Subtitles. If you have a coupon code, you can use it on the next step. For people living in Canada and Australia, please note that the amount shown below is in US Dollars.
              </p>
              
              <p>
                <strong>Users from Pakistan, Bangladesh, Nepal & Sri Lanka can purchase using this link -</strong>
                <br />
                <a href="#" className="text-blue-600 hover:underline break-all">
                  https://academy.dhruvrrathee.com/c/45f2298b2
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="bg-gray-700 rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Payment details</h2>
            <p className="text-white mb-6">Complete your purchase by providing your payment details.</p>

            {/* Billing Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Billing information</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                
                <div className="flex gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
                    <span className="text-2xl mr-2">🇮🇳</span>
                    <span className="text-white">+91</span>
                    <ChevronDown className="w-4 h-4 ml-1 text-white" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                
                {/* <div>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div> */}
                
                {/* <div className="relative">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none transition bg-white"
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                </div> */}
              </div>
            </div>

            {/* Coupon Section */}
            <div className="mb-6">
              <button
                onClick={() => setShowCoupon(!showCoupon)}
                className="flex items-center justify-between w-full text-left py-3 text-white hover:text-white transition"
              >
                <div className="flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-white" />
                  <span>Have a coupon?</span>
                </div>
                <Plus className={`w-5 h-5 transition-transform ${showCoupon ? 'rotate-45' : ''}`} />
              </button>
              
              {showCoupon && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              )}
            </div>

            {/* Service Summary */}
            <div className="mb-6 space-y-3">
              <h4 className="font-semibold text-white">Service</h4>
              <div className="flex justify-between text-sm">
                <span className="text-white">The Youtube Blueprint: Make Content Creation your Career!</span>
                <span className="font-medium text-white">₹{coursePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white">GST</span>
                <span className="font-medium text-white">₹{gstAmount.toFixed(2)}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold">
                <span className="text-white">Amount to be paid :</span>
                <span className="text-white">₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Add GST Section */}
            <div className="mb-6">
              <button
                onClick={() => setShowGST(!showGST)}
                className="flex items-center justify-between w-full text-left py-3 text-white hover:text-white transition"
              >
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-white" />
                  <span>Add GST (optional)</span>
                </div>
                <Plus className={`w-5 h-5 transition-transform ${showGST ? 'rotate-45' : ''}`} />
              </button>
              {showGST && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Enter GST number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                  />
                </div>
              )}
            </div>

            {/* Payment Button */}
            <button className="w-full bg-green-400 text-white py-4 rounded-lg font-semibold text-lg mb-4 cursor-not-allowed">
              Proceed to pay ₹{totalAmount.toFixed(2)}
            </button>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className={`text-2xl ${method.color || ''}`}>
                  {method.logo}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-xs text-white space-y-2">
              <p>
                You agree to share information entered on this page with TagMango (owner of this page) and Razorpay, adhering to applicable laws.
              </p>
              <div className="flex flex-wrap gap-4">
                <span>TagMango 2023</span>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;