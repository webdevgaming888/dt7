import React from "react";
import "./Game.scss";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.jpg";
import { GameList } from "./GameImageData";
import { Container } from "react-bootstrap";
const Game = ({ t }) => {
  function gameLinkRedirect(link) {
    window.location.href = link;
  }
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} - Games</title>
        <meta
          name="description"
          content="Dato777 Best Slots Machine, and games to win"
        />
        <link rel="canonical" href="https://dato777.net/games" />
        <meta property="og:title" content={window.compName} />
        <meta
          property="og:description"
          content="Dato777 Best Slots Machine, and games to win"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dato777.net/games" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Dato777" />
      </Helmet>
      <section className="game-page">
        <h2 className="page-title"> {t("game")}</h2>
        <div className="game-content">
          {GameList.map((game) => {
            return (
              <div key={game.id} className="game-card">
                <div className="game-card-inner">
                  <div className="game-left">
                    <img src={game.gameLogo} alt={game.gameName} />
                  </div>

                  <div className="game-button-group">
                    <button className='btn-agent' onClick={() => gameLinkRedirect(game.agentURL)}>
                      {t("agentLink")}
                    </button>
                    <button onClick={() => gameLinkRedirect(game.androidURL)}>
                      {t("androidDL")}
                    </button>
                    <button onClick={() => gameLinkRedirect(game.iosURL)}>
                      {t("iosDL")}
                    </button>
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

export default withNamespaces()(Game);
