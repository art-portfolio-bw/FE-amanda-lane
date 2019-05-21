import React from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';
import loginHero from '../../styles/login-hero.jpg'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            credentials: {
                firstName: "",
                lastName: "", 
                email: "",
                password: ""
            }
        }
    }

    render(){
        return (
            <div className="signup-page">
            <div className="signup-page-container">
                <form className="signup-form">
                    <header className="header">
                        <h3>Create Your own photo experience</h3>
                        <h2>Create an Account</h2>
                    </header>
                        <div className="input-container">
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
                        {/* <input 
                        placeholder="Confirm Password"
                        /> */}
                        <button className="signup-btn">Sign Up</button>
                        <p className="form-footer">Already a member? <Link className='form-links'  to='/login'>Log in.</Link></p>
                        </div>
                </form>
                <img src={loginHero} className="login-hero" />
            </div>
            </div>
        )
    }
}

export default SignUp;