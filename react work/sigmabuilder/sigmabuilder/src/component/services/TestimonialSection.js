import React, { useState } from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const [showMore, setShowMore] = useState(false);

  const successRate = {
    percentage: 92,
    description: "of customers were served successfully*"
  };

  const testimonials = [
  {
    id: 1,
    text: "Sigma Builder Construction turned our dream home into reality. The team was professional, punctual, and attentive to every detail. Highly recommend them for quality construction.",
    name: "Aarav Mehta",
    rating: 5
  },
  {
    id: 2,
    text: "We renovated our farmhouse with Sigma Builder Construction, and the result is amazing. They understood our vision perfectly and delivered on time.",
    name: "Neha Sharma",
    rating: 5
  },
  {
    id: 3,
    text: "The team managed our multi-storey office building project seamlessly. From planning to execution, everything was handled with precision and professionalism.",
    name: "Rohit Kapoor",
    rating: 5
  },
  {
    id: 4,
    text: "I loved how transparent and communicative the Sigma Builder team was throughout our home construction. Quality materials and excellent craftsmanship!",
    name: "Priya Verma",
    rating: 5
  },
  {
    id: 5,
    text: "Sigma Builder Construction exceeded our expectations. Our modern villa looks stunning, and the project was completed within the timeline and budget.",
    name: "Vikram Singh",
    rating: 5
  },
  {
    id: 6,
    text: "From design suggestions to finishing touches, the team was fantastic. They truly care about client satisfaction and quality work.",
    name: "Ananya Reddy",
    rating: 5
  },
  {
    id: 7,
    text: "We hired Sigma Builder for a commercial complex, and the result is excellent. The project was delivered on schedule with no compromise on quality.",
    name: "Karan Jain",
    rating: 5
  },
  {
    id: 8,
    text: "Their attention to detail in our home renovation was outstanding. The team made sure every element was perfect. Highly recommended!",
    name: "Shreya Nair",
    rating: 5
  },
  {
    id: 9,
    text: "Sigma Builder Construction helped us build a beautiful bungalow. The team was professional, friendly, and kept us updated at every stage.",
    name: "Aditya Kulkarni",
    rating: 5
  },
  {
    id: 10,
    text: "Excellent work on our apartment renovation. The team was punctual, skilled, and turned our ideas into reality beautifully.",
    name: "Sonal Desai",
    rating: 5
  },
  {
    id: 11,
    text: "We are extremely satisfied with Sigma Builder Construction. They delivered our luxury villa exactly as planned, with top-notch quality.",
    name: "Raghav Choudhary",
    rating: 5
  }
];


  const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 5);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="w-full  bg-white px-4 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center py-4 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              What Our  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Client Says..</span>
            </h1>
        </div>

        {/* Success Rate Card + Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Success Rate Card */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[250px] md:col-span-1">
            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">{successRate.percentage}%</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {successRate.description}
            </p>
          </div>

          {/* Testimonials */}
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border border-gray-700 rounded-2xl p-6 flex flex-col min-h-[250px] relative"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-white font-serif leading-none mb-2">"</div>
              
              {/* Testimonial Text */}
              <p className="text-white/90 text-sm leading-relaxed flex-grow mb-4">
                {testimonial.text}
              </p>
              
              {/* Author Info */}
              <div className="mt-auto">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    {testimonial.name}
                  </span>
                </div>
                <div className="flex space-x-1 ml-10 -mt-2">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12 mb-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {showMore ? 'Show Less' : 'See More'}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;