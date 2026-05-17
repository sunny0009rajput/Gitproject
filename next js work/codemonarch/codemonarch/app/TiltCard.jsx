"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ChevronRight } from "lucide-react";

export default function CardList() {
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

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      title: "Responsive Website",
      image: "/responsive.jpeg",
      reverse: false,
      description: "",
      features: [
        "✓ Mobile Friendly Design",
        "✓ Tablet Responsive Layout",
        "✓ Desktop Optimized UI",
        "✓ Fast Loading Speed",
      ],
    },

    {
      title: "Google Analytics Integration",
      image: "/googleanalytics.jpeg",
      reverse: true,
      description: "",
      features: [
        "✓ Visitor Tracking",
        "✓ Real-Time Website Analytics",
        "✓ User Behavior Insights",
        "✓ Traffic Source Monitoring",
      ],
    },

    {
      title: "Google Search Console Integration",
      image: "/googlesearchconsole.jpeg",
      reverse: false,
      description: "",
      features: [
        "✓ Website Index Monitoring",
        "✓ Keyword Performance Tracking",
        "✓ SEO Error Detection",
        "✓ Search Visibility Reports",
      ],
    },

    {
      title: "Google Business Profile Setup",
      image: "/googlebusiness.jpeg",
      reverse: true,
      description: "",
      features: [
        "✓ Business Profile Optimization",
        "✓ Google Maps Visibility",
        "✓ Customer Review Management",
        "✓ Local SEO Enhancement",
      ],
    },

    {
      title: "WhatsApp Chat Widget Integration",
      image: "/whatsappintegration.png",
      reverse: false,
      description: "",
      features: [
        "✓ Instant Customer Support",
        "✓ One Click WhatsApp Chat",
        "✓ Mobile Friendly Chat Widget",
        "✓ Direct Lead Generation",
      ],
    },

    {
      title: "Google Maps Integration",
      image: "/googlemaps.jpeg",
      reverse: true,
      description: "",
      features: [
        "✓ Interactive Location Map",
        "✓ Business Address Display",
        "✓ Navigation Support",
        "✓ Mobile Friendly Map Access",
      ],
    },

    {
      title: "Email / SMS Notification System",
      image: "/emailsms.jpeg",
      reverse: false,
      description: "",
      features: [
        "✓ Instant Email Notifications",
        "✓ SMS Alert System",
        "✓ Order & Booking Updates",
        "✓ Automated Customer Messages",
      ],
    },

    {
      title: "SEO Optimization",
      image: "/seoimage.jpeg",
      reverse: true,
      description: "",
      features: [
        "✓ Search Engine Friendly Website",
        "✓ Faster Google Ranking",
        "✓ Optimized Meta Tags",
        "✓ Organic Traffic Growth",
      ],
    },

    {
      title: "Performance Optimization",
      image: "/performance.jpeg",
      reverse: false,
      description: "",
      features: [
        "✓ Faster Website Loading",
        "✓ Optimized Images & Assets",
        "✓ Smooth User Experience",
        "✓ Improved Core Web Vitals",
      ],
    },

    {
      title: "Custom Feature Development",
      image: "/customcode.jpeg",
      reverse: true,
      description: "",
      features: [
        "✓ Fully Custom Functionality",
        "✓ Scalable Development",
        "✓ Business Specific Features",
        "✓ Advanced Admin Controls",
      ],
    },
  ];

  return (
    <>
      <section id="Services" className="bg-white text-black overflow-x-hidden">
        <div className="relative bg-white overflow-hidden">
        <div className="text-center mt-10 mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Services
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

        

        
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10 ${
              card.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-[500px]">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                perspective={900}
                scale={1.02}
                className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </Tilt>
            </div>

            {/* Text Section */}
            <div className="max-w-md text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {card.title}
              </h2>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Features */}
              <div className="rounded-2xl p-5 shadow-md mb-6">
                <h3 className="text-lg font-bold mb-4 text-black">
                  Features Included
                </h3>

                <ul className="space-y-3">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-800"
                    >
                      <span className="text-green-500 text-lg font-bold">
                        ✓
                      </span>

                      <span>{feature.replace("✓ ", "")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <a
                href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with CodeMonarch on WhatsApp"
                className="inline-flex items-center space-x-2 group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span>Book Free Consultation</span>

                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
