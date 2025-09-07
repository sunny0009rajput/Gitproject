import React, { useState, useEffect, useRef } from "react";
import { ChevronRight,Play } from "lucide-react";


const BookSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  

  
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const books = [
    {
      id: 1,
      title: "Jane Eyre",
      description:
        "Jane Eyre is divided into 38 chapters. It was originally published in three volumes in the 19th century...",
      author: "Charlotte Brontë",
      authorImage: "mobileclothing.webp",
      rating: 3,
      gradient: "from-blue-900 to-blue-600",
      fontFamily: "font-serif",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      description:
        "epic high-fantasy novel by the English author and scholar J. R. R. Tolkien",
      author: "J. R. R. Tolkien",
      authorImage: "mobileeccomerce.webp",
      rating: 4,
      gradient: "from-red-900 to-purple-900",
      fontFamily: "font-sans",
    },
    {
      id: 3,
      title: "All Quiet on the Western Front",
      description:
        "The book describes the German soldiers' extreme physical and mental trauma during the war",
      author: "Erich Maria Remarque",
      authorImage: "mobileelectronic.webp",
      rating: 4,
      gradient: "from-green-800 to-green-600",
      fontFamily: "font-mono",
    },
    {
      id: 4,
      title: "Romeo and Juliet",
      description: "a tragedy between two youths from feuding families",
      author: "William Shakespeare",
      authorImage: "mobileicecream.webp",
      rating: 4,
      gradient: "from-purple-700 to-pink-600",
      fontFamily: "font-serif",
    },
    {
      id: 5,
      title: "Of Mice and Men",
      description: "a novell",
      author: "John Steinbeck",
      authorImage: "mobilelapto.webp",
      rating: 4,
      gradient: "from-green-900 to-green-700",
      fontFamily: "font-sans",
    },
    {
      id: 6,
      title: "Harry Potter",
      description:
        "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley",
      author: "J. K. Rowling",
      authorImage: "mobileportfolio.webp",
      rating: 4,
      gradient: "from-indigo-900 to-purple-800",
      fontFamily: "font-bold",
    },
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
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
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

  const handleClick =(index)=>{
    if(Math.abs(dragOffset) < 5){
      goToSlide(index);
    }
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
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
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
    // let translateX = position * 200 + (isDragging ? dragOffset * 0.3 : 0);
    let translateX = position * 200;
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

  

  return (
    <div
      id="Home"
      className="min-h-screen bg-white flex flex-col items-center justify-center mt-16 py-16"
    >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.Home
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
      {/* Header */}
      <div className="text-center mb-16 px-8">
        <h2 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-500 to-gray-800 bg-clip-text text-transparent">
          Need a Website or Mobile App ?
          <br />
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            We're On It
          </span>
        </h2>
        <p className="text-xl md:text-xl text-gray-500 mb-8 leading-relaxed">
          “Your startup deserves more than just an idea—it deserves an app.
          <br></br>
          Get your Desktop or Mobile App built with precision.<br></br>
          Book a free consultation and let’s grow together.”
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative w-full max-w-6xl px-8">
        <div
          ref={containerRef}
          className="relative h-96 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "1000px" }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          {/* Slides */}
          {books.map((book, index) => {
            const styles = getSlideStyles(index);
            const isActive = getSlidePosition(index) === 0;

            return (
              <div
                key={book.id}
                className="absolute transition-all duration-700 ease-out will-change-transform"
                style={{
                  transform: styles.transform,
                  zIndex: styles.zIndex,
                  opacity: styles.opacity,
                }}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`w-60 md:w-60 h-90 md:h-90 rounded-xl shadow-2xl  overflow-hidden relative transform transition-all duration-700`}
                  style={{
                    transform: `scale(${styles.scale})`,
                  }}
                >
                  <img
                    src={book.authorImage}
                    alt={book.title}
                    width="320" 
                    height="480"
                    decoding="async"
                    className="w-f h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : undefined}
                  />
                  {/* Book Content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 text-center">
                  
                  </div>

                  {/* Author Info - Only show for active slide */}
                  {isActive && (
                    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-center opacity-0 animate-fadeIn">
                      <div
                        className="opacity-100 transition-opacity duration-500 delay-300"
                        style={{
                          animation: "fadeInUp 0.8s ease-out 0.3s both",
                        }}
                      >
                        <img
                          src={book.authorImage}
                          alt={book.author}
                          
                          className="w-16 h-16 rounded-full border-4 border-white shadow-lg mx-auto mb-2 object-cover"
                          loading="lazy"
                        />
                        {/* <span className="block text-gray-800 font-semibold text-sm mb-2">
                          {book.author}
                        </span> */}
                        {/* <div className="flex justify-center space-x-1">
                          {renderStars(book.rating)}
                        </div> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
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
      <div className="flex flex-col sm:flex-row gap-6 mt-28 justify-center items-center">
        <a
  href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with CodeMonarch on WhatsApp"
  className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
>
  <span>Book Free Consultation</span>
  <ChevronRight className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
</a>


        <button  aria-label="Chat with CodeMonarch on WhatsApp"
          onClick={() => {
            window.open(
              "https://youtu.be/CIJ3t9FKbuo?si=X9Qk5bdseIVRNRpH",
              "_blank"
            );
          }}
          className="group px-8 py-4 border-2 border-black text-black rounded-full font-bold text-lg hover:bg-gray-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
        >
          <Play className="w-5 h-5" />
          <span>Watch Video</span>
        </button>
      </div>
      </div>

        </div>

    </div>
  );
};

export default BookSwiper;
