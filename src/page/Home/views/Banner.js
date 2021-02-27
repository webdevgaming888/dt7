import React from "react";
import { withNamespaces } from "react-i18next";
// import Slider from "react-slick";
import "./Banner.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import logo from "../../../assests/navigationbar/logo.jpg"
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
// import 'react-id-swiper/lib/styles/scss/swiper.scss';
const Banner = ({ banner, t }) => {
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
              <img src={logo} className='banner-logo' alt={window.compName} />
               <h1>{t(img.title)}</h1>
              <p>{t(img.content)}</p>
              <div className='banner-button-group'>
                <button>Apply Now</button>
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
