import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      category: "CONTENT CREATION",
      title: "THE YOUTUBE BLUEPRINT: MAKE CONTENT CREATION YOUR CAREER!",
      description: "Have you ever dreamt of becoming a YouTuber? This is your blueprint to getting there. Whether you want to take up content creation as a full-time career or a part-time job, this all-in-one course is your perfect plan of action.",
      features: [
        "Learn to ideate, script, film, and edit videos.",
        "Understand the secret to getting lakhs of followers.",
        "Discover ways to earn money as a creator."
      ],
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42845e_HeroBannerContainer%20(2).png",
      
      bgColor: "bg-gradient-to-br from-black to-black"
    },
    {
      id: 2,
      category: "AI",
      title: "MASTER CHATGPT: TRANSFORM YOUR LIFE WITH AI CHATBOTS",
      description: "Artificial Intelligence is changing the world. Learn to use the power of ChatGPT at its full potential to level up your productivity at work, school and at home. Discover the basics of machine learning and prompt engineering.",
      features: [
        "Understand AI, Machine Learning and Prompt Engineering.",
        "Learn to use ChatGPT at school, university, work, and at home.",
        "Prompt sheet resources to help you get started with AI Chatbots.",
        "Get ahead and prepare yourself for the skills of the future."
      ],
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428441_Frame%20237868.png",
     
      bgColor: "bg-gradient-to-br from-black to-black"
    },
    {
      id: 3,
      category: "PRODUCTIVITY",
      title: "HOW TO DO A MILLION THINGS ALL AT ONCE",
      description: "Become a Master of Time Management and Productivity. Learn from me as I teach you how to plan your day, track your time, achieve your goals and live your dream life!",
      features: [
        "Practical tips to manage your time and boost productivity",
        "Assignments to help you practice what you learn",
        "Balance your life and spend time on the things you love"
      ],
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42843d_Course%20Card-1.png",
     
      bgColor: "bg-gradient-to-br from-black to-black"
    }
  ];

  return (
    <div className="w-full bg-black/90 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">COURSES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            BECOME SKILLED AT WHAT MATTERS
          </h2>
        </div>

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
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {course.description}
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
                    
                    {/* Image Overlay */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-30 rounded-2xl`}></div> */}
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Offer */}
        {/* <div className="mt-16 relative"> */}
          {/* <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"> */}
            {/* Background Pattern
            {/* <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
            </div> */}
            
            {/* <div className="relative z-10"> */}
              {/* <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider inline-block mb-6">
                SPECIAL OFFER
              </span> */}
              {/* <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                3 in 1 Course Bundle
              </h3> */}
              {/* <p className="text-white/90 text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Level up your life. Get access to all of my three courses at once, The Youtube Blueprint, 
                Master ChatGPT and Time Management Course. This course bundle offers you a big discount 
                if you buy all three courses together.
              </p> */}
              {/* <button className="group bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3 mx-auto">
                <span>GET BUNDLE NOW</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div>  */}
      </div>
    </div>
  );
};

export default CoursesSection;