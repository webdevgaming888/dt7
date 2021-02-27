import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss"
import { withNamespaces } from 'react-i18next';
// import {AiFillHome,AiFillPhone, AiFillBank} from "react-icons/ai"
// import {IoGameController, IoGift} from "react-icons/io5"
// import { FaUserFriends} from "react-icons/fa"
const Navbar = ({t}) => {
    return(
        <nav>  
            <Link to={`${process.env.PUBLIC_URL}/`}>{t("home")}</Link>
            <Link to={`${process.env.PUBLIC_URL}/games`}>{t("game")}</Link>
            <Link to={`${process.env.PUBLIC_URL}/promotion`}>{t("promotion")}</Link>
            <Link to={`${process.env.PUBLIC_URL}/bank`}>{t("bank")}</Link>
            <Link to={`${process.env.PUBLIC_URL}/about`}>{t("about")}</Link>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>{t("contact")}</Link>
        </nav>
    )
}

export default withNamespaces()(Navbar);