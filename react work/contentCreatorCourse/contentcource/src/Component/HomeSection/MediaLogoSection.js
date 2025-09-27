import React from 'react';

const MediaLogoSection = () => {
  const mediaLogos = [
    {
      name: "Deutsche Welle",
      logo: "DW",
      subtitle: "Deutsche Welle",
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      name: "Netflix",
      logo: "NETFLIX",
      bgColor: "bg-black",
      textColor: "text-red-600"
    },
    {
      name: "NDTV",
      logo: "NDTV",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "BBC",
      logo: "BBC",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "Brut.",
      logo: "Brut.",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "Spotify",
      logo: "Spotify",
      bgColor: "bg-black",
      textColor: "text-green-400",
      hasIcon: true
    }
  ];

  const SpotifyIcon = () => (
    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );

  return (
    <div className="w-full bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
    

        {/* Desktop View - Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center space-x-8 lg:space-x-12">
            {mediaLogos.map((media, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-16 px-6 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                {media.name === "Deutsche Welle" ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DW</span>
                    </div>
                    <span className="text-white font-medium text-lg">Deutsche Welle</span>
                  </div>
                ) : media.name === "Spotify" ? (
                  <div className="flex items-center">
                    <SpotifyIcon />
                    <span className="text-green-400 font-bold text-2xl">Spotify</span>
                  </div>
                ) : (
                  <span 
                    className={`font-bold text-2xl lg:text-3xl ${media.textColor} ${
                      media.name === 'Netflix' ? 'font-sans' : ''
                    } ${
                      media.name === 'NDTV' ? 'tracking-wider' : ''
                    }`}
                  >
                    {media.logo}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Grid Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {mediaLogos.map((media, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 bg-gray-800/50 rounded-lg backdrop-blur-sm transition-all duration-300 active:scale-95"
              >
                {media.name === "Deutsche Welle" ? (
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">DW</span>
                    </div>
                    <span className="text-white font-medium text-xs text-center">Deutsche Welle</span>
                  </div>
                ) : media.name === "Spotify" ? (
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </div>
                    <span className="text-green-400 font-bold text-sm">Spotify</span>
                  </div>
                ) : (
                  <span 
                    className={`font-bold text-lg ${media.textColor} ${
                      media.name === 'Netflix' ? 'font-sans' : ''
                    } ${
                      media.name === 'NDTV' ? 'tracking-wider' : ''
                    }`}
                  >
                    {media.logo}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tablet View - 2 Rows */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-3 gap-8">
            {mediaLogos.map((media, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {media.name === "Deutsche Welle" ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DW</span>
                    </div>
                    <span className="text-white font-medium text-sm">Deutsche Welle</span>
                  </div>
                ) : media.name === "Spotify" ? (
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-green-400 font-bold text-xl">Spotify</span>
                  </div>
                ) : (
                  <span 
                    className={`font-bold text-xl ${media.textColor} ${
                      media.name === 'Netflix' ? 'font-sans' : ''
                    } ${
                      media.name === 'NDTV' ? 'tracking-wider' : ''
                    }`}
                  >
                    {media.logo}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLogoSection;