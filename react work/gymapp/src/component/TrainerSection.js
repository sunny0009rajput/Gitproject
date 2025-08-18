import React from 'react';
import {  Dumbbell,
} from "lucide-react";
import { useState, useEffect } from 'react';


function TrainerSection() {
  const [isVisible, setIsVisible] = useState({});

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
        } else {
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


    const trainers = [
    {
      name: "Mike Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 Years",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51cd?w=300&h=400&fit=crop&auto=format&q=80",
      certifications: ["NASM", "CSCS"],
    },
    {
      name: "Sarah Williams",
      specialty: "Yoga & Flexibility",
      experience: "6 Years",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0b6ce0ff1b0?w=300&h=400&fit=crop&auto=format&q=80",
      certifications: ["RYT-500", "ACSM"],
    },
    {
      name: "David Chen",
      specialty: "HIIT & CrossFit",
      experience: "10 Years",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&auto=format&q=80",
      certifications: ["CF-L3", "NSCA"],
    },
  ];


  return (
    <div className="bg-black text-white overflow-x-hidden">
        <section
        id="trainers"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.trainers
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Expert Trainers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Train with certified professionals who are passionate about
              helping you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-red-500 font-semibold mb-2">
                    {trainer.specialty}
                  </p>
                  <p className="text-gray-400 mb-4">
                    {trainer.experience} Experience
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-400 text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainerSection