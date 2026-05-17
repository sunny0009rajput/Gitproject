

import React from "react";
import {
  HandCoins,
  Users,
  Clock,
  Award,
} from "lucide-react";

import ScrollTriggeredCountUp from "./ScrollTriggredCountUp";

function StatSection() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Subscriber */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp
                  end={5200}
                  duration={3000}
                  suffix="+"
                />
              </div>

              <div className="text-gray-700 font-medium">
                Subscriber
              </div>
            </div>

            {/* Experience */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HandCoins className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp
                  end={5}
                  duration={3000}
                  suffix="+"
                />
              </div>

              <div className="text-gray-700 font-medium">
                Experience
              </div>
            </div>

            {/* Available Service */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp
                  end={24}
                  duration={3000}
                  suffix="/7"
                />
              </div>

              <div className="text-gray-700 font-medium">
                Available Service
              </div>
            </div>

            {/* Expert Developer */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                <ScrollTriggeredCountUp
                  end={10}
                  duration={3000}
                  suffix="+"
                />
              </div>

              <div className="text-gray-700 font-medium">
                Expert Developer
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default StatSection;