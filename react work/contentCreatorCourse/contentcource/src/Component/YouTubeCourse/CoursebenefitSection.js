import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CoursesbenefitSection = () => {
  const courses = [
    {
      id: 1,
      category: "Meet your instructor",
      title: "Dhruv Rathee",
      description: "I love making videos. My expertise is in creating informative and educational content which provides objective, concise and simplified explanations of complex issues on a variety of subjects.",
      description1: "I strongly believe in speaking truth to power and practice promoting progressive values of democracy, freedom, rationalism and critical thinking through my videos.",
      description2: "My background is from mechanical and renewable energy engineering since I did my masters college degree in that. But my passion lies in the fields of Economics and Political Science in which I studied for a second bachelors degree. And yes, I also really really love travelling.",
      features: [
       
      ],
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428489_64deae15384c0f18d12bb6c7_Welcome%2520to%2520Designership-p-500.jpg.png",
      
      bgColor: "bg-gradient-to-br from-black to-black"
    },
    // {
    //   id: 2,
    //   category: "AI",
    //   title: "MASTER CHATGPT: TRANSFORM YOUR LIFE WITH AI CHATBOTS",
    //   description: "Artificial Intelligence is changing the world. Learn to use the power of ChatGPT at its full potential to level up your productivity at work, school and at home. Discover the basics of machine learning and prompt engineering.",
    //   features: [
    //     "Understand AI, Machine Learning and Prompt Engineering.",
    //     "Learn to use ChatGPT at school, university, work, and at home.",
    //     "Prompt sheet resources to help you get started with AI Chatbots.",
    //     "Get ahead and prepare yourself for the skills of the future."
    //   ],
    //   image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428441_Frame%20237868.png",
     
    //   bgColor: "bg-gradient-to-br from-black to-black"
    // },
    // {
    //   id: 3,
    //   category: "PRODUCTIVITY",
    //   title: "HOW TO DO A MILLION THINGS ALL AT ONCE",
    //   description: "Become a Master of Time Management and Productivity. Learn from me as I teach you how to plan your day, track your time, achieve your goals and live your dream life!",
    //   features: [
    //     "Practical tips to manage your time and boost productivity",
    //     "Assignments to help you practice what you learn",
    //     "Balance your life and spend time on the things you love"
    //   ],
    //   image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42843d_Course%20Card-1.png",
     
    //   bgColor: "bg-gradient-to-br from-black to-black"
    // }
  ];

  return (
    <div className="w-full bg-black/90 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">COURSES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            BECOME SKILLED AT WHAT MATTERS
          </h2>
        </div> */}

        {/* Courses Grid */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative rounded-3xl overflow-hidden ${course.bgColor} backdrop-blur-sm`}
            >
              {/* Background Gradient Overlay */}
              {/* <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-10`}></div> */}
              
              <div className={`relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  
                  {/* Category Badge */}
                  <div className="inline-block">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 leading-tight">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {course.description}
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {course.description1}
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {course.description2}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                      <span>GET STARTED</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group">
                    {/* Main Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default CoursesbenefitSection;