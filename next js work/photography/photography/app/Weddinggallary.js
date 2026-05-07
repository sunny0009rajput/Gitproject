'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function InfiniteWeddingCarousel() {
  const slides = [
    { image: '/image1.png', title: 'Rome' },
    { image: '/image2.png', title: 'Kefalonia' },
    { image: '/image3.png', title: 'Short film' },
    { image: '/image4.png', title: 'Wedding short' },
    { image: '/image5.png', title: 'Bali' },
    { image: '/image6.png', title: 'Paris' },
    { image: '/image7.png', title: 'Santorini' },
    { image: '/image8.png', title: 'Venice' },
    { image: '/image9.png', title: 'Dubai' },
    { image: '/image10.png', title: 'Tuscany' },
  ];

  const duplicatedSlides = [...slides, ...slides, ...slides];
  const containerRef = useRef(null);
  const [index, setIndex] = useState(slides.length); // start middle

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const slideWidth = container.children[0].offsetWidth + 24; // gap

    container.style.transition = 'transform 0.7s ease-in-out';
    container.style.transform = `translateX(-${index * slideWidth}px)`;

    // silent reset (no animation)
    if (index >= slides.length * 2) {
      setTimeout(() => {
        container.style.transition = 'none';
        setIndex(slides.length);
        container.style.transform = `translateX(-${slides.length * slideWidth}px)`;
      }, 700);
    }
  }, [index]);

  return (
    <div className="overflow-hidden py-20 bg-zinc-50">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h1 className="text-4xl md:text-6xl font-light text-zinc-800 mb-2">
            Cinematic Stories
          </h1>
          <p className="text-sm md:text-base text-zinc-600 tracking-widest uppercase">
            Infinite Wedding Film Gallery
          </p>
        </div>
      <div
        ref={containerRef}
        className="flex gap-6 px-6"
      >
        {duplicatedSlides.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw]"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-white text-xl">{slide.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
