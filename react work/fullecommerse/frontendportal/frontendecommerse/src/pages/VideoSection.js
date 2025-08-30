import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Play, Pause } from "lucide-react";

function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(null); // track clicked video
  const videoRefs = useRef({});
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${apiurl}/video`);
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [apiurl]);

  const handlePlayClick = (id) => {
    const videoEl = videoRefs.current[id];
    if (!videoEl) return;

    if (playingVideo === id) {
      // Pause current video
      videoEl.pause();
      setPlayingVideo(null);
    } else {
      // Stop all other videos
      Object.entries(videoRefs.current).forEach(([vidId, v]) => {
        if (v && !v.paused) {
          v.pause();
          v.currentTime = 0;
        }
      });

      // Play clicked video with sound
      videoEl.muted = false;
      videoEl.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Style Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by our latest fashion content and styling tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video._id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[9/16] bg-gray-900">
                {video.video ? (
                  <video
                    ref={(el) => (videoRefs.current[video._id] = el)}
                    src={video.video}
                    poster={video.image}
                    className="w-full h-full object-cover"
                    playsInline
                    preload="auto"
                    controls={false} // no default controls
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    No Video
                  </div>
                )}

                {/* Transparent Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayClick(video._id)}
                    className="w-16 h-16 bg-black/40 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    {playingVideo === video._id ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg">{video.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
