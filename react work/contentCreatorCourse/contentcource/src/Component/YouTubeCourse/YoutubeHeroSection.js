import React from 'react';
import { Star, Video, BookOpen, Languages, } from 'lucide-react';
import CheckoutPage from './CheckoutPage';
import { Link } from 'react-router-dom'; // <-- Correct import

const YoutubeHeroSection = () => {
  const learnerAvatars = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  ];

  return (
    <div className="min-h-screen pt-12 bg-black relative overflow-hidden">
      {/* background dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Main grid: mobile 1 column, desktop 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start lg:items-center min-h-[80vh] py-12">

          {/* LEFT COLUMN: heading */}
          <div className="order-1 lg:order-1">
            {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-red-600">
            The YouTube Blueprint
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Make Content Creation<br />Your Career!
          </h2>
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
            Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation as a full time career or a part-time job, this all-in-one course is your perfect plan of action. Learn to ideate, script, film, and edit amazing videos. Then understand the secret to getting lakhs of followers and making money as a content creator. It's time to live your dream life!
          </p>
          {/* Features Row */}
          <div className="flex flex-row flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center bg-black rounded-xl px-4 py-2 text-white space-x-2 border border-white/10">
              <Video className="w-5 h-5" />
              <span className="text-sm font-medium">7.5 Hours of video content</span>
            </div>
            <div className="flex items-center bg-black rounded-xl px-4 py-2 text-white space-x-2 border border-white/10">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">7 Chapters</span>
            </div>
            <div className="flex items-center bg-black rounded-xl px-4 py-2 text-white space-x-2 border border-white/10">
              <Languages className="w-5 h-5" />
              <span className="text-sm font-medium">Hindi with English Subtitles</span>
            </div>
          </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="flex justify-center lg:justify-end  order-2 lg:order-2">
            <div className="relative ">
              <img
                src="https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428438_Dhruv%201(1).png"
                alt="Dhruv Rathee"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Paragraph + Button */}
          <div className="order-3 lg:order-4 flex flex-col space-y-6 justify-center lg:-mt-30">
           
            {/* <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg">
              At Dhruv Rathee Academy, you can gain practical knowledge and learn real-world
              skills that will help you transform your life at work, school and home.
            </p> */}
             {/* Buttons Row */}
          <div className="flex flex-row flex-wrap gap-4 mb-8">
            <Link
              to="/checkout"
              className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 transition cursor-pointer flex items-center justify-center"
              style={{ minWidth: '180px', minHeight: '56px' }}
            >
              Join Now
            </Link>
            <button className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg border border-white/10 hover:bg-gray-900 transition">
              See curriculum
            </button>
          </div>

            {/* Reviews Row */}
            <div className="flex flex-row flex-wrap items-center space-x-6 mt-4">
              {/* Avatars + Happy Learners */}
              <div className="flex flex-row items-center space-x-3">
                <div className="flex -space-x-2">
                  {learnerAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Learner ${index + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10000+</p>
                  <p className="text-sm text-white/70">Happy Learners</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-white/30"></div>

              {/* Ratings */}
              <div className="flex flex-row items-center space-x-3">
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-2xl font-bold text-white">4.8</span>
                    <span className="text-white/70">+ (600+ Ratings)</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          
            

            
          
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div> */}
    </div>
  );
};

export default YoutubeHeroSection;
