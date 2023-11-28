import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from './CarouselLeftnavigation.module.css';
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

function  CarouselLeftNavigation(){
    const swiper=useSwiper();
    const [isBeginning, setIsbeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsbeginning(swiper.isBeginning)
        });
    }, [swiper]);
    return(
        <div className={styles.leftNavigation}>
            {
                !isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>
            }
        </div>
    )
}

export default CarouselLeftNavigation