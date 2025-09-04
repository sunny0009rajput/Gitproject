import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started",
      monthlyPrice: 9,
      annualPrice: 90,
      icon: <Star className="w-6 h-6" />,
      features: [
        "Up to 5 projects",
        "10GB storage",
        "Basic support",
        "Standard templates",
        "Mobile app access"
      ],
      popular: false,
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 29,
      annualPrice: 290,
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Unlimited projects",
        "100GB storage",
        "Priority support",
        "Premium templates",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      popular: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      monthlyPrice: 99,
      annualPrice: 990,
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Custom branding",
        "On-premise deployment"
      ],
      popular: false,
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const PricingCard = ({ plan, index }) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const savings = plan.monthlyPrice * 12 - plan.annualPrice;
    
    return (
      <div 
        className={`relative group transform transition-all duration-500 hover:scale-105 ${
          index === 1 ? 'lg:-mt-8 z-10' : 'z-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Most Popular
            </div>
          </div>
        )}
        
        <div className={`relative h-full bg-black/40 backdrop-blur-xl rounded-2xl border ${
          plan.popular 
            ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
            : 'border-gray-700/50 hover:border-gray-600/50'
        } overflow-hidden group-hover:shadow-2xl transition-all duration-500`}>
          
          {/* Background gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          <div className="relative p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg`}>
                {React.cloneElement(plan.icon, { className: "w-6 h-6 text-white" })}
              </div>
              {plan.popular && (
                <Shield className="w-5 h-5 text-purple-400" />
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            
            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">${price}</span>
                <span className="text-gray-400 ml-2">/{isAnnual ? 'year' : 'month'}</span>
              </div>
              {isAnnual && savings > 0 && (
                <div className="mt-2">
                  <span className="text-green-400 text-sm font-semibold">
                    Save ${savings} annually
                  </span>
                </div>
              )}
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              plan.popular
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25'
                : 'bg-white/10 hover:bg-white/20 border border-gray-600/50 hover:border-gray-500/50'
            }`}>
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Plan</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Unlock the full potential of our platform with flexible pricing options designed to scale with your needs.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-black/40 backdrop-blur-xl rounded-full p-1 border border-gray-700/50">
              <div className="flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    !isAnnual
                      ? 'bg-white text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                    isAnnual
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-6">Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Need help choosing the right plan? Our team is here to help you find the perfect solution for your needs.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            Contact Sales
          </button>
        </div>
        
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60">
          <div className="text-gray-500 text-sm">Trusted by 10,000+ companies</div>
          <div className="flex items-center text-gray-500">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm">Enterprise Security</span>
          </div>
          <div className="text-gray-500 text-sm">99.9% Uptime SLA</div>
        </div>
      </div>
    </div>
  );
}