import React from "react";
import "./HomePromo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { FaGift } from "react-icons/fa";
import {withNamespaces} from "react-i18next";
SwiperCore.use([Pagination, Autoplay]);
const HomePromo = ({ promo, t }) => {
  // const [slideWidth, setSlideWidth] = useState(0);
  // const [slideHeight, setSlideHeight] = useState(0);
  // const ref = useRef(null);
  // useEffect(() => {
  //   setSlideHeight(ref.current.clientHeight);
  //   setSlideWidth(ref.current.clientWidth);
  // }, []);

  return (
    <div className="home-promo">
      <h1 className="home-title">
        <FaGift className="home-title-icon" />
        {t('latestPromotion')}
      </h1>

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
        {promo.map((img) => {
          return (
            <SwiperSlide key={img.id} className="home-promo-slide">
              <img src={img.src} alt='promotion'  className='home-promo-img'/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default withNamespaces()(HomePromo);
