import React, { useEffect, useState } from "react";
import "./Login.scss";
import LanguageSelect from "./LanguageSelect";
export const Login = ({
  langIconClick,
  changeLanguage,
  showLang,
  whatsappLink,
  currentLang,
}) => {

  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      setCurrentTime(dateTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="login">
      <div className="login-right">
        <button className="login-btn" onClick={(e) => whatsappLink(e)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
        <button className="register-btn" onClick={(e) => whatsappLink(e)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </button>
        <LanguageSelect
          langIconClick={langIconClick}
          changeLanguage={changeLanguage}
          showLang={showLang}
          currentLang={currentLang}
        />
      </div>
      <div className="header-time">{currentTime} (GMT+8)</div>
    </div>
  );
};
