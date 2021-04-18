import React from "react";
import { withNamespaces } from "react-i18next";
import "./Bank.scss";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.png"
import { BankList, WalletList} from "./BankData";
import { Container } from "react-bootstrap";
const Bank = ({ t }) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} - Bank</title>
        <meta
          name="description"
          content="Easy deposit with Digi, Maxis and Multiple banks support"
        />
        <link rel="canonical" href="https://dato777.com/bank" />
        <meta property="og:title" content={window.compName} />
        <meta property="og:description" content="Easy deposit with Digi, Maxis and Multiple banks support"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dato777.com/bank"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Dato777" />
      </Helmet>
      <section className="bank-page">
        <h2 className="page-title">{t("bank")}</h2>
        <div className="bank-content">
          <div className="bank-group">
            <div className="bank-group-inner">
              <h6 className="bank-desc">{t("bankDesc")}</h6>
              <div className="bank-list">
                {BankList.map((bank, i) => {
                  return <img key={i} src={bank.src} alt={bank.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <h2 className="page-title">{t("ewallet")}</h2>
        <div className="ewallet-content">
          <div className="bank-group">
            <div className="bank-group-inner">
              <h6 className="bank-desc">{t("ewalletDesc")}</h6>
              <div className="ewallet-list">
                {WalletList.map((bank, i) => {
                  return <img key={i} src={bank.src} alt={bank.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default withNamespaces()(Bank);
