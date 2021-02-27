import React from "react";
import Slider from "react-slick";
import { withNamespaces } from "react-i18next";
import "./SmallSlider.scss";
const SmallSlider = ({ smallBanner,t }) => {
  var smallSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="small-slider">
        <div className='title'>{t('depositMethod')}</div>
      <Slider {...smallSetting}>
        {smallBanner.map((item, i) => {
          return <img key={i} src={item.src} alt={item.name} />;
        })}
      </Slider>
    </div>
  );
};

export default withNamespaces()(SmallSlider);
