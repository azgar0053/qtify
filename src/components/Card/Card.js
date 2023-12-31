import { Chip, Tooltip } from "@mui/material";
import React from "react";
import styles from './Card.module.css'


const Card=( {data, type})=>{
    const getCard=(type)=>{
        switch(type){
            case 'album':{
                const {image,follows, title, songs} = data;
                return(
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="lazy"/>
                                    <div className={styles.chipWrapper}>
                                        <Chip label={`${follows} Follows`}
                                        size="small"
                                        className={styles.Chip}/>
                                    </div>
                                </div>
                                <div className={styles.titleText}>
                                    <p>{title}</p>
                                </div>
                            </div>
                    </Tooltip>
                );
            }
            case 'song':{
                const {image, likes, title} = data;
                return(
                    <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="lazy"/>
                                    <div className={styles.chipWrapper}>
                                        <Chip label={`${likes} Likes`}
                                        size="small"
                                        className={styles.Chip}/>
                                    </div>
                                </div>
                                <div className={styles.titleText}>
                                    <p>{title}</p>
                                </div>
                            </div>
                )

            }
            default :return <></>
        }
    }

    return getCard(type)    
 
}

export default Card;