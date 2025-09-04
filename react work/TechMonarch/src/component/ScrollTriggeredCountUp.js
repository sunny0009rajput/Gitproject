import React from "react";
import { useState, useEffect, useRef } from "react";

const ScrollTriggeredCountUp = ({
  end = 1000,
  duration = 4000,
  prefix = "",
  suffix = "",
  decimals = 0,
  showPlus = false,   // 👈 Optional prop to show + sign
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCountAnimation = () => {
    setHasAnimated(true);

    const increment = end / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
  };

  const formatNumber = (num) => {
    return (
      prefix +
      Math.floor(num).toLocaleString() +
      (decimals > 0 ? (num % 1).toFixed(decimals).slice(1) : "") +
      suffix
    );
  };

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <div>
          {formatNumber(count)}
        </div>
       
      </div>
    </div>
  );
};

export default ScrollTriggeredCountUp;
