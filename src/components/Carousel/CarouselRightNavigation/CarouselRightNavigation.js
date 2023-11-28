import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from './carouselRightNavigation.module.css'
import {ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";


export function  CarouselRightNavigation(){
    const swiper=useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd)
        });
    }, []);
    return(
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}