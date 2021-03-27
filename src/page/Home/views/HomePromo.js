import React,{useState,useEffect, useRef} from "react";
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
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);
  const ref = useRef(null)
useEffect(() => {
  setSlideHeight(ref.current.clientHeight)
  setSlideWidth(ref.current.clientWidth)

}, [])



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
          <SwiperSlide  ref={ref} className='home-promo-slide'>{slideWidth} x {slideHeight}</SwiperSlide>
          <SwiperSlide  ref={ref} className='home-promo-slide'>{slideWidth} x {slideHeight}</SwiperSlide>
        </Swiper>
    </div>
  );
};

export default HomePromo;
