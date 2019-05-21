import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Link, NavLink } from "react-router-dom";

import './NavBar.scss';
import logo from '../../styles/LOGO.png';

function NavBar(props){
    console.log(props)

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
            {props.loggedIn && <NavLink className="nav-links" to="/user"> My Photo Collection</NavLink>}
            <NavLink className="nav-links" to="/artists">Artists</NavLink>{' '}
            <NavLink className="nav-links" to="/about">About</NavLink>{' '}
            <div className="log-link-container">
            {props.loggedIn ? (
                <Link className="log-links" to="/">Log Out</Link>
            ) : 
             (
                <Link className="log-links" to="/login" onClick={logout}>Log In/Sign Up</Link>
            )}
            </div>
        </nav>
    )
}

function logout(){
    return localStorage.clear();
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

export default withRouter(connect(mapStateToProps, {} )(NavBar));