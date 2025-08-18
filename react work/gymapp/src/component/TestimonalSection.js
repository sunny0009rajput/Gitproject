import React, { use } from 'react';
import {useState,useEffect} from 'react';
import {
  Star,

} from "lucide-react";

function TestimonalSection() {
    const [isVisible, setIsVisible] =useState({});

    useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setIsVisible((prev) => ({
                ...prev,
                [section.id]: true,
            }));
            }
        else {
            setIsVisible((prev) => ({
                ...prev,
                [section.id]: false,
            }));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);


    const testimonials = [
    {
      name: "Jessica Martinez",
      text: "Amazing gym! The trainers are incredibly knowledgeable and the equipment is top-notch. I've seen incredible results in just 3 months!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b668?w=100&h=100&fit=crop&auto=format&q=80",
    },
    {
      name: "Robert Thompson",
      text: "Best investment I've made for my health. The community here is supportive and motivating. Highly recommend!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format&q=80",
    },
    {
      name: "Emily Davis",
      text: "Clean facilities, friendly staff, and excellent group classes. This gym has everything you need to reach your fitness goals!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format&q=80",
    },
  ];


  return (
    <div className="bg-black text-white overflow-x-hidden">
        <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.testimonials
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Members Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonalSection