import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Dumbbell,
  Users,
  ChevronRight,
  Target,
  Heart,
} from "lucide-react";

function ProgramSection() {
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




  


    const programs = [
    {
      title: "Strength Training",
      description:
        "Build muscle and increase power with our comprehensive strength training programs",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Cardio Fitness",
      description:
        "Improve your cardiovascular health with high-energy cardio workouts",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <Heart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Group Classes",
      description:
        "Join our energetic group classes for motivation and community support",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Personal Training",
      description:
        "Get personalized attention with our certified personal trainers",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
  ];


  return (
    <div className="bg-black text-white overflow-x-hidden">
        <section id="programs" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.programs
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Programs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our diverse range of fitness programs designed to help
              you achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden hover:from-gray-800 hover:to-gray-900 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {program.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <button className="flex items-center text-red-500 hover:text-orange-500 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramSection