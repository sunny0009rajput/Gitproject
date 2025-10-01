import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

export default function HeroInterior() {
 
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
 

      { id: 1, title: 'Raghav Pillai', category: 'interior', image: 'i101.png', description: 'Newly built residential colony with amenities.' },
      { id: 2, title: 'Tanya Menon', category: 'interior', image: 'i102.png', description: 'Corporate towers designed for modern offices.' },

  ];

  return (
    <div className="min-h-screen bg-white pt-5">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interior{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From layout planning to the final finishes, our interior works blend functionality with style. We deliver customized solutions for flooring, ceilings, lighting, cabinetry, and décor—designed to enhance comfort, optimize space, and reflect your unique taste.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className=" bg-white mb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Gallery */}
                <div className="relative h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 px-4 sm:px-0">
  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg group">
    <Link to="/projects">
    Explore Projects
    </Link>
    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
  </button>
</div>

    </div>
  );
}
