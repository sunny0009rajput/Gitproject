import React, { useState } from 'react';
import { Award, Download, Share2, Calendar, User, CheckCircle } from 'lucide-react';

const CreatorshipCertificate = () => {
  const [studentName, setStudentName] = useState("Sayantan Chandra");
  const [completionDate, setCompletionDate] = useState("March 15, 2024");

  const handleDownload = () => {
    // Simulate certificate download
    alert("Certificate download started!");
  };

  const handleShare = () => {
    // Simulate certificate sharing
    alert("Certificate shared successfully!");
  };

  return (
    <div className="bg-black/90 min-h-screen py-12 px-4 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Become Creatorship Certified
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto">
            Students who complete the course curriculum are awarded with a signed Creatorship certificate from Dhruv Rathee
          </p>
        </div>

        {/* Certificate Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Certificate */}
          <div className="bg-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            {/* Academy Logo */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">A</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium">DHRUV RATHEE</div>
                  <div className="text-xs sm:text-sm font-bold">ACADEMY</div>
                </div>
              </div>
            </div>

            {/* Main Certificate Content */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                {/* Certificate Title */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Proudly awarded to:
                  </h2>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-2">
                    {studentName}
                  </h3>
                </div>

                {/* Course Details */}
                <div className="mb-8 sm:mb-12">
                  <p className="text-white text-base sm:text-lg lg:text-xl">
                    for completing <span className="font-semibold">The YouTube Blueprint Course</span>
                  </p>
                </div>

                {/* Certificate Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-white text-xs sm:text-sm">
                  <div>
                    <div className="mb-1">THIS IS A DEMO</div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1">COMPLETION DATE</div>
                    <div className="font-medium">{completionDate}</div>
                  </div>
                </div>
              </div>

              {/* Certificate Seal */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end items-center">
                <div className="relative">
                  {/* Outer decorative circle */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-white border-opacity-30 flex items-center justify-center">
                    {/* Inner seal */}
                    <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border border-white border-opacity-50 flex items-center justify-center relative overflow-hidden">
                      {/* Seal background pattern */}
                      <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full"></div>
                      
                      {/* Center logo */}
                      <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-base lg:text-lg">A</span>
                      </div>
                      
                      {/* Decorative elements around the seal */}
                      <div className="absolute inset-2 rounded-full border border-white border-opacity-20"></div>
                      
                      {/* Small decorative dots */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
                      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* Decorative flourishes */}
                  <div className="absolute -top-2 -left-2 text-white opacity-30">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                      <path d="M8 0L9.5 5.5L15 4L10.5 8L15 12L9.5 10.5L8 16L6.5 10.5L1 12L5.5 8L1 4L6.5 5.5L8 0Z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 text-white opacity-30">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                      <path d="M8 0L9.5 5.5L15 4L10.5 8L15 12L9.5 10.5L8 16L6.5 10.5L1 12L5.5 8L1 4L6.5 5.5L8 0Z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -left-2 text-white opacity-30">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                      <path d="M8 0L9.5 5.5L15 4L10.5 8L15 12L9.5 10.5L8 16L6.5 10.5L1 12L5.5 8L1 4L6.5 5.5L8 0Z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-white opacity-30">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                      <path d="M8 0L9.5 5.5L15 4L10.5 8L15 12L9.5 10.5L8 16L6.5 10.5L1 12L5.5 8L1 4L6.5 5.5L8 0Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Actions */}
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"> */}
            {/* <button
              onClick={handleDownload}
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
              Download Certificate
            </button> */}
            {/* <button
              onClick={handleShare}
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 border border-red-500"
            >
              <Share2 className="w-5 h-5" />
              Share Achievement
            </button> */}
          {/* </div> */}
        </div>

        {/* Benefits Section */}
        {/* <div className="mt-16 sm:mt-24">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8"> */}
            {/* <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700">
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Official Recognition</h3>
              <p className="text-gray-400 text-sm">
                Receive an official certificate signed by Dhruv Rathee Academy
              </p>
            </div> */}
            
            {/* <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Skill Validation</h3>
              <p className="text-gray-400 text-sm">
                Prove your expertise in YouTube content creation and growth strategies
              </p>
            </div> */}
            
            {/* <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700">
              <User className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Career Boost</h3>
              <p className="text-gray-400 text-sm">
                Enhance your professional profile with industry-recognized certification
              </p>
            </div> */}
          {/* </div>
        </div> */}

        {/* Customization Demo */}
        {/* <div className="mt-16 sm:mt-24 max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 sm:p-8">
            <h3 className="text-white font-bold text-xl mb-6 text-center">
              Preview Your Certificate
            </h3>
            <div className="space-y-4"> */}
              {/* <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Student Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div> */}
              {/* <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Completion Date
                </label>
                <input
                  type="text"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div> */}
            {/* </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CreatorshipCertificate;