import React, { useState } from "react";


export default function HeroProject() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-50 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Explore our portfolio to see how we’ve turned blueprints into landmark spaces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
