import React, { useState } from "react";
import "./Home.scss";
import Banner from "./views/Banner";
import banner1 from "../../assests/banner/01.jpg";
import banner2 from "../../assests/banner/02.jpg";
import banner3 from "../../assests/banner/03.jpg";
import GuideStep from "./views/GuideStep";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.jpg";
import GameSection from "./views/GameSection";
import { Container } from "react-bootstrap";
import BankSection from "./views/BankSection";
import { FaUserCircle, FaGamepad } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { GiReceiveMoney } from "react-icons/gi";

const Home = ({ t }) => {
  const [banner] = useState([
    {id: 1, src: banner1, title: "bonusWelcome", content: "bonusWelcomeDesc"},
    {id: 2, src: banner2, title: "bonusUnlimited", content: "bonusUnlimitedDesc"},
    {id: 3, src: banner3, title: "bonusRecommend", content: "bonusRecommendDesc"},
  ]);
  const [guide] = useState([
    { id: 1, title: "register", content: "registerdesc", icon:<FaUserCircle/> },
    { id: 2, title: "deposit", content: "depositdesc", icon:<RiMoneyDollarCircleFill /> },
    { id: 3, title: "playwin", content: "playwindesc", icon:<FaGamepad /> },
    { id: 4, title: "withdraw", content: "withdrawdesc", icon:<GiReceiveMoney /> },
  ]);

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
      <section className="homepage">
        <Banner banner={banner} />
        <Container>
        <GameSection />
        <BankSection />
        <GuideStep guide={guide} />
        </Container>
  
        {/* <Jackpot />
        <div className="home-list">
        <SmallSlider smallBanner={smallBanner}/>

          {winnerList !== undefined && depositList !== undefined && (
            <WinnerList list={winnerList} depositList={depositList} />
          )}
        </div> */}
        

      </section>
    </>
  );
};

export default withNamespaces()(Home);
