import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ImageSwiper = () => {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Swipe handler (works on mobile & desktop)
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true, // enables mouse dragging on desktop
  });

  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;

  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative" {...handlers}>
        {/* Swiper container */}
        <div className="relative w-[500px] h-[350px] mx-auto overflow-hidden">
          {/* Left preview */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10">
            <div className="w-[150px] h-[200px] rounded-lg overflow-hidden opacity-60">
              <img
                src={images[getPrevIndex()]}
                alt="Prev"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main image */}
          <div className="relative z-20">
            <div className="w-[300px] h-[350px] rounded-lg mx-auto overflow-hidden shadow-2xl transform transition-all duration-500 ease-in-out">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right preview */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10">
            <div className="w-[150px] h-[200px] rounded-lg overflow-hidden opacity-60">
              <img
                src={images[getNextIndex()]}
                alt="Next"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSwiper;
