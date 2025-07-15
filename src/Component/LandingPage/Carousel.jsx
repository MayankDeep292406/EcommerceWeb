// Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Carousel() {
  const images = [
    "https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg",
    "https://images.pexels.com/photos/16812192/pexels-photo-16812192.jpeg",
    "https://images.pexels.com/photos/32814156/pexels-photo-32814156.jpeg",
    "https://images.pexels.com/photos/18105/pexels-photo.jpg"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Slide ${i}`} className="w-full h-72 object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
