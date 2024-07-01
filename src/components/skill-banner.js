import React, { useState } from "react";
import xp1_backgroud from "assets/card-text-pic-bank-background.jpg";
import xp2_backgroud from "assets/card-text-pic-bank-background-1.jpg";

export const SkillBanner = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    if (activeCard === card) {
      setActiveCard(null);
    } else {
      setActiveCard(card);
    }
    console.log(activeCard);
  };

  const isMobile = window.innerWidth <= 960;
  return (
    <div className="skill-page">
      <div className="skill-banner">
        <div
          className={`card-text-pic ${activeCard === "card1" ? "active" : ""}`}
          onClick={() => isMobile && handleCardClick("card1")}
        >
          <img
            className="card-text-pic__image"
            src={xp1_backgroud}
            alt=""
            loading="lazy"
          />
          <div className="card-text-pic-content">
            <h2 className="card-text-pic-content__title">
              Data scientist at Crédit Agricole bank
            </h2>
            <p className="card-text-pic-content__text">
              Anonymization of personal data existing inside thousands of user
              emails using Google's Transformer and BERT models.
            </p>
            <a className="card-text-pic-content__link button" href="/xps#xp1">
              Find out more
            </a>
          </div>
        </div>
        <div
          className={`card-text-pic ${activeCard === "card2" ? "active" : ""}`}
          onClick={() => isMobile && handleCardClick("card2")}
        >
          <img
            className="card-text-pic__image"
            src={xp2_backgroud}
            alt=""
            loading="lazy"
          />
          <div className="card-text-pic-content">
            <h2 className="card-text-pic-content__title">
              Python & Backend developer at Société Générale bank
            </h2>
            <p className="card-text-pic-content__text">
              Automation of banking network workflows using python APIs
            </p>
            <a className="card-text-pic-content__link button" href="/xps#xp2">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
