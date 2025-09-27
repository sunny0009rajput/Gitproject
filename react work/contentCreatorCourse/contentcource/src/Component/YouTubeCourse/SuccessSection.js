import React from 'react';
import { Lightbulb, Video, DollarSign } from 'lucide-react';

const SuccessSection = () => {
  const secrets = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Find your Niche and come up with Great Ideas",
      description: "The biggest challenge that any new content creator faces is monetization. There are so many other creators out there, so you need to stand out. The trick is to pick your niche and come out of the top. I teach you how exactly to do this. As a creator, I can provide you with 20+ amazing niche ideas which would increase your chances of Success.",
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42845a_Image%20(43).png",
      position: "right"
    },
    {
      id: 2,
      icon: Video,
      title: "Learn to Film and Edit like a Pro On Your Smartphone",
      description: "Don't worry, you don't need to buy expensive equipment when starting out. All you need is your smartphone. Let me teach you just how to be aesthetic visuals and edit them. I created videos  professionally for major platforms like BBC, Quints & many more. I teach how editing mastery on the phone will make editing on camera even easier.",
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42846d_Image%20(44).png",
      position: "left"
    },
    {
      id: 3,
      icon: DollarSign,
      title: "Unlock Monetization and Secrets to YouTube Success",
      description: "Why do some YouTube channels grow exponentially don't they understand it? years of experience as a Youtuber, I can break this problem down. There are so many secrets that everyone knows. In this session, I am going to teach you the secret strategies, mindset and tips to unlock massive YouTube growth.",
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42846d_Image%20(44).png",
      position: "right"
    }
  ];

  return (
    <div className="bg-black/90 min-h-screen py-12 px-4 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-red-500">The Secrets</span>{' '}
            <span className="text-white">to Success</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Unlocking the keys to Creating Compelling and Captivating Digital Content.
          </p>
        </div>

        {/* Secrets Cards */}
        <div className="space-y-8 sm:space-y-16">
          {secrets.map((secret, index) => (
            <div key={secret.id} className="group">
              <div className={`
                grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center
                ${secret.position === 'left' ? 'lg:flex-row-reverse' : ''}
              `}>
                {/* Content Side */}
                <div className={`
                  order-2 lg:order-1 space-y-4 sm:space-y-6
                  ${secret.position === 'left' ? 'lg:order-2' : 'lg:order-1'}
                `}>
                  {/* Icon and Number */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                      <secret.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/50">
                      <span className="text-red-400 font-bold text-sm sm:text-base">
                        {String(secret.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {secret.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {secret.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <button className="text-red-600 hover:text-white font-medium text-sm sm:text-base transition-colors duration-300 group/btn">
                      Learn More 
                      <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`
                  order-1 lg:order-2 flex justify-center
                  ${secret.position === 'left' ? 'lg:order-1' : 'lg:order-2'}
                `}>
                  <div className="relative group/image">
                    {/* Main Image Container */}
                    <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-600/20 border border-gray-600/20 group-hover/image:border-gray-500/40 transition-all duration-500">
                      <img
                        src={secret.image}
                        alt={secret.title}
                        className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/image:bg-red-500/80 transition-colors duration-300">
                        <secret.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-red-600/5 to-red-900/5 rounded-3xl -z-10 group-hover/image:from-red-600/10 group-hover/image:to-red-900/10 transition-all duration-500"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-red-400/50 rounded-full group-hover/image:border-red-400 transition-colors duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Separator Line (except for last item) */}
              {index < secrets.length - 1 && (
                <div className="mt-12 sm:mt-20 flex justify-center">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        
      </div>
    </div>
  );
};

export default SuccessSection;