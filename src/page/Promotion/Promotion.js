import React, { useState } from "react";
import "./Promotion.scss";
import { withNamespaces } from 'react-i18next';
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.png"
import { Container } from "react-bootstrap";

const Promotion = ({t}) => {
  const [promo] = useState([
    {
      title: "bonusWelcome",
      content: "bonusWelcomeDesc",
    },
    {
      title: "bonusUnlimited",
      content: "bonusUnlimitedDesc",
    },
    {
      title: "bonusRecommend",
      content:"bonusRecommendDesc",
    },
    {
      title:"bonusWeekly",
      content:"bonusWeeklyDesc"
    }
  ]);
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <Container>
     <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} - Promotion</title>
        <meta
          name="description"
          content="Welcome Bonus 50%, Unlimited 10%, Recommend Bonus"
        />
        <link rel="canonical" href="https://dato777.net/promotion" />
        <meta property="og:title" content={window.compName} />
        <meta property="og:description" content="Welcome Bonus 50%, Unlimited 10%, Recommend Bonus"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dato777.net/promotion"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Dato777" />
      </Helmet>
    <section className="promo-page">
      <h2 className="page-title"> {t("promotion")}</h2>

      <div className="promo-content">
        {promo.map((item, i) => {
          return (
            <div key={i} className="promo-card">
              <div className="promo-card-inner">
                <h3 className="promo-title">{t(item.title)}</h3>
                <p className="promo-details">{t(item.content)}</p>
                <div className="promo-btn" onClick={whatsappLink}>
                  <button className='main-btn'>{t('redeem')}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </Container>
  );
};

export default withNamespaces()(Promotion);
