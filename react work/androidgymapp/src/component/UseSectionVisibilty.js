import React from "react";
import { useState, useEffect } from "react";

const useSectionVisibility = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        setIsVisible((prev) => ({
          ...prev,
          [section.id]: isInView,
        }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useSectionVisibility;
