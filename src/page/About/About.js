import React from "react";
import "./About.scss";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.jpg"
import { Container } from "react-bootstrap";
const About = ({ t }) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} - About Us</title>
        <meta
          name="description"
          content="Dato777 is one of the leading online betting sites in Malaysia, and provide 24hour support just for you"
        />
        <link rel="canonical" href="https://dato777.net/about" />
        <meta property="og:title" content={window.compName} />
        <meta property="og:description" content="Dato777 is the best online casino Malaysia! Welcome Bonus 50%! Trusted Company! Support Digi/Maxis! 24HOUR SUPPORT!"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dato777.net/about"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Dato777" />
      </Helmet>
      <section className="about-page">
        <h2 className="page-title">{t("about")}</h2>
        <div className="about-bg">
          <article className="about-content">
            {window.compName} is one of the leading online betting sites in
            Malaysia and home to some of the best gaming products on the web
            that includes Sports Betting, Online Casino, Live Casino Games,
            Online Poker, Fishing Games, Lottery and an array of world-class
            online betting games. Founded by industry veterans,{" "}
            {window.compName} employs over 300 people. Our aim is to provide our
            members with a safe and private yet entertaining environment. We
            value your privacy hence our security measures are well implemented
            and maintained to protect your information.
            {window.compName} strives to provide you the ultimate gaming
            experience through our various games and providers. We are proud to
            claim that we are among one of the sites with the widest coverage of
            gaming providers, offering plenty of options to immerse yourself in
            gaming. Our customers really matter to us and we are committed to
            providing a great customer experience. Our customer support is
            supported by 24 hours live chat and available through various
            channels. We promise to resolve any issue as quickly as possible and
            make sure you are satisfied with the outcome. Gaming is a highly
            innovative industry and, as one of the leading gaming companies in
            Malaysia, we are continuously investing in our people and products
            to bring you a great experience.
          </article>
        </div>
      </section>
    </Container>
  );
};

export default withNamespaces()(About);
