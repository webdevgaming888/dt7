import React from "react";
import "./HomePromo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import {FaGift} from "react-icons/fa";

SwiperCore.use([Pagination, Autoplay]);
const HomePromo = () => {
  return (
    <div className="home-promo">
      <h1 className="home-title"><FaGift className='home-title-icon'/>Latest Promotion</h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    </div>
  );
};

export default HomePromo;
