import React from "react";
import "./LanguageSelect.scss";
import { MdLanguage } from "react-icons/md";
const LanguageSelect = ({
  langIconClick,
  changeLanguage,
  showLang,
  currentLang,
}) => {
  const className = showLang ? "language-select" : "hide-lang";
  return (
    <div className="language">
      <div onClick={langIconClick} className="language-dropdown">
        <MdLanguage className="icon-language" />
        <span className="current-language">{currentLang.toUpperCase()}</span>
      </div>

      <div className={className}>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("bm")}>Bahasa Malaysia</button>
        <button onClick={() => changeLanguage("cn")}>中文</button>
      </div>
    </div>
  );
};
export default LanguageSelect;
