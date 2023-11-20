import React from "react";
import './navbar.css'

const FeedbackButton=(props)=>{
    return(
            <button className='feedbackBtn'>{props.text}</button>
)
}

export default FeedbackButton