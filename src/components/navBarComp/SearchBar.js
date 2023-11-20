import React from "react";
import SearchIcon from '../../assets/SearchIcon.svg'
import './navbar.css'

const SearchBar=()=>{

    const formSubmit=(e)=>{
        e.preventDefault()
    }
    return(
            <form className="searchBar" onSubmit={formSubmit}>
            <input placeholder="     Search a album of your choice"/>
            <button><img src={SearchIcon} alt="searchIcon" type="submit"/></button>
        </form>
    )
}  

export default SearchBar