import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import playIcon from "../assets/icon.png";

// Dummy video data
const VIDEOS = [
  {
    id: "mAxbX1SoPKY",
    title: "Cinematic Travel Edit",
  },
  {
    id: "r0xUNeNR_V0",
    title: "Product Commercial Edit",
  },
  {
    id: "64W50fxibro",
    title: "Gaming Montage Edit",
  },
  {
    id: "vlcsN02Apck",
    title: "Social Media Reel Edit",
  },
];

function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (playingVideo !== null) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeVideo, playingVideo]);

  const nextSlide = () => {
    setPlayingVideo(null);
    setActiveVideo((prev) =>
      prev === VIDEOS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setPlayingVideo(null);
    setActiveVideo((prev) =>
      prev === 0 ? VIDEOS.length - 1 : prev - 1
    );
  };

  const playCurrentVideo = (index) => {
    setPlayingVideo(index);
  };

  return (
    <section className="py-20 px-4 bg-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
          My Recent <span className="text-green-400">Edits</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          We imagine and build experiences, products and businesses
          that disrupt the status quo, win hearts and realize the future.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeVideo * 100}%)`,
            }}
          >
            {VIDEOS.map((video, index) => (
              <div
                key={video.id}
                className="min-w-full relative"
              >
                {/* Show iframe when play clicked */}
                {playingVideo === index ? (
                  <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="rounded-2xl"
                  ></iframe>
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-[500px] object-cover rounded-2xl"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => playCurrentVideo(index)}
                        className="w-20 h-20 flex items-center justify-center hover:scale-110 transition"
                      >
                        <img
                          src={playIcon}
                          alt="Play Video"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </div>
                  </>
                )}

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft className="text-black" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-green-500 p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight className="text-black" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {VIDEOS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveVideo(index);
                setPlayingVideo(null);
              }}
              className={`h-2 rounded-full transition-all ${
                activeVideo === index
                  ? "w-8 bg-green-400"
                  : "w-2 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;