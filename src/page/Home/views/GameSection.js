import React from "react";
import "./GameSection.scss";
import Swiper from "react-id-swiper";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { GameList } from "../../Game/GameImageData";
import { FaChevronRight } from "react-icons/fa"
SwiperCore.use([Autoplay, EffectCoverflow]);

const GameSection = () => {
  return (
    <section className="home-section1">
      <div className="home-left">
        <h1 className="home-title">Games</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button>Play Now <FaChevronRight className='home-button-icon'/></button>
      </div>
      <div className="home-right">
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
                ;{" "}
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default GameSection;
