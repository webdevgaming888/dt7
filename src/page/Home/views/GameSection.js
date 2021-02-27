import React from "react";
import "./GameSection.scss";
import Swiper from "react-id-swiper";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { GameList } from "../../Game/GameImageData";
import { FaChevronRight } from "react-icons/fa";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, EffectCoverflow]);

const GameSection = ({ t }) => {
  function backtoTop() {
    window.scrollTo(0, 0);
  }
  return (
    <section className="home-section1">
      <div className="home-left">
        <h1 className="home-title">{t("game")}</h1>
        <p>
        {t("gameDesc", { compName: window.compName })}
        </p>
        <Link onClick={backtoTop} to={`${process.env.PUBLIC_URL}/games`}>
        {t("playNow")} <FaChevronRight className="home-button-icon" />
        </Link>
      </div>
      <div className="home-right">
        <Link to={`${process.env.PUBLIC_URL}/games`} className='home-game-link'>
        <Swiper
          effect="coverflow"
          coverflowEffect={{
            slideShadows: true,
            rotate: 20,
            depth: 100,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          slidesPerView={3}
          navigation
          spaceBetween={60}
        >
          {GameList.map((game, i) => {
            return (
              <div key={i} className="games-slider">
                <img
                  src={game.gameLogo}
                  className="game-logo"
                  alt={game.gameName}
                />
              </div>
            );
          })}
        </Swiper></Link>
      </div>
    </section>
  );
};

export default withNamespaces()(GameSection);
