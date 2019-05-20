import React from 'react';
import { Link } from "react-router-dom";

import './NavBar.scss';
import logo from '../../styles/LOGO.png';

function NavBar(){
    return (
        <nav className="navigation-bar">
            <img src={logo} className="logo" />
            <form className="search-bar">
            <button className="search-btn">+</button>
            <input 
            placeholder="search"
            className="search-input"
            />
            </form>
            <Link className="nav-links" to="/">Photo Collections</Link>{' '}
            <Link className="nav-links" to="/">Artists</Link>{' '}
            <Link className="nav-links" to="/">About</Link>{' '}
            <div className="log-link-container">
            <Link className="log-links" to="/">Log In</Link>{' '}
            <Link className="log-links" to="/">Log Out</Link>{' '}
            </div>
        </nav>
    )
}

export default NavBar;