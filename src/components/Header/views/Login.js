import React from "react";
import "./Login.scss";
import LanguageSelect from "./LanguageSelect";
export const Login = ({ langIconClick, changeLanguage, showLang, whatsappLink, currentLang }) => {
  return (
    <div className="login">
        <button className="login-btn" onClick={(e)=>whatsappLink(e)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </button>
      <LanguageSelect
        langIconClick={langIconClick}
        changeLanguage={changeLanguage}
        showLang={showLang}
        currentLang={currentLang}
        
      />
    
    </div>
  );
};
