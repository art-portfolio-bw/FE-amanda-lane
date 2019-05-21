import React from 'react';
import { Link, NavLink } from "react-router-dom";

import './NavBar.scss';
import logo from '../../styles/LOGO.png';

function NavBar(){
    return (
        <nav className="navigation-bar">
            <Link className="logo" to="/"><img src={logo} alt="fotograph logo" /></Link>
            <form className="search-bar">
            <button className="search-btn">+</button>
            <input 
            placeholder="search"
            className="search-input"
            />
            </form>
            <NavLink className="nav-links" to="/collections">Photo Collections</NavLink>{' '}
            <NavLink className="nav-links" to="/artists">Artists</NavLink>{' '}
            <NavLink className="nav-links" to="/about">About</NavLink>{' '}
            <div className="log-link-container">
            <Link className="log-links" to="/login">Log In</Link>{' '}
            <Link className="log-links" to="/">Log Out</Link>{' '}
            </div>
        </nav>
    )
}

export default NavBar;