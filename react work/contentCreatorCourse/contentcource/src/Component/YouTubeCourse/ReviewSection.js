import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Star, ThumbsUp, Users } from 'lucide-react';

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const videoRefs = useRef({});

  const reviews = [
    {
      id: 1,
      name: "Inderjeet S",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Sample video
      testimonial: "This course completely transformed my YouTube journey. The strategies are practical and results-driven!"
    },
    {
      id: 2,
      name: "Drushti A",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // Sample video
      testimonial: "Amazing content! I went from 100 subscribers to 10K in just 6 months using these techniques."
    },
    {
      id: 3,
      name: "Meenal G",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Sample video
      testimonial: "The editing techniques taught here are incredible. My videos look so much more professional now!"
    },
    {
      id: 4,
      name: "Rohit K",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", // Sample video
      testimonial: "Best investment I made for my content creation career. Highly recommended!"
    },
    {
      id: 5,
      name: "Priya M",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", // Sample video
      testimonial: "The monetization strategies are gold! I started earning within the first month."
    }
  ];

  const studentsData = [
    { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" },
    { avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" },
    { avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" },
    { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" }
  ];

 
    
  
  
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

  const getVisibleSlides = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const [visibleSlides] = useState(getVisibleSlides());

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + visibleSlides >= reviews.length ? 0 : prev + 1
    );
    setPlayingVideo(null); // Stop any playing video
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, reviews.length - visibleSlides) : prev - 1
    );
    setPlayingVideo(null); // Stop any playing video
  };

  const handleVideoClick = (reviewId) => {
    const video = videoRefs.current[reviewId];
    if (!video) return;

    if (playingVideo === reviewId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach(v => v && v.pause());
      video.play();
      setPlayingVideo(reviewId);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 5);

  const renderStarstext = (rating) => {
      return [...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
        />
      ));
    };

  return (
    <div className="bg-black/90 min-h-screen py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Reviews of the Course
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our students love us
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8">
              10,000+ people are already part of this community
            </p>

            {/* Stats */}
            <div className="space-y-6">
              {/* Thumbs Up */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Students</div>
                </div>
              </div>

              {/* Student Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {studentsData.map((student, index) => (
                    <img
                      key={index}
                      src={student.avatar}
                      alt={`Student ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                  <div className="w-10 h-10 bg-red-600 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-white text-xs font-bold">10K+</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="text-white font-semibold">Rating</div>
              </div>
              <div className="flex items-center gap-2">
                {/* <div className="flex gap-1">
                  {renderStars(5)}
                </div> */}
                <span className="text-white text-xl font-bold">4.9</span>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
            </div>
          </div>

          {/* Right Content - Video Carousel */}
          <div className="lg:col-span-8 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Video Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                  width: `${(reviews.length / visibleSlides) * 100}%`
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / reviews.length}%` }}
                  >
                    <div className="bg-black rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                      {/* Video Container */}
                      <div className="relative aspect-[4/5] bg-gradient-to-br from-pink-900/20 to-green-900/20">
                        <video
                          ref={(el) => videoRefs.current[review.id] = el}
                          className="w-full h-full object-cover"
                          poster={review.thumbnail}
                          muted
                          onEnded={() => setPlayingVideo(null)}
                        >
                          <source src={review.videoUrl} type="video/mp4" />
                        </video>

                        {/* Play/Pause Button */}
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                          onClick={() => handleVideoClick(review.id)}
                        >
                          <div className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 group-hover/play:scale-110 shadow-lg">
                            {playingVideo === review.id ? (
                              <Pause className="w-8 h-8 text-gray-800" />
                            ) : (
                              <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                            )}
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                      </div>

                      {/* Review Info */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={review.thumbnail}
                            alt={review.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-white font-semibold text-sm">
                              {review.name}
                            </h3>
                            <div className="flex gap-1">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {review.testimonial}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(reviews.length / visibleSlides) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    Math.floor(currentSlide / visibleSlides) === i 
                      ? 'bg-red-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-black/80 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            HERE'S WHAT OUR CURRENT<br />
            STUDENTS HAVE TO SAY...
          </h2>
        </div> */}

        {/* Success Rate Card + Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Success Rate Card */}
        

          {/* Testimonials */}
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-black/90 border border-gray-700 rounded-2xl p-6 flex flex-col min-h-[250px] relative"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-red-700 font-serif leading-none mb-2">"</div>
              
              {/* Testimonial Text */}
              <p className="text-white/90 text-sm leading-relaxed flex-grow mb-4">
                {testimonial.text}
              </p>
              
              {/* Author Info */}
              <div className="mt-auto">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-red-700 text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    {testimonial.name}
                  </span>
                </div>
                <div className="flex space-x-1 ml-10 -mt-2">
                  {renderStarstext(testimonial.rating)}
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
    </div>
  );
};

export default ReviewSection;