import React from "react";
import SearchIcon from '../../assets/SearchIcon.svg'
import './navbar.css'

const SearchBar=()=>{
    return(
        <div className="searchBar">
            <input placeholder="     Search a album of your choice"/>
            <button><img src={SearchIcon} alt="searchIcon"/></button>
        </div>
    )
}  

export default SearchBar