import React from 'react';
import {
  Dumbbell,
  Users,
  Clock,
  Award,
} from "lucide-react";

function StatSection() {


  return (
    <div className="bg-black text-white overflow-x-hidden">
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Happy Members",
                icon: <Users className="w-8 h-8" />,
              },
              {
                number: "50+",
                label: "Equipment",
                icon: <Dumbbell className="w-8 h-8" />,
              },
              {
                number: "24/7",
                label: "Open Hours",
                icon: <Clock className="w-8 h-8" />,
              },
              {
                number: "10+",
                label: "Expert Trainers",
                icon: <Award className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StatSection