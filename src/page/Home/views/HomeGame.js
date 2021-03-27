import React from 'react'
import "./HomeGame.scss"
import home918 from "../../../assests/games/home-918.png";
import homelive22 from "../../../assests/games/home-live22.png"
import homepussy888 from "../../../assests/games/home-pussy888.png"
import homexe88 from "../../../assests/games/home-xe88.png"
import homemega888 from "../../../assests/games/home-mega888.png"
import homeevo888 from "../../../assests/games/home-evo888.png"
import { AiTwotoneFire } from "react-icons/ai"
const HomeGame = () => {
    return (
        <div className='home-game'>
            <h1 className='home-title'> <AiTwotoneFire className="home-title-icon" />Hot Game</h1>
            <div className='home-game-content'>
                <img src={home918} alt="game" />
                <img src={homelive22} alt="game" />
                <img src={homepussy888} alt="game" />
                <img src={homexe88} alt="game" />
                <img src={homemega888} alt="game" />
                <img src={homeevo888} alt="game" />
            </div>
        </div>
    )
}

export default HomeGame;
