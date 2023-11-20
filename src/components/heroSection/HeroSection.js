import React from "react";
import style from './hero.module.css'
import heroImg from '../../assets/vibrating-headphone 1.png'
const HeroSection=()=>{
    return(
        <div className={style.heroSection}>
            <div className={style.heroInnerSection}>
                <div  className={style.heroText}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
                </div>
                <img src={heroImg} alt="heroImg"/>
            </div>

        </div>
    )
}

export default HeroSection