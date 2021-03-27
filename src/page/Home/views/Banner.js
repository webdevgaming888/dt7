import React from "react";
import { withNamespaces } from "react-i18next";
import "./Banner.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
// import logo from "../../../assests/navigationbar/logo.png"
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
const Banner = ({ banner, t }) => {
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <Swiper
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      }}
    >
      {banner.map((img, i) => {
        return (
          <SwiperSlide key={i} className='banner-slide'>
          {/* <div key={img.id} className="banner"> */}
            {img.title &&<div className="banner-content">
               <h1>{t(img.title)}</h1>
              <p>{t(img.content)}</p>
              <div className='banner-button-group'>
                <button onClick={whatsappLink}>{t('applyNow')}</button>
              <Link to={`${process.env.PUBLIC_URL}/promotion`}>
                {t("seemore")}
              </Link>
              </div>
        
            </div>}
            <img src={img.src} alt="banner"/>
          {/* </div> */}
          </SwiperSlide>

        );
      })}
    </Swiper>
  );
};
export default withNamespaces()(Banner);
