import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals",
      price: 19,
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Support",
        "Standard Templates",
        "Mobile Access"
      ],
      popular: false,
      gradient: "from-gray-700 to-gray-800",
      buttonStyle: "bg-white/10 hover:bg-white/20 border border-gray-600/50"
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: 49,
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      features: [
        "Unlimited Projects",
        "100GB Storage",
        "Priority Support",
        "Premium Templates",
        "Advanced Analytics",
        "Team Collaboration"
      ],
      popular: true,
      gradient: "from-purple-600 to-pink-600",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
    },
    {
      name: "Enterprise",
      description: "For large teams",
      price: 99,
      icon: <Crown className="w-5 h-5 md:w-6 md:h-6" />,
      features: [
        "Everything in Pro",
        "Unlimited Storage",
        "24/7 Support",
        "Custom Integrations",
        "Advanced Security",
        "SLA Guarantee"
      ],
      popular: false,
      gradient: "from-amber-500 to-orange-600",
      buttonStyle: "bg-white/10 hover:bg-white/20 border border-gray-600/50"
    }
  ];

  const PricingCard = ({ plan, index }) => {
    return (
      <div 
        className={`relative group transform transition-all duration-500 hover:scale-105 ${
          plan.popular ? 'md:-mt-4 z-10' : 'z-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              Popular
            </div>
          </div>
        )}
        
        <div className={`relative h-full bg-black/40 backdrop-blur-xl rounded-xl md:rounded-2xl border ${
          plan.popular 
            ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
            : 'border-gray-700/50 hover:border-gray-600/50'
        } overflow-hidden group-hover:shadow-2xl transition-all duration-500`}>
          
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          <div className="relative p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg`}>
                {React.cloneElement(plan.icon, { className: "w-5 h-5 md:w-6 md:h-6 text-white" })}
              </div>
            </div>
            
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2">{plan.name}</h3>
              <p className="text-xs md:text-sm text-gray-400">{plan.description}</p>
            </div>
            
            {/* Pricing */}
            <div className="text-center mb-4 md:mb-6">
              <div className="flex items-baseline justify-center">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 ml-1 md:ml-2 text-xs md:text-sm">/month</span>
              </div>
            </div>
            
            {/* Features */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className={`w-full py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-semibold text-white text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Plan</span>
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl lg:max-w-3xl mx-auto">
            Select the perfect plan that fits your needs and budget
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 md:mt-16 lg:mt-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 lg:mb-6">Need Help?</h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-400 mb-4 md:mb-6 lg:mb-8 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            Our team is ready to help you choose the right plan for your business
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            Contact Us
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16 opacity-60">
          <div className="text-gray-500 text-xs md:text-sm">10,000+ Users</div>
          <div className="text-gray-500 text-xs md:text-sm">99.9% Uptime</div>
          <div className="text-gray-500 text-xs md:text-sm">24/7 Support</div>
        </div>
      </div>
    </div>
  );
}