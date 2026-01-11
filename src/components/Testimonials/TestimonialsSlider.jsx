import { useState, useEffect } from "react";
import scss from "./testimonials.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const API_URL = "https://6963af322d146d9f58d41ede.mockapi.io/feedback";

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Loading error");
        }

        const data = await response.json();

        setTestimonials(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 32},
        768: { slidesPerView: 2, spaceBetween: 32},
        1280: { slidesPerView: 3, spaceBetween: 26},
      }}
      spaceBetween={30}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={scss.testimonials__slider}
    >
      {testimonials.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className={scss.testimonials__slide} data-aos="fade-up" >
              <img
                src={item.img}
                alt={item.username}
                className={scss.testimonials__image}
              />
              <h5 className={scss.testimonials__username}>{item.username}</h5>
              <p className={scss.testimonials__feedback}>{item.feedback}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
