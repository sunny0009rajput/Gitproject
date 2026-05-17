"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroServices() {
  const [hoveredProject, setHoveredProject] =
    useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      video:
        "https://www.youtube.com/embed/CIJ3t9FKbuo",
      description:
        "Modern e-commerce platform with secure payment gateway, product management, shopping cart, and mobile responsive design.",
    },

    {
      id: 2,
      title: "Food Delivery App",
      video:
        "https://www.youtube.com/embed/CIJ3t9FKbuo",
      description:
        "Complete food delivery solution with customer app, delivery partner panel, restaurant dashboard, and live order tracking.",
    },


  ];

  return (
    <div className="min-h-screen bg-white pt-2">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Ecommerse
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We build high-performance websites,
            mobile apps, e-commerce platforms,
            portfolio websites, 3D animated
            experiences, and business solutions
            designed to grow your brand online.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white mb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() =>
                  setHoveredProject(project.id)
                }
                onMouseLeave={() =>
                  setHoveredProject(null)
                }
              >
                {/* Video Section */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={project.video}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Play Icon */}
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full text-center">
                      Responsive Design
                    </div>

                    <div className="bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full text-center">
                      Modern UI/UX
                    </div>

                    <div className="bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full text-center">
                      SEO Friendly
                    </div>

                    <div className="bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full text-center">
                      Fast Performance
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-4">
                    <a
                      href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                      className="block w-full"
                    >
                      <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Know More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4 sm:px-0">
        <Link
          href="/projects"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg group"
        >
          Explore Projects

          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}