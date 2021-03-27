import React from "react";
import "./InfoCentre.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { FaInfoCircle, FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";
import logo from "../../../assests/navigationbar/logo.png";
SwiperCore.use([Autoplay]);

const InfoCentre = () => {
  return (
    <div className="home-infocentre">
      <h1 className="home-title">
        <FaInfoCircle className="home-title-icon" />
        Info Centre
      </h1>
      <Swiper
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        <SwiperSlide className="info-contact-bg">
          <div className="info-contact">
            <div className="info-contact-content">
              <img
                src={logo}
                alt={window.compName}
                className="info-contact-logo"
              />
            </div>
            <div className="info-contact-content">
              <FaWhatsapp />
              <div className="info-contact-no">
                {window.phone} <span>(Click to contact now)</span>
              </div>
            </div>
            <div className="info-contact-content">
              <FaTelegram />
              <div className="info-contact-no">
                {window.phone} <span>(Click to contact now)</span>
              </div>
            </div>
            <div className="info-contact-content">
              <FaPhone />
              <div className="info-contact-no">
                {window.phone} <span>(Click to contact now)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dw-bg">
          <div className="deposit-withdraw">
            <div className="deposit-withdraw-top">
              <div className="dw-title">
                Deposit<span>Average Time (Min)</span>
              </div>
              <div className="dw-time">
                <span>0</span>
                <span>2</span>
              </div>
            </div>
            <div className="deposit-withdraw-bottom"></div>
          </div>
          <div className="deposit-withdraw info-withdraw">
            <div className="deposit-withdraw-top">
              <div className="dw-title">
                WIthdrawal<span>Average Time (Min)</span>
              </div>
              <div className="dw-time">
                <span>0</span>
                <span>1</span>
              </div>
            </div>
            <div className="deposit-withdraw-bottom"></div>
          </div>
          <div className="deposit-withdraw info-withdraw">
            <div className="deposit-withdraw-top">
              <div className="dw-title">
                Whatsapp Reply<span>Average Time (Sec)</span>
              </div>
              <div className="dw-time">
                <span>3</span>
                <span>0</span>
              </div>
            </div>
            <div className="deposit-withdraw-bottom"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InfoCentre;
