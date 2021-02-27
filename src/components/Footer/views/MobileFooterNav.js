import React from "react";
import { withNamespaces } from "react-i18next";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { IoGameController, IoGift } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./MobileFooterNav.scss";
const MobileFooterNav = ({ t, whatsappLink, handleClose }) => {
  const backtToTop = () => {
    window.scrollTo(0, 0);
    handleClose();
  };
  return (
    <div className="mobile-footer">
      <Link to={`${process.env.PUBLIC_URL}/`} onClick={backtToTop}>
        <AiFillHome />
        {t("home")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/games`} onClick={backtToTop}>
        <IoGameController />
        {t("game")}
      </Link>
      <button onClick={whatsappLink}> {t("join")}</button>
      <Link to={`${process.env.PUBLIC_URL}/promotion`} onClick={backtToTop}>
        <IoGift />
        {t("promotion")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={backtToTop}>
        <AiFillPhone />
        {t("contact")}
      </Link>
    </div>
  );
};

export default withNamespaces()(MobileFooterNav);
