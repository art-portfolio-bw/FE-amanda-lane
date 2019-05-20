import React from 'react';

import './SignUp.scss';
import loginHero from '../../styles/login-hero.jpg'

function SignUp(){
    return (
        <div className="signup-page">
        <div className="signup-page-container">
            <form className="signup-form">
                <header className="header">
                    <h3>Create Your own photo experience</h3>
                    <h2>Create an Account</h2>
                </header>
                    <div className="name-inputs">
                        <input
                        placeholder="First Name"
                        />
                        <input 
                        placeholder="Last Name"
                        />
                    </div>
                    <input 
                    placeholder="Email"
                    />
                    <input 
                    placeholder="Password"
                    />
                    <input 
                    placeholder="Confirm Password"
                    />
                    <button className="signup-btn">Sign Up</button>
                    <p>Already a member? Log in.</p>
            </form>
            <img src={loginHero} className="login-hero" />
        </div>
        </div>
    )
}

export default SignUp;