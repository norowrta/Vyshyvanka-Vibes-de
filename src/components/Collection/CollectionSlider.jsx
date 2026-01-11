import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import scss from "./collection.module.scss";

const API_URL = "https://6963af322d146d9f58d41ede.mockapi.io/titles";

export default function CollectionSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Loading error:", error);
      }
    };

    fetchData();
  }, []);

  if (slides.length === 0) {
    return null;
  }

  return (
    <Swiper
      initialSlide={1}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      }}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className={scss.collection__slider}
    >
      {slides.map((item) => {
        return (
          <SwiperSlide key={item.id} className={scss.collection__item}>
            <div className={scss.collection__itemWrapper} data-aos="fade-up">
              <img
                src={item.image}
                srcSet={`${item.image} 1x, ${item.image2x} 2x`}
                alt={item.title}
                loading="lazy"
                className={scss.collection__itemImg}
              />
              <div className={scss.collection__itemInfo}>
                <h3 className={scss.collection__itemTitle}> {item.title} </h3>
                <span className={scss.collection__itemPrice}>
                  {item.price} €
                </span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
