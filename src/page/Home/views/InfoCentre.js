import React from "react";
import "./InfoCentre.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { FaInfoCircle, FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";
import {withNamespaces} from "react-i18next";

SwiperCore.use([Autoplay]);

const InfoCentre = ({t}) => {
  const telegramLink = (e) => {
    e.preventDefault();
    window.location.href = window.telegram;
  };
  const phoneLink = (e) => {
    window.open(`tel:${window.phone}`);
  };
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <div className="home-infocentre">
      <h1 className="home-title">
        <FaInfoCircle className="home-title-icon" />
        {t('infoCentre')}
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
            {/* <div className="info-contact-content">
              <img
                src={logo}
                alt={window.compName}
                className="info-contact-logo"
              />
            </div> */}
            <div className="info-contact-content" onClick={whatsappLink}>
              <FaWhatsapp />
              <div className="info-contact-no">
                {window.phone} <span>(Click to contact now)</span>
              </div>
            </div>
            <div className="info-contact-content" onClick={telegramLink}>
              <FaTelegram />
              <div className="info-contact-no">
                {window.phone} <span>(Click to contact now)</span>
              </div>
            </div>
            <div className="info-contact-content" onClick={phoneLink}>
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
                {t('deposit')}<span>Average Time (Min)</span>
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
                {t('withdraw')}<span>Average Time (Min)</span>
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

export default withNamespaces()(InfoCentre);
