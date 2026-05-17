"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

function TestimonalSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    name: "Arjun Mehta",
    text: "Got it 🚀 delivered my e-commerce site faster than expected. The checkout process is smooth, and my customers love the clean design!",
    rating: 5,
    image:
      "profile1.jpg",
  },
  {
    name: "Priya Sharma",
    text: "Super impressed with the mobile app they built for my clothing brand. Sleek, modern, and easy to manage. Highly recommend their services!",
    rating: 5,
    image:
      "profile2.jpg",
  },
  {
    name: "Rohit Khanna",
    text: "We launched our cab booking platform with Got it 🚀 and it works flawlessly. Real-time tracking and payments are smooth. Customers are happy!",
    rating: 5,
    image:
      "profile5.jpg",
  },
  {
    name: "Ananya Verma",
    text: "The portfolio website they created for me is beautiful. I’ve landed multiple freelance projects just because of how professional it looks.",
    rating: 5,
    image:
      "profile4.jpg",
  },
  {
    name: "Karan Patel",
    text: "Got it 🚀 team helped me take my food delivery startup from idea to reality in weeks. The app is stable, fast, and user-friendly.",
    rating: 5,
    image:
      "profile3.jpg",
  },
  {
    name: "Sneha Reddy",
    text: "I was nervous about building an e-commerce store, but Got it 🚀 made it easy. Now I manage my fashion store with zero tech stress!",
    rating: 5,
    image:
      "profile6.jpg",
  },
  {
    name: "Amit Singh",
    text: "My real estate website now looks modern and works like magic. Property listings are easy to add, and inquiries have doubled!",
    rating: 4,
    image:
      "profile5.jpg",
  },
  {
    name: "Divya Kapoor",
    text: "Absolutely love my personal portfolio site. Clients often mention how neat and professional it looks before hiring me.",
    rating: 5,
    image:
      "profile4.jpg",
  },
];

  // Duplicate array for infinite loop
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
      <section id="Review" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
              What Our Members Say
            </h2>
          </div>

          {/* Slider */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 370}px)`,
              }}
            >
              {loopTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[350px] flex-shrink-0"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-lg h-full">

                    {/* User Info */}
                    <div className="flex items-center mb-6">
                      <div className="relative flex-shrink-0">
  <Image
    src={
      testimonial.image && testimonial.image.startsWith("/")
        ? testimonial.image
        : `/${testimonial.image}`
    }
    alt={testimonial.name}
    width={48}
    height={48}
    className="rounded-full object-cover"
  />
</div>

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

                    {/* Testimonial */}
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TestimonalSection;