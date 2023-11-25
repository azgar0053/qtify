import React, { useState } from "react";
import styles from './Section.module.css'
import {CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section=({title, data, type})=>{
    const [carouselToggle, setCarouselToggle]= useState(true)

    const toggleChange =()=>{
        setCarouselToggle((prevState)=> !prevState)
    }
    return(
        <div className={styles.mainSection}>
            <div  className={styles.sectionHeader}>
                <h3 style={{margin:'12px'}}>{title}</h3>
                <h4 style={{margin:'12px'}} className={styles.toggleText} onClick={toggleChange}>{!carouselToggle?'Collapse All':'Show all'}</h4>
            </div>
        
        {data.length===0?(
        <div className={styles.circularProgress}><CircularProgress/></div>):(
            <div className={styles.cardWrapper}>
             {!carouselToggle?(
             <div className={styles.wrapper}> 
                {data.map((ele)=>(
                    <Card key={ele.id} data={ele} type={type}/>
                ))}
                </div>):
                    <Carousel data={data}/>
                    }
            </div>
        )}
        </div>
    )
}
export default Section;