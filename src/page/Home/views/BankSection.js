import React from "react";
import SwiperCore, { Autoplay, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./BankSection.scss";
import "swiper/swiper.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import { BankList, WalletList } from "../../Bank/BankData";
import { FaChevronRight } from "react-icons/fa"
import { withNamespaces } from "react-i18next";

SwiperCore.use([Autoplay, EffectCube]);

const BankSection = ({t}) => {
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <section className="home-section2">
      <div className="home-left">
        <div className="cube-container">
          <Swiper
            effect="cube"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
          >
            {BankList.map((bank, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={bank.src} className="bank-cube" alt={bank.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="cube-container">
          <Swiper
            effect="cube"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
          >
            {WalletList.map((wallet, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={wallet.src}
                    className="bank-cube"
                    alt={wallet.name}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="home-right">
        <h1 className="home-title">{t('easyDeposit')}</h1>
        <p>
          {t('depositDesc')}
        </p>
        <button onClick={whatsappLink}>{t('depositNow')} <FaChevronRight className='home-button-icon'/></button>
      </div>
    </section>
  );
};

export default withNamespaces()(BankSection);
