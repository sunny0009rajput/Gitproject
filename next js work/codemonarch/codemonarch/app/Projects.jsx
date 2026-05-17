"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Globe,
  ShoppingCart,
  GraduationCap,
  Camera,
  Box,
  Smartphone,Play,
} from "lucide-react";
import Link from "next/link";


export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "food", label: "Food Delivery" },
    { id: "portfolio", label: "Portfolio" },
    { id: "education", label: "Education" },
    { id: "3d", label: "3D Website" },
    { id: "photography", label: "Photography" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Website",
      category: "ecommerce",
      video:
        "https://www.youtube.com/embed/CIJ3t9FKbuo",
      description:
        "Powerful online shopping platform with secure payments, cart system, and responsive design.",
      
    },

    {
      id: 2,
      title: "Food Delivery App",
      category: "food",
      video:
        "https://www.youtube.com/embed/dUu6tHlD_G4",
      description:
        "Swiggy & Zomato style food ordering app with live tracking and delivery system.",
      
    },

    {
      id: 3,
      title: "Personal Portfolio Website",
      category: "portfolio",
      video:
        "https://www.youtube.com/embed/Lx57tpmFWbU",
      description:
        "Beautiful personal portfolio to showcase skills, projects, and achievements professionally.",
      
    },

    {
      id: 4,
      title: "Education Platform",
      category: "portfolio",
      video:
        "https://www.youtube.com/embed/3RxZz2LijDI",
      description:
        "Modern learning management system with courses, student dashboard, and live classes.",
      
    },

    {
      id: 5,
      title: "3D Interactive Website",
      category: "3d",
      video:
        "https://www.youtube.com/embed/AwTH2-6Cosk",
      description:
        "Immersive 3D website experience using animations and interactive visuals.",
      
    },

    {
      id: 6,
      title: "Photography Website",
      category: "education",
      video:
        "https://www.youtube.com/embed/nSFg-ad8JPc",
      description:
        "Premium photography portfolio with gallery showcase and booking system.",
      
    },
    {
      id: 7,
      title: "Construction Website",
      category: "construction",
      video:
        "https://www.youtube.com/embed/UMnCyiA5aJo",
      description:
        "Premium construction website with project showcase and contact system.",
      
    },
    {
      id: 8,
      title: "3D animation Website",
      category: "3d",
      video:
        "https://www.youtube.com/embed/BVzQTshnaKg",
      description:
        "Premium 3D animation website with project showcase and contact system.",
      
    },
    {
      id: 9,
      title: "Portfolio Website",
      category: "portfolio",
      video:
        "https://www.youtube.com/embed/3uZ-OHA54GY",
      description:
        "Premium 3D animation website with project showcase and contact system.",
      
    },

  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Project
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

      {/* Filter Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-red-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      

      {/* Projects Grid */}
      <div className="bg-white mb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
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
                        Build Your Website Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 text-white overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready To Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-700">
              Dream Project?
            </span>
          </h2>

          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            We create high-quality websites and mobile apps
            designed to grow your business and attract more customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <a
              href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book a Free Call
            </a>

            <Link
              href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Grow Your Business Online
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}