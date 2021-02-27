import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../assests/navigationbar/logo.jpg";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className='logo-link'>
      <img src={LogoImg} alt="company" className="logo-img" />
    </Link>
  );
};
export default Logo;
