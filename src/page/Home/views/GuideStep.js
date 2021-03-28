import React from "react";
import "./GuideStep.scss";
import {withNamespaces} from "react-i18next";
import { AiFillQuestionCircle } from "react-icons/ai"
const GuideStep = ({ guide, t }) => {
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (

      <div className='home-guide'>
        <h1 className='home-title'> <AiFillQuestionCircle className='home-title-icon'/>How to play?</h1>
        <div className='home-guide-content'>
        {guide.map((step) => {
        return (
          <div key={step.id} className="guide-card">
            <div className="guide-wrapper">
              <span className="guide-step">{step.id}</span>
              <span className="guide-title">{t(step.title)}</span>
            </div>
            <img onClick={whatsappLink} src={step.src} alt={step.title} className='guide-img'/>
          </div>
        );
      })}
        </div>

      </div>

  );
};
export default withNamespaces()(GuideStep);
