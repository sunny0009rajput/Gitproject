"use client";

import { useState, useEffect } from "react";

const useSectionVisibility = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const isInView =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        setIsVisible((prev) => ({
          ...prev,
          [section.id]: isInView,
        }));
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useSectionVisibility;