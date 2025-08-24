import React from "react";
import ScrollTriggeredCountUp from "./CountUp";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">Our Achievements 🚀</h1>

      <div className="grid grid-cols-2 gap-10">
        <ScrollTriggeredCountUp end={500} duration={3000} suffix="+" />
        <ScrollTriggeredCountUp end={1200} duration={4000} suffix=" Users" />
        <ScrollTriggeredCountUp end={50} duration={2500} prefix="$" />
        <ScrollTriggeredCountUp end={99} duration={3500} suffix="%" showPlus />
      </div>
    </div>
  );
}
