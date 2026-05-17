"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

const BookSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const containerRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Slides Data
  const books = [
    {
      id: 1,
      title: "Jane Eyre",
      authorImage: "/mobileclothing.webp",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      authorImage: "/mobileeccomerce.webp",
    },
    {
      id: 3,
      title: "All Quiet on the Western Front",
      authorImage: "/mobileelectronic.webp",
    },
    {
      id: 4,
      title: "Romeo and Juliet",
      authorImage: "/mobileicecream.webp",
    },
    {
      id: 5,
      title: "Of Mice and Men",
      authorImage: "/mobilelapto.webp",
    },
    {
      id: 6,
      title: "Harry Potter",
      authorImage: "/mobileportfolio.webp",
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === books.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [books.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0
        ? books.length - 1
        : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === books.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  // Drag Start
  const handleDragStart = (e) => {
    setIsDragging(true);

    const clientX =
      e.type === "mousedown"
        ? e.clientX
        : e.touches[0].clientX;

    setStartX(clientX);
  };

  // Drag Move
  const handleDragMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const clientX =
      e.type === "mousemove"
        ? e.clientX
        : e.touches[0].clientX;

    const diff = clientX - startX;

    setDragOffset(diff);
  };

  // Drag End
  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    const threshold = 100;

    if (dragOffset > threshold) {
      goToPrevious();
    } else if (dragOffset < -threshold) {
      goToNext();
    }

    setDragOffset(0);
  };

  const handleClick = (index) => {
    if (Math.abs(dragOffset) < 5) {
      goToSlide(index);
    }
  };

  // Mouse & Touch Events
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();

    const handleTouchMove = (e) => handleDragMove(e);
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener(
        "mousemove",
        handleMouseMove
      );

      document.addEventListener(
        "mouseup",
        handleMouseUp
      );

      document.addEventListener(
        "touchmove",
        handleTouchMove,
        {
          passive: false,
        }
      );

      document.addEventListener(
        "touchend",
        handleTouchEnd
      );
    }

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      document.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      document.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [isDragging, dragOffset, startX]);

  // Slide Position
  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const totalSlides = books.length;

    let position = diff;

    if (diff > totalSlides / 2) {
      position = diff - totalSlides;
    } else if (diff < -totalSlides / 2) {
      position = diff + totalSlides;
    }

    return position;
  };

  // Slide Style
  const getSlideStyles = (index) => {
    const position = getSlidePosition(index);

    const isActive = position === 0;

    const opacity =
      Math.abs(position) > 1 ? 0 : 1;

    const zIndex = 10 - Math.abs(position);

    let scale = isActive ? 1 : 0.85;

    let translateX = position * 220;

    let transform = `translateX(${translateX}px)`;

    if (position !== 0) {
      const rotateY = position * -25;

      transform += ` rotateY(${rotateY}deg) translateZ(-80px)`;

      scale = 0.8;
    }

    return {
      transform,
      zIndex,
      scale,
      opacity,
    };
  };

  return (
    <div
      id="Home"
      className="min-h-screen bg-white flex flex-col items-center justify-center mt-16 py-16 overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible.Home
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-500 to-gray-800 bg-clip-text text-transparent leading-tight">
              Need a Website or Mobile App ?
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                We're On It
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
              Your startup deserves more than just an idea.
              <br />
              Get your Desktop or Mobile App built with precision.
              <br />
              Book a free consultation and let’s grow together.
            </p>
          </div>

          {/* Swiper */}
          <div className="relative w-full max-w-6xl px-8">
            <div
              ref={containerRef}
              className="relative h-[650px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
              style={{ perspective: "1000px" }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              {books.map((book, index) => {
                const styles = getSlideStyles(index);

                const isActive =
                  getSlidePosition(index) === 0;

                return (
                  <div
                    key={book.id}
                    className="absolute transition-all duration-700 ease-out will-change-transform"
                    style={{
                      transform: styles.transform,
                      zIndex: styles.zIndex,
                      opacity: styles.opacity,
                    }}
                    onClick={() =>
                      handleClick(index)
                    }
                  >
                    {/* CARD */}
                    <div
                      className="relative w-[260px] md:w-[320px] h-[520px] md:h-[620px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-700"
                      style={{
                        transform: `scale(${styles.scale})`,
                      }}
                    >
                      {/* FULL HEIGHT IMAGE */}
                      <Image
                        src={book.authorImage}
                        alt={book.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10"></div>

                      {/* Active Slide Avatar */}
                      {isActive && (
                        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-center animate-fadeIn">
                          <div
                            className="opacity-100 transition-opacity duration-500 delay-300"
                            style={{
                              animation:
                                "fadeInUp 0.8s ease-out 0.3s both",
                            }}
                          >
                            <div className="relative w-16 h-16 mx-auto mb-2">
                              <Image
                                src={book.authorImage}
                                alt={book.title}
                                fill
                                className="rounded-full border-4 border-white shadow-lg object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 justify-center items-center">
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with CodeMonarch on WhatsApp"
              className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Book Free Consultation</span>

              <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Video */}
            {/* Launch Website Button */}
<a
  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch I want to launch my website"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Launch Your Website on WhatsApp"
  className="group px-8 py-4 border-2 border-black text-black rounded-full font-bold text-lg hover:bg-gray-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
>
  <Play className="w-5 h-5" />

  <span>Launch Your Website</span>

  <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
</a>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }

          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BookSwiper;