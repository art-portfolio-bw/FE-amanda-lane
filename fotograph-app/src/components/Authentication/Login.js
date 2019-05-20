import React from 'react';

import './SignUp.scss';
import loginHero from '../../styles/login-hero.jpg'

function Login(){
    return (
        <div className="signup-page">
        <div className="signup-page-container">
            <form className="signup-form">
                <header className="header">
                    <h3>Welcome Back!</h3>
                    <h2>Create an Account</h2>
                </header>
                    <div className="input-container">
                    <input 
                    placeholder="Username"
                    />
                    <input 
                    placeholder="Password"
                    />
                    <button className="signup-btn">Log In</button>
                    <p className="form-footer">Not registered? Create an Account.</p>
                    </div>
            </form>
            <img src={loginHero} className="login-hero" />
        </div>
        </div>
    )
}

export default Login;