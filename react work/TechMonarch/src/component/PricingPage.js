import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PricingPage() {

  const [isVisible, setIsVisible] = useState({});
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setIsVisible((prev) => ({
              ...prev,
              [section.id]: true,
            }));
          } else {
            setIsVisible((prev) => ({
              ...prev,
              [section.id]: false,
            }));
          }
        });
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check on mount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  const plans = [
    {
      name: "Wordpress/Shopify",
      description: "Perfect for small budget",
      price: "5000",
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      features: [
        "Web Pannel For All",
        "Master Admin",
        "3 Month Support",
        "Standard Templates",
        "Mobile Responsive"
      ],
      popular: false,
      gradient: "from-gray-700 to-gray-800",
      buttonStyle: "bg-white/10 hover:bg-white/20 border border-gray-600/50"
    },
    {
      name: "Custom Coding",
      description: "Best for Startup",
      price: "50,000",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      features: [
        "Web Pannel For All",
        "Master Admin",
        "6 Month Support",
        "Beautiful Templates",
        "Mobile Responsive"
      ],
      popular: true,
      gradient: "from-amber-500 to-orange-600",
      buttonStyle: "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-700 hover:to-orange-700 shadow-lg shadow-purple-500/25"
    },
    {
      name: "Android / IOS",
      description: "For Running Startup",
      price: "50,000",
      icon: <Crown className="w-5 h-5 md:w-6 md:h-6" />,
      features: [
        "App For Master, User Pannel",
        "Master Admin",
        "6 Month Support",
        "Beautiful Templates",
        "Desktop, Android, IOS Friendly"
      ],
      popular: false,
      gradient: "from-gray-700 to-gray-800",
      buttonStyle: "bg-white/10 hover:bg-white/20 border border-gray-600/50"
    }
  ];

  const PricingCard = ({ plan, index }) => {
    return (
      <div 
        className={`relative group transform transition-all duration-500 hover:scale-105 h-full ${
          plan.popular ? 'md:-mt-4 z-10' : 'z-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-black px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              Popular
            </div>
          </div>
        )}
        
        <div
  className={`relative flex flex-col h-full min-h-[400px] bg-white/40 backdrop-blur-xl rounded-xl md:rounded-2xl border ${
    plan.popular
      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
      : 'border-gray-800/50 hover:border-gray-600/50'
  } overflow-hidden group-hover:shadow-2xl transition-all duration-500`}
>

          
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          <div className="relative p-4 md:p-6 lg:p-8 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg`}>
                {React.cloneElement(plan.icon, { className: "w-5 h-5 md:w-6 md:h-6 text-white" })}
              </div>
            </div>
            
            <div className="text-center mb-4 md:mb-6 flex flex-col h-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-1 md:mb-2">{plan.name}</h3>
              <p className="text-xs md:text-sm text-gray-800">{plan.description}</p>
            </div>
            
            {/* Pricing */}
            <div className="text-center mb-4 md:mb-6 flex flex-col h-full">
              <div className="flex items-baseline justify-center">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">₹{plan.price}</span>
                {/* <span className="text-gray-800 ml-1 md:ml-2 text-xs md:text-sm">/month</span> */}
              </div>
            </div>
            
            {/* Features */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex flex-col h-full">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-800 text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className='mt-auto'>
            <button  aria-label="Chat with CodeMonarch on WhatsApp" className={`w-full py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-semibold text-black text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
              <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
        rel="noopener noreferrer"  aria-label="Chat with CodeMonarch on WhatsApp">
              Get Started
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id='Pricing_Plan' className="min-h-screen bg-gradient-to-br from-whiite via-white-900 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 md:mb-4 lg:mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Plan</span>
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-800 max-w-2xl lg:max-w-3xl mx-auto">
            Select the perfect plan that fits your needs and budget
          </p>
        </div>
        
        {/* Pricing Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 max-w-4xl md:max-w-6xl mx-auto items-stretch">
  {plans.map((plan, index) => (
    <div key={plan.name} className="mx-auto w-[280px] md:w-auto lg:w-auto xl:w-auto">
      <PricingCard plan={plan} index={index} />
    </div>
  ))}
</div> */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 max-w-4xl md:max-w-6xl mx-auto items-stretch">
  {plans.map((plan, index) => (
    <div
      key={plan.name}
      className={`mx-auto w-full max-w-[300px] ${
        plan.popular ? 'sm:max-w-[320px]' : ''
      } md:max-w-none`}
    >
      <PricingCard plan={plan} index={index} />
    </div>
  ))}
</div>



        
        
      </div>
    </div>
  );
}