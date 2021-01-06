import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';


import './Header.css';
function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className ="header__icon"
                alt ="airbnb-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
                />
            </Link>
            

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
                
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <KeyboardArrowDownIcon />
                <Avatar />
            </div>
        </div>

        
    )
}

export default Header
