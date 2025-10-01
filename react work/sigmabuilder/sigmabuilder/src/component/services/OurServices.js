import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import CoreServices from './CoreServices';
import TestimonialSection from './TestimonialSection';

export default function OurServices() {



  const processSteps = [
    {
      step: '01',
      title: 'Initiation & Consultation',
      description: 'We understand your needs, budget, and preferences through a detailed consultation.',
      icon: Users
    },
    {
      step: '02',
      title: 'Drafting',
      description: 'We design, get approval, and finalize the budget.',
      icon: Search
    },
    {
      step: '03',
      title: 'Construction',
      description: 'Our skilled team builds step by step, ensuring quality, timely delivery.',
      icon: Home
    },
    {
      step: '04',
      title: 'Handover',
      description: 'After final checks, we hand over your dream home.',
      icon: Award
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
              "Sigma Builder Construction delivers precise, quality solutions from homes to commercial complexes turning your vision into lasting structures."
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <CoreServices/>

      {/* Process Section */}
      <div className="py-4 bg-white">
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

      <TestimonialSection/>

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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              {/* Contact Us → WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Sigma Builder, I need consultation for a construction project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sigma Builder on WhatsApp"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Get Started Today
              </a>

              {/* View Portfolio → Home page */}
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Portfolio
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}