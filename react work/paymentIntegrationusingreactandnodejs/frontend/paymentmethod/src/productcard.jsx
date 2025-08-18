import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

export default function ProductCard() {
    const [amount, setAmount] = useState(350);


  const handleBuyNow = async() => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      console.log(data);
      handlePaymentVerification(data.order);
      
    
    }catch (error) {
      console.error('Error creating order:', error);
    }
    };

    const handlePaymentVerification = async(orderData) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY, // Your Razorpay key
            amount: orderData.amount,
            currency: orderData.currency,
            name: 'Your Company Name',
            description: 'Payment for Product',
            order_id: orderData.id,
            handler: async (response) => {
                try {
                    const verificationResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify-payment`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            amount: orderData.amount /100,
                            
                        }),
                    });

                    const verificationData = await verificationResponse.json();
                    if (verificationData.message === 'Payment verified successfully') {
                        toast.success('Payment successful!');
                    } else {
                        toast.error('Payment verification failed.');
                    }
                } catch (error) {
                    console.error('Error verifying payment:', error);
                    toast.error('Payment verification failed.');
                }
            },
            prefill: {
                name: 'Customer Name',
                email: 'sunny@gmail.com',
                contact: '1234567890',
            },
            theme: {
                color: '#3399cc',
            },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();



    }
   


    


 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br  p-8">
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center" 
            alt="Premium Headphones"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Like Button */}
          {/* <button 
            onClick={handleLike}
            className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200"
          > */}
            {/* <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} /> */}
          {/* </button> */}
          
          {/* Sale Badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            30% OFF
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          

          {/* Product Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
            Premium Wireless Headphones
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            Experience crystal-clear audio with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.
          </p>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-purple-600">$149</span>
            <span className="text-lg text-gray-400 line-through">$199</span>
          </div>
          
          {/* Buy Now Button */}
          <button 
            onClick={handleBuyNow}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            
            Buy Now
          </button>
          <Toaster/>
        </div>
        
       
      </div>
    </div>
  );
}