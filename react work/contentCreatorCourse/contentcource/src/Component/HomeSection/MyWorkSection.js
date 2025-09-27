import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const MyWorkSection = () => {
  const channels = [
    {
      id: 1,
      name: "Dhruv Rathee",
      handle: "@dhruvrathee",
      subscribers: "12M+ Subscribers",
      videos: "540 Videos",
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42842f_Frame%20237807.png",
      url: "#",
      isVerified: true
    },
    {
      id: 2,
      name: "Dhruv Rathee Vlogs",
      handle: "@DhruvRatheeVlogs",
      subscribers: "2M+ Subscribers", 
      videos: "189 Videos",
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428431_Frame%20237807%20(1).png",
      url: "#",
      isVerified: true
    },
    {
      id: 3,
      name: "Dhruv Rathee Shorts",
      handle: "@DRshorts",
      subscribers: "2M+ Subscribers",
      videos: "233 Videos",
      image: "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428451_WhatsApp%20Image%202023-08-26%20at%2019.20.42.jpeg",
      url: "#",
      isVerified: true
    }
  ];

  const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  return (
    <div className="w-full bg-black/90 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            MY WORK
          </h2>
        </div>

        {/* Channels Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {channels.map((channel, index) => (
            <div
              key={channel.id}
              className="group bg-black rounded-3xl overflow-hidden hover transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Channel Image */}
              <div className="relative">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* YouTube Logo Overlay */}
                {/* <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </div> */}

                {/* Play Button for Shorts Channel */}
                {/* {index === 2 && (
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                )} */}

                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div> */}
              </div>

              {/* Channel Info */}
              <div className="p-8 text-center">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl font-bold text-white mr-2">
                    {channel.name}
                  </h3>
                  {channel.isVerified && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <p className="text-white/70 text-sm mb-2">{channel.handle}</p>
                <p className="text-white/60 text-sm mb-1">{channel.subscribers}</p>
                <p className="text-white/60 text-sm mb-6">{channel.videos}</p>

                {/* View Channel Button */}
                <a
                  href={channel.url}
                  className="inline-flex items-center justify-center w-full bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 group-hover:scale-105"
                >
                  VIEW CHANNEL
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channels Grid - Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          {channels.slice(0, 2).map((channel, index) => (
            <div
              key={channel.id}
              className="group rounded-3xl overflow-hidden hover transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-48 object-cover"
                />
                {/* <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </div> */}
                {/* <div className="absolute inset-0 via-transparent to-transparent"></div> */}
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-xl font-bold text-white mr-2">{channel.name}</h3>
                  {channel.isVerified && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-white/70 text-sm mb-1">{channel.handle}</p>
                <p className="text-white/60 text-xs mb-1">{channel.subscribers}</p>
                <p className="text-white/60 text-xs mb-4">{channel.videos}</p>
                <a
                  href={channel.url}
                  className="inline-flex items-center justify-center w-full bg-transparent border-2 border-white/30 hover:border-white text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  VIEW CHANNEL
                </a>
              </div>
            </div>
          ))}
          
          {/* Third channel on its own row for tablet */}
          <div className="md:col-span-2 max-w-md mx-auto">
            <div className="group  rounded-3xl overflow-hidden hover transition-all duration-300">
              <div className="relative">
                <img
                  src={channels[2].image}
                  alt={channels[2].name}
                  className="w-full h-48 object-cover"
                />
                {/* <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </div> */}
                {/* <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-current" />
                  </div>
                </div> */}
                {/* <div className="absolute inset-0  via-transparent to-transparent"></div> */}
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-xl font-bold text-white mr-2">{channels[2].name}</h3>
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-1">{channels[2].handle}</p>
                <p className="text-white/60 text-xs mb-1">{channels[2].subscribers}</p>
                <p className="text-white/60 text-xs mb-4">{channels[2].videos}</p>
                <a
                  href={channels[2].url}
                  className="inline-flex items-center justify-center w-full bg-transparent border-2 border-white/30 hover:border-white text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  VIEW CHANNEL
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Channels Grid - Mobile */}
        <div className="block md:hidden space-y-6">
          {channels.map((channel, index) => (
            <div
              key={channel.id}
              className="rounded-3xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-40 object-cover"
                />
                {/* <div className="absolute top-3 left-3">
                  <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </div> */}
                {/* {index === 2 && (
                  <div className="absolute top-3 right-3">
                    <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                )} */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div> */}
              </div>
              
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-lg font-bold text-white mr-2">{channel.name}</h3>
                  {channel.isVerified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-white/70 text-sm mb-1">{channel.handle}</p>
                <p className="text-white/60 text-xs mb-1">{channel.subscribers}</p>
                <p className="text-white/60 text-xs mb-4">{channel.videos}</p>
                <a
                  href={channel.url}
                  className="inline-flex items-center justify-center w-full bg-transparent border-2 border-white/30 active:border-white active:bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  VIEW CHANNEL
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorkSection;