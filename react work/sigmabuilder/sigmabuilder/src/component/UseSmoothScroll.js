import React from "react";
import { useEffect } from "react";

const useSmoothScroll = (navRef, burgerRef) => {
  useEffect(() => {
    // Select all elements with data-scroll-target attribute
    const scrollTriggers = document.querySelectorAll("[data-scroll-target]");

    const handleClick = (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("data-scroll-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // adjust for header height
          behavior: "smooth",
        });

        // Close mobile nav if open
        if (navRef.current?.classList.contains("active")) {
          navRef.current.classList.remove("active");
          burgerRef.current?.classList.remove("toggle");
        }
      }
    };

    scrollTriggers.forEach((el) =>
      el.addEventListener("click", handleClick)
    );

    return () => {
      scrollTriggers.forEach((el) =>
        el.removeEventListener("click", handleClick)
      );
    };
  }, [navRef, burgerRef]);
};

export default useSmoothScroll;
