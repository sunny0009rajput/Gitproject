import React, { useState } from "react";

// Dummy Shorts Data
const SHORT_VIDEOS = [
  {
    
    id: "_PScF8teyQo",
    title: "Quick Editing Tip",
    views: "6.4M+",
    thumb: "https://img.youtube.com/vi/_PScF8teyQo/hqdefault.jpg",
  },
  {
    id: "VATHDIChgwI",
    title: "Transition Tutorial",
    views: "3.2M+",
    thumb: "https://img.youtube.com/vi/VATHDIChgwI/hqdefault.jpg",
  },
  {
    id: "vIJpyi7YB3o",
    title: "Reel Editing Hack",
    views: "8.1M+",
    thumb: "https://img.youtube.com/vi/vIJpyi7YB3o/hqdefault.jpg",
  },
];

function ShortVideosSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            Short <span className="text-green-400">Videos</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Viral short-form edits designed for YouTube Shorts,
            Instagram Reels, and TikTok creators.
          </p>
        </div>

        {/* Shorts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SHORT_VIDEOS.map((video, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group"
            >
              {/* If video is playing */}
              {playingVideo === index ? (
                <div className="relative w-full aspect-[9/16]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full aspect-[9/16] overflow-hidden">
                  
                  {/* Thumbnail */}
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">
                      {video.title}
                    </h3>
                    <p className="text-green-400 text-sm font-medium">
                      {video.views} views
                    </p>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setPlayingVideo(index)}
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition"
                    >
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShortVideosSection;