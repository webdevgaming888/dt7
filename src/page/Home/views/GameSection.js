import React from "react";
import "./GameSection.scss";
import Swiper from "react-id-swiper";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, { Autoplay } from "swiper";
import { GameList } from "../../Game/GameImageData";
// import { FaChevronRight } from "react-icons/fa";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa"

SwiperCore.use([Autoplay]);

const GameSection = ({ t }) => {
  function backtoTop() {
    window.scrollTo(0, 0);
  }
  
  var slideView =  window.innerWidth >= 768 ? 5 :3 ;
  var swiperSpace =  window.innerWidth < 768 ? 20 : 0 ;
  return (
    <section className="game-section">

        <h1 className="home-title"><FaGamepad className='home-title-icon'/>Latest Game 
       </h1>

       {/* <Link onClick={backtoTop} to={`${process.env.PUBLIC_URL}/games`}>
        {t("playNow")} <FaChevronRight className="home-button-icon" />
        </Link> */}

        <Link to={`${process.env.PUBLIC_URL}/games`} className='home-game-link' onClick={backtoTop}>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          spaceBetween={swiperSpace}
          slidesPerView={slideView}
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

    </section>
  );
};

export default withNamespaces()(GameSection);
