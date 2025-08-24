import React from 'react';
import {
  Dumbbell,
  Users,
  Clock,
  Award,
} from "lucide-react";
import ScrollTriggeredCountUp from './ScrollTriggeredCountUp'; // Assuming you have this component for count up effect

function StatSection() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Happy Members */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp end={500} duration={3000} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium">Happy Members</div>
            </div>

            {/* Equipment */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp end={50} duration={3000} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium">Equipment</div>
            </div>

            {/* Open Hours */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp end={24} duration={3000} suffix="/7" />
              </div>
              <div className="text-gray-400 font-medium">Open Hours</div>
            </div>

            {/* Expert Trainers */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp end={10} duration={3000} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium">Expert Trainers</div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default StatSection;
