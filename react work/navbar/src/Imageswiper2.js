// src/ImageSwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const ImageSwiper = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1.2} // Mobile default
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5, // More zoom for center slide
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 }, // small tablets
          768: { slidesPerView: 2 },   // tablets
          1024: { slidesPerView: 3 },  // desktops
        }}
        className="w-[90%] max-w-[900px] h-[400px]"
      >
        <SwiperSlide>
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-full text-black">
            <h2 className="text-xl font-semibold">Slide 1</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-full text-black">
            <h2 className="text-xl font-semibold">Slide 2</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-full text-black">
            <h2 className="text-xl font-semibold">Slide 3</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-full text-black">
            <h2 className="text-xl font-semibold">Slide 4</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
