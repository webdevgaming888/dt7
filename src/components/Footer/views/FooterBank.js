import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

const FooterBank = ({ bank, wallet, t }) => {
  function backtoTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="footer-col">
      <div className="footer-bank">
        <div className="footer-title"><span>{t("bank")}</span><span className='hide-mobile'>{t("ewallet")}</span></div>
        <div className="footer-content">
          <div className="footer-content-left">
            {bank.map((item, i) => {
              return (
                <Link
                  key={i}
                  onClick={backtoTop}
                  to={`${process.env.PUBLIC_URL}/bank`}
                >
                  <img src={item.src} alt={"bank"} />
                </Link>
              );
            })}
          </div>
          <div className="footer-content-right">
            {wallet.map((item, i) => {
              return (
                <Link
                  key={i}
                  onClick={backtoTop}
                  to={`${process.env.PUBLIC_URL}/bank`}
                >
                  <img src={item.src} alt={"bank"} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(FooterBank);
