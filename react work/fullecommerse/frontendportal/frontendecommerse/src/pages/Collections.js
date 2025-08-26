import React, { useRef, useEffect } from "react";

const categories = [
  { name: "Men" },
  { name: "Women" },
  { name: "Kids" },
  { name: "Electronics" },
  { name: "Home" },
  { name: "Sports" },
  { name: "Beauty" },
  { name: "Toys" },
];

export default function Collections() {
  const scrollRef = useRef(null);

  // Mouse drag scroll for desktop minimized
  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => (isDown = false);
    const mouseUp = () => (isDown = false);

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // drag speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="py-2 px-1">
      <div
        ref={scrollRef}
        className="
          flex gap-4
          sm:justify-center sm:flex-nowrap
          overflow-x-auto sm:overflow-x-visible
          whitespace-nowrap sm:whitespace-normal
          scrollbar-hide
          px-4
          cursor-grab active:cursor-grabbing
        "
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            className="
              flex-shrink-0
              px-6 py-1.5
              border-2 border-gray-700 focus:border-pink-600
              rounded-full font-medium text-sm text-gray-700
              shadow-md hover:shadow-lg hover:scale-105
              transition-all duration-300
            "
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
