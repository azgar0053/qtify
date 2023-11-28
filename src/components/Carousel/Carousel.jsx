import React, { useEffect } from "react";
import styles from './Carousel.module.css'
import {Navigation} from "swiper";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import CarouselLeftNavigation from './CarouselLeftnavigation/CarouselLeftNavigation'
import {CarouselRightNavigation} from './CarouselRightNavigation/CarouselRightNavigation'
import 'swiper/css';




const Carousel=({data, renderComponent})=>{

    const Controls=({data})=>{
        const swiper = useSwiper(data, renderComponent);
        useEffect(()=>{
        swiper.slideTo(0, 1);
        },[data]);
    }

    return(
        <div className={styles.wrapper}>
            <Swiper
            style={{padding:'0px 20px'}}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={'auto'}
            spaceBetween={40}
            allowTouchMove
            >
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {
            data.map((ele)=>{
                return(
                <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
                )
            })
            }
            </Swiper>  
        </div>
    )
}

export default Carousel