import React, { useState } from 'react';
import { 
  Home, 
  TrendingUp, 
  Search, 
  Calculator, 
  Shield, 
  FileText, 
  Users, 
  Award,
  ChevronRight,
  Check,
  Star,
  Phone,
  Mail,
  Clock,
  MapPin,
  Building,
  Key,
  Heart,
  Briefcase,
  Camera,
  DollarSign
} from 'lucide-react';

export default function OurServices() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const mainServices = [
    {
      id: 1,
      icon: Home,
      title: 'Property Sales',
      subtitle: 'Buy & Sell Properties',
      description: 'Expert guidance for buying and selling residential and commercial properties with maximum value optimization.',
      features: ['Market Analysis', 'Property Valuation', 'Negotiation Support', 'Legal Assistance'],
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Building,
      title: 'Property Management',
      subtitle: 'Full-Service Management',
      description: 'Comprehensive property management services to maximize your investment returns and minimize hassles.',
      features: ['Tenant Screening', 'Rent Collection', 'Property Maintenance', '24/7 Support'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Investment Consulting',
      subtitle: 'Smart Investment Strategies',
      description: 'Strategic investment advice to help you build and diversify your real estate portfolio for long-term wealth.',
      features: ['Portfolio Analysis', 'ROI Calculations', 'Market Trends', 'Risk Assessment'],
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      icon: Key,
      title: 'Property Rentals',
      subtitle: 'Rental Solutions',
      description: 'Find the perfect rental property or tenant with our comprehensive rental services and screening process.',
      features: ['Property Listings', 'Tenant Matching', 'Lease Management', 'Inspection Services'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      icon: Calculator,
      title: 'Property Valuation',
      description: 'Accurate property assessments using advanced market analysis and comparable sales data.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Complete legal support for contracts, agreements, and property documentation.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Insurance Services',
      description: 'Comprehensive insurance solutions to protect your property investments.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Search,
      title: 'Property Search',
      description: 'Personalized property search based on your specific requirements and budget.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'High-quality property photography and virtual tours for marketing excellence.',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: DollarSign,
      title: 'Mortgage Assistance',
      description: 'Expert guidance through the mortgage process with trusted lending partners.',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We understand your needs, budget, and preferences through a detailed consultation.',
      icon: Users
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'Comprehensive market analysis to identify the best opportunities for your goals.',
      icon: Search
    },
    {
      step: '03',
      title: 'Property Selection',
      description: 'Curated property recommendations that match your specific criteria.',
      icon: Home
    },
    {
      step: '04',
      title: 'Negotiation & Closing',
      description: 'Expert negotiation and seamless transaction management to closing.',
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      text: 'Exceptional service from start to finish. They found us the perfect home within our budget and timeline.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Investor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      text: 'Their investment consulting helped me build a profitable real estate portfolio. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: 'Outstanding property management services. My rental income increased by 30% in the first year.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto mb-8">
              Comprehensive real estate solutions designed to meet all your property needs, from buying and selling to investment and management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship services designed to provide comprehensive real estate solutions for every client need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={service.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-blue-200">{service.subtitle}</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className={`flex-1 bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your real estate journey and ensure complete satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures successful outcomes for every client interaction.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about our exceptional service and results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Excellence?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Let our expert team help you achieve your real estate goals with personalized service and proven results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3 text-blue-400" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-200">(555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-purple-200">info@premierrealty.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-3 text-cyan-400" />
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-cyan-200">Mon-Fri: 9AM-7PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}