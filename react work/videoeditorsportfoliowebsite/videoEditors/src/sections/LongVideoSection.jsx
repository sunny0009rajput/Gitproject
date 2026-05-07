import React, { useState } from "react";

// Dummy Long Form Video Data
const LONG_VIDEOS = [
  {
    id: "mAxbX1SoPKY",
    title: "Complete Editing Tutorial",
    views: "120K Views",
    duration: "12:45",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "r0xUNeNR_V0",
    title: "How I Edit Client Videos",
    views: "250K Views",
    duration: "18:20",
    thumb: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
  },
  {
    id: "64W50fxibro",
    title: "Advanced Motion Graphics Tutorial",
    views: "500K Views",
    duration: "25:10",
    thumb: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
  },
  {
    id: "vlcsN02Apck",
    title: "Complete Editing Tutorial",
    views: "120K Views",
    duration: "12:45",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "SZttCAfzD9c",
    title: "How I Edit Client Videos",
    views: "250K Views",
    duration: "18:20",
    thumb: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
  },
  {
    id: "bMPgHoVUVUI",
    title: "Advanced Motion Graphics Tutorial",
    views: "500K Views",
    duration: "25:10",
    thumb: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
  },
];

function LongVideosSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            Long Form <span className="text-green-400">Videos</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            High-quality long-form edits for YouTube videos,
            podcasts, tutorials, documentaries, and more.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LONG_VIDEOS.map((video, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group"
            >
              {playingVideo === index ? (
                
                // Play video inside website
                <div className="relative w-full aspect-video">
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
                
                // Thumbnail Preview
                <div className="relative w-full aspect-video overflow-hidden">
                  
                  <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-[500px] object-cover rounded-2xl"
                    />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Duration */}
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-md text-sm text-white">
                    {video.duration}
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-xl font-bold">
                      {video.title}
                    </h3>

                    <p className="text-green-400 text-sm mt-1">
                      {video.views}
                    </p>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setPlayingVideo(index)}
                      className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition"
                    >
                      <svg
                        className="w-10 h-10 text-white ml-1"
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

export default LongVideosSection;