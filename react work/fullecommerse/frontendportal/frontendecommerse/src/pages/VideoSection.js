import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ShoppingBag,
  Star,
  Heart,
  ArrowRight,
  Menu,
  Search,
  User,
} from "lucide-react";

function VideoSection() {
   

    const videoContent = [
        {
          id: 1,
          title: "Summer Collection 2024",
          thumbnail:
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=533&fit=crop",
          duration: "2:34",
        },
        {
          id: 2,
          title: "Behind the Scenes",
          thumbnail:
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=533&fit=crop",
          duration: "1:45",
        },
        {
          id: 3,
          title: "Style Guide",
          thumbnail:
            "https://images.unsplash.com/photo-1542295669297-4d352b042bcd?w=300&h=533&fit=crop",
          duration: "3:12",
        },
      ];


  return (
    <div><section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Style Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get inspired by our latest fashion content and styling tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoContent.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[9/16] bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group-hover:scale-125">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></div>
  )
}

export default VideoSection