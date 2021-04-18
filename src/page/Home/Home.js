import React, { useState, useEffect } from "react";
import "./Home.scss";
import ModalImg from "../../assests/common/modal.jpg";
import Banner from "./views/Banner";
import Jackpot from "./views/Jackpot";
import banner1 from "../../assests/banner/01.jpg";
import banner2 from "../../assests/banner/02.jpg";
import banner3 from "../../assests/banner/03.jpg";
import banner4 from "../../assests/banner/04.jpg";
import mobileAccepted from "../../assests/banner/mobile-accepted.png";
import mobileWelcome from "../../assests/banner/mobile-welcome.png";
import mobileDaily from "../../assests/banner/mobile-daily.png";
import mobileRecommend from "../../assests/banner/mobile-recommend.png";
import promo1 from "../../assests/common/promo1.jpg";
import promo2 from "../../assests/common/promo2.jpg";
import promo3 from "../../assests/common/promo3.jpg";
import promo4 from "../../assests/common/promo4.jpg";
import GuideStep from "./views/GuideStep";
import WinnerList from "./views/WinnerList";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.png";
import GameSection from "./views/GameSection";
import { Container } from "react-bootstrap";
// import BankSection from "./views/BankSection";
import step1 from "../../assests/common/register.png";
import step2 from "../../assests/common/deposit.png";
import step3 from "../../assests/common/play.png";
import step4 from "../../assests/common/win.png";
import HomePromo from "./views/HomePromo";
// import HomeGame from "./views/HomeGame";
import InfoCentre from "./views/InfoCentre";
import ModalComponent from "../../components/Modal/Modal";

const Home = ({ t }) => {
  const [banner] = useState([
    {
      id: 1,
      src: banner1,
      mobileSrc: mobileWelcome,
      title: "bonusWelcome",
      content: "bonusWelcomeDesc",
    },
    {
      id: 2,
      src: banner3,
      mobileSrc: mobileDaily,
      title: "bonusRecommend",
      content: "bonusRecommendDesc",
    },
    {
      id: 3,
      src:banner4,
      mobileSrc: mobileRecommend,
      title: "bonusRecommend",
      content: "bonusRecommendDesc",
    },
    {
      id: 4,
      src: banner2,
      mobileSrc: mobileAccepted,
      title: "bonusUnlimited",
      content: "bonusUnlimitedDesc",
    },
  ]);
  const [guide] = useState([
    { id: 1, title: "register", content: "registerdesc", src: step1 },
    { id: 2, title: "deposit", content: "depositdesc", src: step2 },
    { id: 3, title: "playwin", content: "playwindesc", src: step3 },
    { id: 4, title: "withdraw", content: "withdrawdesc", src: step4 },
  ]);
  const [promo] = useState([
    { id: 1, src: promo1 },
    { id: 2, src: promo2 },
    { id: 3, src: promo3 },
    { id: 4, src: promo4 },
  ]);
  const [modalShow, setModalShow] = useState(true);

  const [winnerList, setWinnerList] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let index = 0; index < 100; index++) {
      let obj = {};
      let m = Math.floor(Math.random() * 10) + 1;
      let d = Math.floor(Math.random() * 28) + 1;
      let h = Math.floor(Math.random() * 23) + 1;
      let s = Math.floor(Math.random() * 59) + 1;

      obj["id"] = index;
      obj["year"] = "2020";
      obj["month"] = m < 10 ? "0" + m : m;
      obj["date"] = d < 10 ? "0" + d : d;
      obj["hour"] = h < 10 ? "0" + h : h;
      obj["seconds"] = s < 10 ? "0" + s : s;
      obj["phone"] = "******" + Math.floor(1000 + Math.random() * 9000);
      obj["amount"] = Math.floor(100 + Math.random() * 5000).toFixed(2);
      arr.push(obj);
    }
    setWinnerList({ arr });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} | Most Trusted Online Casino | 918KISS</title>
        <meta
          name="description"
          content="Dato777 is one of the leading online betting sites in Malaysia"
        />
        <link rel="canonical" href="https://dato777.net/" />
        <meta property="og:title" content={window.compName} />
        <meta
          property="og:description"
          content="Dato777 is one of the leading online betting sites in Malaysia"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dato777.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Dato777" />
      </Helmet>
      {modalShow && <ModalComponent onHide={() => setModalShow(false)} imgSrc={ModalImg}/>} 
      
      <section className="homepage">
        <Banner banner={banner} />
        <Container>
          <Jackpot />
          <div className="home-content">
            <div className="guide-mobile">
              <GuideStep guide={guide} />
            </div>
            <HomePromo promo={promo} />
            {winnerList !== undefined && <WinnerList list={winnerList} />}
            <div className="guide-desktop">
              <GuideStep guide={guide} />
            </div>
            {/* <HomeGame /> */}

            <InfoCentre />
          </div>
          <GameSection />

          {/*
        <BankSection />
         */}
        </Container>

        {/* 
        <div className="home-list">
        <SmallSlider smallBanner={smallBanner}/>

         
        </div> */}
      </section>
    </>
  );
};

export default withNamespaces()(Home);
