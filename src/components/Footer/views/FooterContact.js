import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

const FooterContact = ({ contact, footerLink, t, navData }) => {
  return (
    <div className="footer-col">
      <div className="contact-us">
        <div className="footer-title">
          <span>{t("contactus")}</span>
          <span className='hide-mobile'>{t("quicklink")}</span>
        </div>
        <div className="footer-content">
          <div className="footer-content-left">
            {contact.map((contact) => {
              return (
                <div
                  key={contact.id}
                  className="footer-contact"
                  onClick={() => footerLink(contact.method)}
                >
                  <span>{contact.icon}</span>
                </div>
              );
            })}
          </div>
          <div className="footer-content-right quick-link">
            {navData.map((link) => {
              return (
                <div key={link.id} className="footer-link">
                  <Link to={`${process.env.PUBLIC_URL}${link.url}`}>
                    {t(link.name)}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(FooterContact);
