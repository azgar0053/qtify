import React from "react";
import Logo from "./LogoComp";
import SearchBar from "./SearchBar";
import FeedbackButton from "./feedBackButton";
import './navbar.css'

const Navbar =()=>{
    return(
        <nav className='navBar'>
            <Logo/>
            <SearchBar/>
            <FeedbackButton text={'Give Feedback'}/>
        </nav>
    )
}


export default Navbar;