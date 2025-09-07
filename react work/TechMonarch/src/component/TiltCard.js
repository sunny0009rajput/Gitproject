import React from "react";
import Tilt from "react-parallax-tilt";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
          handleScroll(); // Initial check on mount
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);


  return (
    <>
    <div id="Services" className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-[500px]">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          perspective={900}
          scale={1.02}
          className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
        >
          <img
            src="4.webp"
            alt="Card"
            className="w-[300px] md:w-[380px] h-full object-contain"
          />
        </Tilt>
      </div>

      {/* Text Section */}
      <div className="max-w-md text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          On-Demand Food Delivery App & Website
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Build your food delivery platform just like Swiggy & Zomato. With real-time order tracking, restaurant management, and delivery partner apps, our solution helps you start your own on-demand food delivery business instantly.
        </p>

        {/* ✅ Tick List */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for customer</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for Seller/Delivery boy</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Master Admin</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Website</li>
        </ul>

        <button  aria-label="Chat with CodeMonarch on WhatsApp" className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
          <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"  aria-label="Chat with CodeMonarch on WhatsApp"
        rel="noopener noreferrer" className="flex content-center align-middle space-x-2">
              <span>Book Free Consultation</span>
          <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
          
        </button>
      </div>
    </div>
   
   

    {/* new section 2*/}
<div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
  {/* Image Section */}
  <div className="flex-shrink-0 w-full md:w-[500px] order-1 md:order-2">
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      perspective={900}
      scale={1.02}
      className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
    >
      <img
        src="3.webp"
        alt="Card"
        className="w-[300px] md:w-[380px] h-full object-contain"
      />
    </Tilt>
  </div>

  {/* Text Section */}
  <div className="max-w-md text-left order-2 md:order-1">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Custom Clothing & Fashion E-Commerce Platform
    </h2>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
      Give your fashion brand a digital edge with a sleek online store. Showcase your collections beautifully, offer personalized shopping experiences, and boost sales with an e-commerce site tailored for clothing and lifestyle businesses.
    </p>

    {/* ✅ Tick List */}
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for customer</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for Seller/Delivery boy</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Master Admin</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Website</li>
    </ul>

    <button  aria-label="Chat with CodeMonarch on WhatsApp" className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
          <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
         aria-label="Chat with CodeMonarch on WhatsApp"
        rel="noopener noreferrer" className="flex content-center align-middle space-x-2">
              <span>Book Free Consultation</span>
          <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
          
        </button>
  </div>
</div>



<div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-[500px]">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          perspective={900}
          scale={1.02}
          className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
        >
          <img
            src="2.webp"
            alt="Card"
            className="w-[300px] md:w-[380px] h-full object-contain"
          />
        </Tilt>
      </div>

      {/* Text Section */}
      <div className="max-w-md text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ride-Hailing & Cab Booking App
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Launch your own Uber-like ride-hailing app with customer, driver, and admin panels. From real-time ride tracking to secure payments, our solution is built to scale for taxi startups and transport businesses.
        </p>

        {/* ✅ Tick List */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for customer</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for Seller/Delivery boy</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Master Admin</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Website</li>
        </ul>

        <button  aria-label="Chat with CodeMonarch on WhatsApp" className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
          <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
         aria-label="Chat with CodeMonarch on WhatsApp"
        rel="noopener noreferrer" className="flex content-center align-middle space-x-2">
              <span>Book Free Consultation</span>
          <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
          
        </button>
      </div>
    </div>

      {/* new section 2*/}
<div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
  {/* Image Section */}
  <div className="flex-shrink-0 w-full md:w-[500px] order-1 md:order-2">
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      perspective={900}
      scale={1.02}
      className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
    >
      <img
        src="71.webp"
        alt="Card"
        className="w-[300px] md:w-[380px] h-full object-contain"
      />
    </Tilt>
  </div>

  {/* Text Section */}
  <div className="max-w-md text-left order-2 md:order-1">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
     Scalable E-Commerce Store & Website
    </h2>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
     Launch your own modern online store to sell products with ease. From seamless product management to secure checkout and payment gateways, our solution empowers you to run a powerful e-commerce platform like Amazon or Flipkart.
    </p>

    {/* ✅ Tick List */}
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for customer</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for Seller/Delivery boy</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Master Admin</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Website</li>
    </ul>

    <button  aria-label="Chat with CodeMonarch on WhatsApp" className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
          <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
         aria-label="Chat with CodeMonarch on WhatsApp"
        rel="noopener noreferrer" className="flex content-center align-middle space-x-2">
              <span>Book Free Consultation</span>
          <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
          
        </button>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-[500px]">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          perspective={900}
          scale={1.02}
          className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
        >
          <img
            src="5.webp"
            alt="Card"
            className="w-[300px] md:w-[380px] h-full object-contain"
          />
        </Tilt>
      </div>

      {/* Text Section */}
      <div className="max-w-md text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Professional Personal Portfolio Website
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Stand out online with a stylish personal portfolio. Showcase your work, skills, and achievements with a professional website that helps you attract clients, employers, and opportunities.
        </p>

        {/* ✅ Tick List */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for customer</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for Seller/Delivery boy</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Master Admin</li>
          <li className="flex items-center gap-2 text-gray-800">✓ Website</li>
        </ul>

        <button  aria-label="Chat with CodeMonarch on WhatsApp" className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
          <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
         aria-label="Chat with CodeMonarch on WhatsApp"
        rel="noopener noreferrer" className="flex content-center align-middle space-x-2">
              <span>Book Free Consultation</span>
          <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
          
        </button>
      </div>
    </div>

      {/* new section 2*/}
<div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
  {/* Image Section */}
  <div className="flex-shrink-0 w-full md:w-[500px] order-1 md:order-2">
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      perspective={900}
      scale={1.02}
      className="bg-white rounded-xl border border-black shadow-xl w-full h-[370px] overflow-hidden flex items-center justify-center"
    >
      <img
        src="6.webp"
        alt="Card"
        className="w-[300px] md:w-[380px] h-full object-contain"
      />
    </Tilt>
  </div>

  {/* Text Section */}
  <div className="max-w-md text-left order-2 md:order-1">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Real Estate Website & Property Listing App
    </h2>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
      Build a property listing platform for real estate agents and buyers. Showcase properties with photos, videos, and location maps while integrating easy inquiry and booking systems to make real estate transactions smoother
    </p>

    {/* ✅ Tick List */}
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for customer</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Android and IOS app for Seller/Delivery boy</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Master Admin</li>
      <li className="flex items-center gap-2 text-gray-800">✓ Website</li>
    </ul>

    <button  aria-label="Chat with CodeMonarch on WhatsApp" className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
          <a  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
         aria-label="Chat with CodeMonarch on WhatsApp"
        rel="noopener noreferrer" className="flex content-center align-middle space-x-2">
              <span>Book Free Consultation</span>
          <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
          
        </button>
  </div>
</div>

    </>
  );
}
