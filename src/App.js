import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Game from "./page/Game/Game";
import Bank from "./page/Bank/Bank";
import Contact from "./page/Contact/Contact";
import Header from "./components/Header/Header";
import Promotion from "./page/Promotion/Promotion";
import Footer from "./components/Footer/Footer";
import { withNamespaces } from "react-i18next";
import MobileSideNav from "./components/Header/views/MobileSideNav";
import MobileFooterNav from "./components/Footer/views/MobileFooterNav";



const App = () => {
  const [isOpen, setIsOpen] = useState(Boolean);

  const handleOpen = () => {
    setIsOpen((current) => !current);
  };
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <Router>
      <Header isOpen={isOpen} handleOpen={handleOpen} />
      <MobileSideNav isOpen={isOpen} handleOpen={handleOpen} />
      <div className="page-container">
       
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/games`}>
              <Game />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/promotion`}>
              <Promotion />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/bank`}>
              <Bank />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/contact`}>
              <Contact />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/about`}>
              <About />
            </Route>
          </Switch>

      </div>
      <Footer />
      <MobileFooterNav handleClose={handleClose} whatsappLink={whatsappLink} />
      </Router>
  );
};

export default withNamespaces()(App);
