import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const BookSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const books = [
    {
      id: 1,
      title: "Jane Eyre",
      description: "Jane Eyre is divided into 38 chapters. It was originally published in three volumes in the 19th century...",
      author: "Charlotte Brontë",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      rating: 3,
      gradient: "from-blue-900 to-blue-600",
      fontFamily: "font-serif"
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      description: "epic high-fantasy novel by the English author and scholar J. R. R. Tolkien",
      author: "J. R. R. Tolkien",
      authorImage: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      gradient: "from-red-900 to-purple-900",
      fontFamily: "font-sans"
    },
    {
      id: 3,
      title: "All Quiet on the Western Front",
      description: "The book describes the German soldiers' extreme physical and mental trauma during the war",
      author: "Erich Maria Remarque",
      authorImage: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      gradient: "from-green-800 to-green-600",
      fontFamily: "font-mono"
    },
    {
      id: 4,
      title: "Romeo and Juliet",
      description: "a tragedy between two youths from feuding families",
      author: "William Shakespeare",
      authorImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      gradient: "from-purple-700 to-pink-600",
      fontFamily: "font-serif"
    },
    {
      id: 5,
      title: "Of Mice and Men",
      description: "a novell",
      author: "John Steinbeck",
      authorImage: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      gradient: "from-green-900 to-green-700",
      fontFamily: "font-sans"
    },
    {
      id: 6,
      title: "Harry Potter",
      description: "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley",
      author: "J. K. Rowling",
      authorImage: "https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      rating: 4,
      gradient: "from-indigo-900 to-purple-800",
      fontFamily: "font-bold"
    }
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === books.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [books.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? books.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === books.length - 1 ? 0 : currentIndex + 1);
  };

  // Handle drag events
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    setCurrentX(clientX);
    
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = 100;
    
    if (dragOffset > threshold) {
      goToPrevious();
    } else if (dragOffset < -threshold) {
      goToNext();
    }
    
    setDragOffset(0);
  };

  // Add event listeners for mouse and touch
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchMove = (e) => handleDragMove(e);
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startX, dragOffset]);

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const totalSlides = books.length;
    
    // Handle wrapping
    let position = diff;
    if (diff > totalSlides / 2) {
      position = diff - totalSlides;
    } else if (diff < -totalSlides / 2) {
      position = diff + totalSlides;
    }
    
    return position;
  };

  const getSlideStyles = (index) => {
    const position = getSlidePosition(index);
    const isActive = position === 0;
    
    // Only show 3 slides at a time (center + 1 on each side)
    let opacity = Math.abs(position) > 1 ? 0 : 1;
    let zIndex = 10 - Math.abs(position);
    let scale = isActive ? 1 : 0.85;
    
    // Base translation with drag offset
    let translateX = position * 200 + (isDragging ? dragOffset * 0.3 : 0);
    let transform = `translateX(${translateX}px)`;
    
    // Coverflow effect
    if (position !== 0) {
      const rotateY = position * -25;
      transform += ` rotateY(${rotateY}deg) translateZ(-80px)`;
      scale = 0.8;
    }

    return {
      transform,
      zIndex,
      scale,
      opacity,
    };
  };

  const renderStars = (rating) => {
    return Array.from({ length: 4 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16">
      {/* Header */}
      <div className="text-center mb-16 px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
          Trending this week
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam magnam obcaecati error consequatur repellat fugiat, deleniti nisi eum voluptates.
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative w-full max-w-6xl px-8">
        <div 
          ref={containerRef}
          className="relative h-96 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: '1000px' }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          {/* Navigation Buttons */}
          {/* <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button> */}

          {/* <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button> */}

          {/* Slides */}
          {books.map((book, index) => {
            const styles = getSlideStyles(index);
            const isActive = getSlidePosition(index) === 0;

            return (
              <div
                key={book.id}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: styles.transform,
                  zIndex: styles.zIndex,
                  opacity: styles.opacity,
                }}
                onClick={() => !isDragging && goToSlide(index)}
              >
                <div 
                  className={`w-40 md:w-48 h-72 md:h-80 rounded-xl shadow-2xl bg-gradient-to-b ${book.gradient} overflow-hidden relative transform transition-all duration-700`}
                  style={{ 
                    transform: `scale(${styles.scale})`,
                  }}
                >
                  {/* Book Content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 text-center">
                    <h3 className={`text-white text-2xl md:text-3xl font-bold mb-3 leading-tight ${book.fontFamily}`}>
                      {book.title}
                    </h3>
                    <p className="text-white text-sm opacity-90 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {/* Author Info - Only show for active slide */}
                  {isActive && (
                    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-center opacity-0 animate-fadeIn">
                      <div 
                        className="opacity-100 transition-opacity duration-500 delay-300"
                        style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
                      >
                        <img
                          src={book.authorImage}
                          alt={book.author}
                          className="w-16 h-16 rounded-full border-4 border-white shadow-lg mx-auto mb-2 object-cover"
                        />
                        <span className="block text-gray-800 font-semibold text-sm mb-2">
                          {book.author}
                        </span>
                        <div className="flex justify-center space-x-1">
                          {renderStars(book.rating)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        {/* <div className="flex justify-center mt-32 space-x-2">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}

        {/* Auto-play indicator */}
        {/* <div className="text-center mt-6">
          <span className="text-gray-500 text-sm">
            Auto-advancing every 3 seconds • Drag to navigate
          </span>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BookSwiper;