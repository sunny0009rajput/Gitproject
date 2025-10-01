import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Home,
  TrendingUp,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    { icon: Home, number: "2,500+", label: "Properties Sold" },
    { icon: Users, number: "1,000+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: TrendingUp, number: "$500M+", label: "Total Sales" },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description:
        "With over 15 years in real estate, Sarah leads our team with passion and expertise.",
    },
    {
      name: "Michael Chen",
      role: "Senior Broker",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Michael specializes in luxury properties and commercial real estate transactions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description:
        "Emily ensures our properties get maximum exposure through innovative marketing strategies.",
    },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Vision",
      description:
        "To be a leading force in the construction industry by setting new benchmarks in quality, innovation, and sustainability—building spaces that shape a better future.",
    },
    {
      icon: Users,
      title: "Mission",
      description:
        "To deliver high-quality construction solutions using advanced technology and skilled craftsmanship—guided by integrity, safety, and a commitment to client satisfaction.",
    },
    {
      icon: Star,
      title: "Goal",
      description:
        "To consistently exceed client expectations, grow through strategic partnerships, and contribute to the development of smart, durable, and aesthetically inspiring infrastructure.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We leverage the latest technology and market insights to give you a competitive advantage.",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Sigma Builder Founded",
      description:
        "Started with a mission to provide expert real estate consultation and exceptional property solutions.",
    },
    {
      year: "2022",
      title: "First Residential Project",
      description:
        "Successfully completed our first residential property project, setting a benchmark for quality and design.",
    },
    {
      year: "2024",
      title: "Commercial Consultation Services",
      description:
        "Expanded services to include commercial property consultation and investment advisory.",
    },
    {
      year: "2024",
      title: "Regional Expansion",
      description:
        "Opened new offices across multiple cities to better serve our growing clientele.",
    },
    {
      year: "2025",
      title: "Digital Consultation Platform",
      description:
        "Launched an online platform to provide seamless virtual property consultation and market insights.",
    },
  ];

  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-62 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto mb-8">
              "Expert real estate consultation to guide you through buying,
              selling, investing, and managing your property with confidence."
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Our Story Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Story
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Founded in 2025, Premier Realty was established with a clear
                    mission: to transform the real estate experience through
                    expert consultation and client-first guidance. What began as
                    a small team of dedicated advisors has quickly grown into
                    one of the most trusted real estate consultation firms in
                    the region.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We navigate the ever-changing market with insight and
                    innovation, ensuring our clients make informed decisions.
                    Our success isn’t just measured in transactions, but in the
                    lasting relationships we build and the property goals we
                    help achieve
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop"
                    alt="Real estate office"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we
                serve our clients every single day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our company and defined our commitment
              to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Team
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are dedicated to making your real
                estate journey smooth and successful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative inline-block mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden py-20">
        {/* Decorative Blurs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Dream Home?
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              "At Sigma Builder, your real estate journey is our mission. Whether you're buying, selling, or investing, our seasoned professionals provide expert guidance, strategic insight, and unwavering support—every step of the way."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              {/* Contact Us → WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=917090948664&text=Hi Sigma Builder, I need consultation for a construction project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sigma Builder on WhatsApp"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Get Started Today
              </a>

              {/* View Portfolio → Home page */}
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Portfolio
              </Link>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 text-sm opacity-75">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@premierrealty.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Downtown Business District</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
