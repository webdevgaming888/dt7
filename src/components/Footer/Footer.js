import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";
import FooterBank from "./views/FooterBank";
// import WhyUs from "./views/WhyUs";
import { BankList, WalletList } from "../../page/Bank/BankData";
import FooterContact from "./views/FooterContact";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
const Footer = () => {
  const [link] = useState([
    { id: 1, url: "/", name: "home" },
    { id: 2, url: "/games", name: "game" },
    { id: 3, url: "/promotion", name: "promotion" },
    { id: 4, url: "/about", name: "about" },
    { id: 5, url: "/contact", name: "contact" },
  ]);
  const [contact] = useState([
    { id: 1, phoneNo: window.phone, icon: <FaWhatsapp /> },
    { id: 2, phoneNo: window.phone, icon: <FaTelegram /> },
  ]);

  const footerLink = (method) => {
    switch (method) {
      case "Whatsapp":
        window.location.href = window.whatsapp;
        break;
      case "Telegram":
        window.location.href = window.telegram;
        break;
      default:
        window.location.href = window.whatsapp;
        break;
    }
  };

  return (
    <footer className="footer">
      <Container className="footer-container">
        {/* <WhyUs  /> */}
        <FooterBank bank={BankList} wallet={WalletList} />
        <FooterContact
          contact={contact}
          footerLink={footerLink}
          navData={link}
        />
      </Container>
    </footer>
  );
};
export default Footer;
