import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Check, Clock, Users, BookOpen, CreditCard, Shield, Calendar, Mail, Award, Star } from 'lucide-react';

const CourseCurriculumSection = () => {
  const [expandedChapter, setExpandedChapter] = useState(0); // First chapter expanded by default

  const chapters = [
    {
      id: 1,
      title: "Let's get Started",
      module: "Module 1",
      lessons: [
        { title: "Welcome Video", duration: "08:54", icon: Play },
        { title: "Should You Quit Your Job?", duration: "04:28", icon: Play },
        { title: "The Harsh Truths About Social Media Careers", duration: "08:51", icon: Play }
      ]
    },
    {
      id: 2,
      title: "Crafting Your Unique Voice",
      module: "Module 2",
      lessons: [
        { title: "Finding Your Content Niche", duration: "12:34", icon: Play },
        { title: "Developing Your Brand Voice", duration: "09:21", icon: Play },
        { title: "Storytelling Fundamentals", duration: "15:43", icon: Play },
        { title: "Audience Research Techniques", duration: "11:17", icon: Play }
      ]
    },
    {
      id: 3,
      title: "The Filmmaker Within",
      module: "Module 3",
      lessons: [
        { title: "Camera Basics and Setup", duration: "18:29", icon: Play },
        { title: "Lighting Techniques on Budget", duration: "14:56", icon: Play },
        { title: "Audio Recording Essentials", duration: "10:33", icon: Play },
        { title: "Composition and Framing", duration: "16:22", icon: Play },
        { title: "Mobile Filming Masterclass", duration: "20:15", icon: Play }
      ]
    },
    {
      id: 4,
      title: "The Video Editing Suite",
      module: "Module 4",
      lessons: [
        { title: "Editing Software Overview", duration: "13:45", icon: Play },
        { title: "Basic Cuts and Transitions", duration: "17:28", icon: Play },
        { title: "Color Grading Fundamentals", duration: "19:33", icon: Play },
        { title: "Audio Mixing and Enhancement", duration: "12:47", icon: Play },
        { title: "Advanced Editing Techniques", duration: "25:19", icon: Play }
      ]
    },
    {
      id: 5,
      title: "Decoding Analytics",
      module: "Module 5",
      lessons: [
        { title: "YouTube Analytics Dashboard", duration: "14:22", icon: Play },
        { title: "Understanding Your Audience", duration: "11:38", icon: Play },
        { title: "Performance Metrics That Matter", duration: "16:55", icon: Play },
        { title: "Using Data to Improve Content", duration: "13:41", icon: Play }
      ]
    },
    {
      id: 6,
      title: "Earning Money as a Content Creator",
      module: "Module 6",
      lessons: [
        { title: "Monetization Strategies Overview", duration: "18:47", icon: Play },
        { title: "Brand Partnerships and Sponsorships", duration: "22:15", icon: Play },
        { title: "Affiliate Marketing Mastery", duration: "15:29", icon: Play },
        { title: "Creating Your Own Products", duration: "19:58", icon: Play },
        { title: "Diversifying Revenue Streams", duration: "17:33", icon: Play }
      ]
    },
    {
      id: 7,
      title: "Road to a Million Followers",
      module: "Module 7",
      lessons: [
        { title: "Growth Hacking Strategies", duration: "21:44", icon: Play },
        { title: "Viral Content Framework", duration: "18:26", icon: Play },
        { title: "Community Building Techniques", duration: "16:39", icon: Play },
        { title: "Cross-Platform Growth", duration: "14:52", icon: Play },
        { title: "Scaling Your Content Empire", duration: "23:17", icon: Play }
      ]
    }
  ];

  const benefits = [
    { icon: Shield, text: "Single user license" },
    { icon: CreditCard, text: "Easy payment method" },
    { icon: BookOpen, text: "Full Access of Course Including any updates in future" },
    { icon: Clock, text: "Learn Anytime, Anywhere" },
    { icon: Calendar, text: "New chapters unlock every week" },
    { icon: Mail, text: "24/7 Instant Email Support" },
    { icon: Star, text: "Best Value Price" },
    { icon: Award, text: "Certificate of Course Completion" }
  ];

  const handleChapterClick = (chapterId) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  const getTotalDuration = (lessons) => {
    return lessons.reduce((total, lesson) => {
      const [minutes, seconds] = lesson.duration.split(':').map(Number);
      return total + minutes + (seconds / 60);
    }, 0);
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="bg-black/90 min-h-screen py-8 px-4 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-red-500">The YouTube Blueprint</span>{' '}
            <span className="text-white">Course Curriculum</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Curriculum Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {chapters.map((chapter, index) => (
                <div key={chapter.id} className="bg-black/50 border border-gray-700 rounded-lg overflow-hidden">
                  {/* Chapter Header */}
                  <div
                    className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => handleChapterClick(chapter.id)}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        {expandedChapter === chapter.id ? (
                          <ChevronDown className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">
                          Chapter {chapter.id} - {chapter.title}
                        </h3>
                      </div>
                    </div>
                    <div className="bg-black/50 px-3 py-1 rounded-full">
                      <span className="text-gray-300 text-xs sm:text-sm font-medium">
                        {chapter.module}
                      </span>
                    </div>
                  </div>

                  {/* Chapter Content */}
                  {expandedChapter === chapter.id && (
                    <div className="border-t border-gray-700">
                      <div className="p-4 sm:p-6 space-y-3">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between py-2 hover:bg-gray-800 rounded px-3 transition-colors duration-200 cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <Play className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                              <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-200">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-gray-500 text-sm font-mono">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                        <div className="pt-2 border-t border-gray-700">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">
                              {chapter.lessons.length} lessons
                            </span>
                            <span className="text-gray-400">
                              Total: {formatDuration(getTotalDuration(chapter.lessons))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Course Info Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Course Card */}
              <div className="bg-black/50 border border-gray-700 rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428471_Image%20(47).png"
                    alt="The YouTube Blueprint"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* <h3 className="text-white font-bold text-lg mb-1">The YouTube Blueprint</h3>
                    <p className="text-gray-300 text-sm">Make Content Creation Your Career in 2024</p> */}
                  </div>
                </div>
                
                <div className="p-6">
                  <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-4">
                    Join Now
                  </button>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>7 Chapters</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>7.5 Hours of video content</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What you will get */}
              <div className="bg-black/50 border border-gray-700 rounded-lg p-6">
                <h4 className="text-white font-semibold text-lg mb-4">What you will get:</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              {/* <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-600/30 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">10,000+</div>
                  <div className="text-gray-300 text-sm">Students Enrolled</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-red-600/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">4.9</div>
                    <div className="text-gray-300 text-xs">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">98%</div>
                    <div className="text-gray-300 text-xs">Completion Rate</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculumSection;