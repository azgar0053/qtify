import React from "react";
import './navbar.css'

const FeedbackButton=(props)=>{
    return(
        <div className="feedbackBtn">
            <button>{props.text}</button>
        </div>
    )
}

export default FeedbackButton