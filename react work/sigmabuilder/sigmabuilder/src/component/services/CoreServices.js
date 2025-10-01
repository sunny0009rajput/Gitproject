import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const CoreServices = () => {
  const courses = [
    {
      id: 1,
      category: "Architecture Design",
      title: "Architecture Design Services",
      description:
        "We believe every great building starts with a great design. Our expert architects blend functionality with aesthetics to create innovative blueprints tailored to your needs and aspirations",
      features: [
        "Conceptual & 3D Design",
        "Site Planning & Analysis",
        "Building Code Compliance",
        "Sustainable Design Solutions",
      ],
      image: "a1.png",

      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    },
    {
      id: 2,
      category: "Residential",
      title: "Residential Construction",
      description:
        "We specialize in building homes that reflect your lifestyle. Whether it’s a luxury villa, duplex, or an eco-friendly home, we ensure top-tier craftsmanship and timely delivery.",
      features: [
        "Custom Floor Plans",
        "Vastu-Compliant Design",
        "Turnkey House Construction",
        "Quality Material Assurance",
      ],
      image: "s2.png",

      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    },
    {
      id: 3,
      category: "Commercial",
      title: "Commercial Construction",
      description:
        "From retail spaces to office buildings, we create commercial properties that are functional, scalable, and built to impress. We understand the dynamics of commercial utility and ROI-driven construction.",
      features: [
        "Structural Planning & MEP Services",
        "Commercial Complexes",
        "Retail & Office Space",
        "Industrial Sheds & Warehouses",
      ],
      image: "s3.png",

      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    },
    {
      id: 4,
      category: "Renovation",
      title: "Renovation Services",
      description:
        "Revitalize your property with our expert renovation services. From structural upgrades to complete overhauls, we transform outdated spaces into modern marvels.",
      features: [
        "Structural Strengthening",
        "Home & Office Renovation",
        "Bathroom/ Kitchen Remodeling",
        "Space Optimization Solutions",
      ],
      image: "s4.png",

      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    },
    {
      id: 5,
      category: "Interior",
      title: "Interior Design",
      description:
        "Transform your interiors into a masterpiece. Our designers blend creativity with functionality to craft spaces that resonate with your personality and needs.",
      features: [
        "Theme-Based Interior Concepts",
        "Lighting & Furniture Planning",
        "Modular Kitchens & Wardrobes",
        "Living Room Styling",
      ],
      image: "s5.png",

      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">COURSES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            BECOME SKILLED AT WHAT MATTERS
          </h2>
        </div> */}

        {/* Courses Grid */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative rounded-3xl overflow-hidden ${course.bgColor} backdrop-blur-sm`}
            >
              {/* Background Gradient Overlay */}
              {/* <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-10`}></div> */}

              <div
                className={`relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content Side */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  {/* Category Badge */}
                  <div className="inline-block">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90 text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Simga Builder, Need Consultation for construction project."
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Sigma Builder on WhatsApp"
                    >
                      <button className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                        <span>GET STARTED</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative group">
                    {/* Main Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-contain rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
