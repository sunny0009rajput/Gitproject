import React, { useState, useEffect } from 'react';
import { Play, Users, Award, Eye } from 'lucide-react';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample video data - replace with your actual YouTube video IDs and thumbnails
  const videos = [
    {
      id: 'PvTcmse6DDY?si=RzchrFV2s69y5i6a', // Replace with actual YouTube video ID
      title: 'Learn from my Media Experience',
      description: 'From my extensive experience working with major platforms like Netflix, NDTV, Quint, etc, Wells, BBC, BuzzFeed and Spotify, among others, from brand videos to documentaries to explainers to podcasts, my experience in media production is arguably unmatched by any other Indian YouTuber.',
      thumbnail: 'dhruvrathethumbnail.png',
      views: '500K+',
      category: 'Experience'
    },
    {
      id: 'PvTcmse6DDY?si=RzchrFV2s69y5i6a',
      title: 'Content Creation Masterclass',
      description: 'Master the art of content creation with proven strategies and techniques.',
      thumbnail: 'dhruvrathethumbnail.png',
      views: '1M+',
      category: 'Tutorial'
    },
    {
      id: 'PvTcmse6DDY?si=RzchrFV2s69y5i6a',
      title: 'YouTube Growth Strategy',
      description: 'Learn how to grow your YouTube channel from zero to millions of subscribers.',
      thumbnail: 'dhruvrathethumbnail.png',
      views: '750K+',
      category: 'Strategy'
    },
    {
      id: 'PvTcmse6DDY?si=RzchrFV2s69y5i6a',
      title: 'Brand Collaboration Guide',
      description: 'Everything you need to know about working with brands and monetizing your content.',
      thumbnail: 'dhruvrathethumbnail.png',
      views: '300K+',
      category: 'Business'
    },
    {
      id: 'PvTcmse6DDY?si=RzchrFV2s69y5i6a',
      title: 'Video Production Tips',
      description: 'Professional video production techniques used by top creators and media companies.',
      thumbnail: 'dhruvrathethumbnail.png',
      views: '600K+',
      category: 'Production'
    }
  ];

  const badges = [
    { icon: Users, text: '3M+', subtitle: 'Subscribers' },
    { icon: Award, text: '250M+', subtitle: 'Views Overall' },
    { icon: Eye, text: '4M+', subtitle: 'Monthly Views' }
  ];

  const currentVideo = videos[selectedVideo];

  const handleThumbnailClick = (index) => {
    if (selectedVideo !== index) {
      setSelectedVideo(index);
      setIsPlaying(false);
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      const onPlayerStateChange = (event) => {
        // 0 means ended
        if (event.data === 0) {
          setIsPlaying(false);
        }
      };
      window.onYouTubeIframeAPIReady = function () {
        new window.YT.Player('youtube-player', {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      };
      // Load YouTube API
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }
  }, [isPlaying]);

  return (
    <div className="bg-black min-h-screen py-8 px-4 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Watch Trailer</h1>
        </div>

        {/* Main Video Player */}
        <div className="mb-8 sm:mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}&rel=0&autoplay=1&enablejsapi=1`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="youtube-player"
              ></iframe>
            ) : (
              <>
                {/* Video Thumbnail as background */}
                <img
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay for dark effect */}
                <div className="absolute inset-0 bg-black/60"></div>
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
                    onClick={handlePlayClick}
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Decorative Elements (optional, can remove if not needed) */}
                <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded"></div>
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded"></div>
                <div className="absolute top-4 bottom-4 left-4 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded"></div>
                <div className="absolute top-4 bottom-4 right-4 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded"></div>
              </>
            )}
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="mb-8 sm:mb-12">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  selectedVideo === index 
                    ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-black transform scale-105' 
                    : 'hover:ring-1 hover:ring-white/50 hover:ring-offset-1 hover:ring-offset-black'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <div className="relative w-20 h-12 sm:w-32 sm:h-20 rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" />
                  </div>
                  {selectedVideo === index && (
                    <div className="absolute inset-0 bg-red-500/20 border border-red-500"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{currentVideo.title}</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
              {currentVideo.description}
            </p>
            
            {/* Stats Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="bg-gray-800 rounded-full px-4 py-2 flex items-center gap-2 border border-gray-700">
                  <badge.icon className="w-4 h-4 text-red-400" />
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{badge.text}</div>
                    <div className="text-gray-400 text-xs">{badge.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">YouTube Royalty: The Massive Milestones</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Discover the art of getting millions of subscribers. Learn three channels in three different 
              niches, all among the top ones within their respective categories.
            </p>
            
            {/* Achievement Badges */}
            <div className="mt-6 sm:mt-8 flex flex-row gap-4">
              <div className="bg-red-600/20 border border-red-500/30 rounded-full p-4 flex items-center min-w-[220px]">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <div className="font-bold text-white">Top Creator</div>
                  <div className="text-sm text-gray-300">Multiple channels in top rankings</div>
                </div>
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-full p-4 flex items-center min-w-[220px]">
                <Users className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <div className="font-bold text-white">Multi-Niche Expert</div>
                  <div className="text-sm text-gray-300">Success across different content categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default VideoSection;