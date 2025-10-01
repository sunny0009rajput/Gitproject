import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Home,
  Users,
  Star,
  Filter,
  ChevronRight,
  Eye,
  Heart,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "renovation", label: "Renovation" },
    { id: "construction", label: "Construction" },
    { id: "interior", label: "Interior Works" },
  ];

  const projects = [
    {
      id: 1,
      title: "Aarav Sharma",
      category: "residential",
      image: "r100.png",
      description: "Modern home with spacious design and natural light.",
    },
    {
      id: 2,
      title: "Isha Verma",
      category: "residential",
      image: "r101.png",
      description: "State-of-the-art office space with urban connectivity.",
    },
    {
      id: 3,
      title: "Kabir Nair",
      category: "residential",
      image: "r102.png",
      description: "Exclusive luxury living with top-class amenities.",
    },
    {
      id: 4,
      title: "Meera Kapoor",
      category: "residential",
      image: "r103.png",
      description: "Stylish apartments with garden views and open layouts.",
    },
    {
      id: 5,
      title: "Rohan Mehta",
      category: "residential",
      image: "r104.png",
      description: "Elegant villas with private pools and outdoor lounges.",
    },

    {
      id: 7,
      title: "Arjun Patel",
      category: "commercial",
      image: "c101.png",
      description: "Peaceful homes with excellent neighborhood access.",
    },
    {
      id: 8,
      title: "Priya Reddy",
      category: "commercial",
      image: "c102.png",
      description: "Modern workspace designed for business efficiency.",
    },
    {
      id: 9,
      title: "Dev Malhotra",
      category: "commercial",
      image: "c103.png",
      description: "Luxury estate with panoramic city and sea views.",
    },
    {
      id: 10,
      title: "Ananya Gupta",
      category: "commercial",
      image: "c104.png",
      description: "Affordable apartments with modern amenities.",
    },
    {
      id: 11,
      title: "Aditya Joshi",
      category: "commercial",
      image: "c105.png",
      description: "Spacious villas for comfortable family living.",
    },

    {
      id: 13,
      title: "Vikram Desai",
      category: "renovation",
      image: "re101.png",
      description: "Family-friendly housing society with parks and shops.",
    },
    {
      id: 14,
      title: "Ritika Bansal",
      category: "renovation",
      image: "re102.png",
      description: "Premium office towers with easy metro access.",
    },
    {
      id: 15,
      title: "Arnav Choudhary",
      category: "renovation",
      image: "re103.png",
      description: "High-end living experience with private facilities.",
    },
    {
      id: 16,
      title: "Pooja Sethi",
      category: "renovation",
      image: "re104.png",
      description: "Compact city apartments with modern interiors.",
    },
    {
      id: 17,
      title: "Karan Saxena",
      category: "renovation",
      image: "re105.png",
      description: "Luxurious villas with landscaped gardens.",
    },

    {
      id: 19,
      title: "Yash Agarwal",
      category: "construction",
      image: "co101.png",
      description: "Affordable residential houses with all utilities.",
    },
    {
      id: 20,
      title: "Neha Bajaj",
      category: "construction",
      image: "co102.png",
      description: "Shopping and office spaces in prime areas.",
    },
    {
      id: 21,
      title: "Sahil Khanna",
      category: "construction",
      image: "co103.png",
      description: "Designer luxury homes with exclusive facilities.",
    },
    {
      id: 22,
      title: "Alia Khan",
      category: "construction",
      image: "co104.png",
      description: "Cozy apartments with great connectivity.",
    },

    {
      id: 25,
      title: "Raghav Pillai",
      category: "interior",
      image: "i101.png",
      description: "Newly built residential colony with amenities.",
    },
    {
      id: 26,
      title: "Tanya Menon",
      category: "interior",
      image: "i102.png",
      description: "Corporate towers designed for modern offices.",
    },
    {
      id: 27,
      title: "Mohit Raina",
      category: "interior",
      image: "i103.png",
      description: "Resort-style luxury residences with private pools.",
    },
    {
      id: 28,
      title: "Sneha Dutta",
      category: "interior",
      image: "i104.png",
      description: "Compact and affordable city studio apartments.",
    },
    {
      id: 29,
      title: "Varun Kapoor",
      category: "interior",
      image: "i105.png",
      description: "Countryside villas surrounded by greenery.",
    },
    {
      id: 30,
      title: "Diya Mukherjee",
      category: "interior",
      image: "i106.png",
      description: "Plots in prime locations ready for development.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Sold Out":
        return "bg-red-100 text-red-800";
      case "Few Available":
        return "bg-yellow-100 text-yellow-800";
      case "Pre-Launch":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-50 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Explore our portfolio to see how we’ve turned blueprints into
              landmark spaces
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 bg-gradient-to-r from-white to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            {/* <div className="flex items-center mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-lg font-semibold text-gray-800">Filter Projects</span>
            </div> */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* <div className="text-center">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredProjects.length}</span> projects
            </p>
          </div> */}
        </div>
      </div>

      {/* Projects Grid */}
      <div className=" bg-white mb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
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

                  {/* Status Badge */}
                  {/* <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div> */}

                  {/* Action Buttons */}
                  {/* <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Share2 className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                    </button>
                  </div> */}

                  {/* Price Tag */}
                  {/* <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-lg font-bold text-gray-900">{project.price}</span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {/* <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div> */}
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Property Details */}
                  {/* <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="text-center">
                      <Home className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Bedrooms</div>
                      <div className="font-semibold text-gray-900">{project.bedrooms}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Bathrooms</div>
                      <div className="font-semibold text-gray-900">{project.bathrooms}</div>
                    </div>
                    <div className="text-center">
                      <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Size</div>
                      <div className="font-semibold text-gray-900 text-xs">{project.size}</div>
                    </div>
                  </div> */}

                  {/* Features */}
                  {/* <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Completion Info */}
                  {/* <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Completed: {project.completed}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="w-4 h-4 mr-2" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="mt-4">
                    <a
                      href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Simga Builder, Need Consultation for construction project."
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Sigma Builder on WhatsApp"
                      className="block w-full"
                    >
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
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

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Dream Property?
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio to see how we’ve turned blueprints into
              landmark spaces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Contact Us → WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Sigma Builder, I need consultation for a construction project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sigma Builder on WhatsApp"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Contact Us
              </a>

              {/* View Portfolio → Home page */}
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
