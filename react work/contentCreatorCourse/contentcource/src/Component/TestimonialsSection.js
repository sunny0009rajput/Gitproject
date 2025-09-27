import React, { useState } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const successRate = {
    percentage: 92,
    description: "of customers were served successfully*"
  };

  const testimonials = [
    {
      id: 1,
      text: "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
      name: "PRITHU H.",
      rating: 5
    },
    {
      id: 2,
      text: "I Believe conducting the course in Hindi Language was the best part. All the concepts were explained in a very simple easy to understand way. The prompt sheets prepared are also very useful for future use. Looking forward for more such creative courses by Dhruv.",
      name: "RAGHAV GOEL",
      rating: 5
    },
    {
      id: 3,
      text: "The lessons were given and organised in a fantastic way. Dhruv has the capacity to maintain the audience's attention. If you would have included how ChatGPT could be utilized for more coding-related subjects, it would be more beneficial to me personally. But I am aware that this course needs to be more inclusive to appeal to all students.",
      name: "HARSH S.",
      rating: 5
    },
    {
      id: 4,
      text: "This course proved to be a game changer and helped me a lot in killing my habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
      name: "KEYUR KUMBHARE",
      rating: 5
    },
    {
      id: 5,
      text: "Course is short, simple and to the point. Although I knew some of the things but I never used or applied them. Now, after taking this course, I truly agree that it is the way I want to live my life going forward. Thank you so much!",
      name: "JED L.",
      rating: 5
    },
    {
      id: 6,
      text: "I must say this was a life-changing course for me. Understanding the things which TRULY make me happy helped me identify the tasks that I should be focusing on for achieving long-term happiness. This course is especially for people who aren't satisfied with how they spend their 24 hours in the day, or for some reason have regrets. This course has the golden nuggets for that problem.",
      name: "KRISHNAPREET S.",
      rating: 5
    },
    {
      id: 7,
      text: "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
      name: "BUSHRA KHAN R.",
      rating: 5
    },
    {
      id: 8,
      text: "I am very satisfied with your course. Now I am able to understand AI better than before. You have explained very well how we can use this tool to improve our lives.",
      name: "RAJNIKANT K.",
      rating: 5
    },
     {
      id: 9,
      text: "I must say this was a life-changing course for me. Understanding the things which TRULY make me happy helped me identify the tasks that I should be focusing on for achieving long-term happiness. This course is especially for people who aren't satisfied with how they spend their 24 hours in the day, or for some reason have regrets. This course has the golden nuggets for that problem.",
      name: "KRISHNAPREET S.",
      rating: 5
    },
    {
      id: 10,
      text: "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
      name: "BUSHRA KHAN R.",
      rating: 5
    },
    {
      id: 11,
      text: "I am very satisfied with your course. Now I am able to understand AI better than before. You have explained very well how we can use this tool to improve our lives.",
      name: "RAJNIKANT K.",
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
    <div className="w-full  bg-black/90 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            HERE'S WHAT OUR CURRENT<br />
            STUDENTS HAVE TO SAY...
          </h2>
        </div>

        {/* Success Rate Card + Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Success Rate Card */}
          <div className="bg-black border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[250px] md:col-span-1">
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
              className="bg-black border border-gray-700 rounded-2xl p-6 flex flex-col min-h-[250px] relative"
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
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-4 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {showMore ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;