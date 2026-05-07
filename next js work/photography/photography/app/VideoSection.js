'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  // Dummy static data
  const videos = [
    {
      _id: '1',
      name: 'Street Style Look',
      video: '/v1.mp4',
      image: '/v1.png',
    },
    {
      _id: '2',
      name: 'Summer Fashion',
      video: '/v2.mp4',
      image: '/v2.png',
    },
    {
      _id: '3',
      name: 'Wedding Outfit',
      video: '/v3.mp4',
      image: 'v3.png',
    },
  ];

  const handlePlayClick = (id) => {
    const videoEl = videoRefs.current[id];
    if (!videoEl) return;

    if (playingVideo === id) {
      videoEl.pause();
      setPlayingVideo(null);
    } else {
      // Stop others
      Object.values(videoRefs.current).forEach((v) => {
        if (v && !v.paused) {
          v.pause();
          v.currentTime = 0;
        }
      });

      videoEl.muted = false;
      videoEl.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Style Stories
          </h2>
          <p className="text-xl text-gray-600">
            Get inspired by our latest fashion content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video._id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[9/16] bg-black">
                <video
                  ref={(el) => (videoRefs.current[video._id] = el)}
                  src={video.video}
                  poster={video.image}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                />

                {/* Play / Pause */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayClick(video._id)}
                    className="w-16 h-16 bg-black/50 border border-white rounded-full flex items-center justify-center hover:scale-110 transition"
                  >
                    {playingVideo === video._id ? (
                      <Pause className="text-white" />
                    ) : (
                      <Play className="text-white ml-1" />
                    )}
                  </button>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-lg font-semibold">
                    {video.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
