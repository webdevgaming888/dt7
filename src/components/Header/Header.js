import React, { useState } from "react";
import Navbar from "./views/Navbar";
import Logo from "./views/Logo";
import "./Header.scss";
import { Login } from "./views/Login";
// import { Container } from "react-bootstrap";
import i18n from "../../i18n";
import { Component } from "react";
import { Container } from "react-bootstrap";
export class Hamburger extends Component {
  render() {
    const { isOpen, handleOpen } = this.props;
    const className = isOpen ? " opened" : null;
    return (
      <button
        className={`menu ${className}`}
        onClick={handleOpen}
        aria-label="Main Menu"
      >
        <svg className="hamburger" width="35" height="35" viewBox="0 0 100 100">
          <path
            className={`line line1 ${className}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className={`line line2 ${className}`} d="M 20,50 H 80" />
          <path
            className={`line line3 ${className}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    );
  }
}

const Header = ({ isOpen, handleOpen }) => {
  const [showLang, setShowLang] = useState(false);
  const [currentLang, setCurrentLang] = useState("bm");

  const langIconClick = () => {
    setShowLang((current) => !current);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    setCurrentLang(lng);
    setShowLang(false);
  };

  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };

  return (
    <>
    <section className="header">
      <Container className="header-container">
        <Hamburger isOpen={isOpen} handleOpen={handleOpen} />
        <div className="header-left">
          <Logo />
        </div>
        <Login
          langIconClick={langIconClick}
          changeLanguage={changeLanguage}
          showLang={showLang}
          whatsappLink={whatsappLink}
          currentLang={currentLang}
        />
      </Container>
    </section>
    <section className='navbar-sec'>
      <Container>
        <Navbar />
      </Container>
    </section>
    </>
  );
};
export default Header;
