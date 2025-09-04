import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

function TestimonalSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    name: "Arjun Mehta",
    text: "Got it 🚀 delivered my e-commerce site faster than expected. The checkout process is smooth, and my customers love the clean design!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    text: "Super impressed with the mobile app they built for my clothing brand. Sleek, modern, and easy to manage. Highly recommend their services!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rohit Khanna",
    text: "We launched our cab booking platform with Got it 🚀 and it works flawlessly. Real-time tracking and payments are smooth. Customers are happy!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Ananya Verma",
    text: "The portfolio website they created for me is beautiful. I’ve landed multiple freelance projects just because of how professional it looks.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Karan Patel",
    text: "Got it 🚀 team helped me take my food delivery startup from idea to reality in weeks. The app is stable, fast, and user-friendly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Sneha Reddy",
    text: "I was nervous about building an e-commerce store, but Got it 🚀 made it easy. Now I manage my fashion store with zero tech stress!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Amit Singh",
    text: "My real estate website now looks modern and works like magic. Property listings are easy to add, and inquiries have doubled!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Divya Kapoor",
    text: "Absolutely love my personal portfolio site. Clients often mention how neat and professional it looks before hiring me.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    name: "Vikram Rao",
    text: "We wanted a Blinkit-style app and Got it 🚀 nailed it. Orders, tracking, vendor management – everything just works perfectly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Meera Joshi",
    text: "From consultation to delivery, the team was transparent and supportive. My portfolio site now truly represents my work.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Nikhil Malhotra",
    text: "Got it 🚀 delivered a food delivery app that’s even better than what I imagined. Customers find it simple and reliable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Pooja Nair",
    text: "The mobile app for my clothing business is fantastic! Customers love browsing collections, and sales have definitely gone up.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Sahil Gupta",
    text: "Our ride-hailing app works as smooth as Uber. The Got it 🚀 team really understands startups and scaling requirements.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Ritika Sen",
    text: "The creative portfolio website they built for me got so much attention from clients. Simple, elegant, and effective.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    name: "Aditya Choudhary",
    text: "Hands down the best decision for my startup! Their quick commerce app is powerful and helped us launch faster than competitors.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];


  // 👉 Duplicate array to create seamless loop
  const loopTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white text-black overflow-hidden">
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
              What Our Members Say
            </h2>
          </div>

          {/* Slider wrapper */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 370}px)`,
              }}
            >
              {loopTestimonials.map((testimonial, index) => (
                <div key={index} className="w-[350px] flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-lg h-full">
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
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex % testimonials.length
                    ? "bg-red-500"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default TestimonalSection;
