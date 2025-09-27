import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Will Dhruv Rathee teach the class himself?",
      answer: "Yes, Dhruv Rathee personally teaches all the core modules of this course. You'll get direct insights from his years of experience in content creation, media production, and building successful YouTube channels. Some specialized sessions may include guest experts from the industry."
    },
    {
      id: 2,
      question: "What is the time validity of this course?",
      answer: "Once you purchase the course, you get lifetime access to all the content. This includes any future updates, additional modules, or bonus materials that may be added. There's no expiration date - you can learn at your own pace and revisit the content whenever you need to."
    },
    {
      id: 3,
      question: "Will I get a certificate, as proof of my learning?",
      answer: "Absolutely! Upon successful completion of all course modules and assignments, you will receive a signed digital certificate from Dhruv Rathee Academy. This certificate validates your skills in YouTube content creation and can be shared on your professional profiles like LinkedIn."
    },
    {
      id: 4,
      question: "Which language is this course taught in?",
      answer: "The course is primarily taught in English with clear explanations and examples. Some concepts may also be explained in Hindi where it helps with better understanding. All course materials, worksheets, and resources are provided in English to ensure global accessibility."
    },
    {
      id: 5,
      question: "I am facing problems with payment processing when buying this course, what should I do?",
      answer: "If you're experiencing payment issues, please try the following steps: 1) Clear your browser cache and cookies, 2) Try using a different payment method or card, 3) Ensure your card has international transactions enabled, 4) Contact our support team at support@dhruvratheacademy.com with your order details, and we'll resolve the issue within 24 hours."
    }
  ];

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="bg-black/90 min-h-screen py-12 px-4 sm:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            Get answers to the most common questions about our course
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors duration-200"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white font-medium text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 transform transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-500 transform transition-all duration-200" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              {expandedFAQ === faq.id && (
                <div className="border-t border-gray-700 animate-in slide-in-from-top duration-200">
                  <div className="p-4 sm:p-6 pt-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you with any questions about the course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Contact Support
              </button>
              <button className="bg-transparent border border-gray-600 hover:border-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                View Course Details
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">&lt; 1hr</div>
              <div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: slide-in-from-top 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FAQSection;