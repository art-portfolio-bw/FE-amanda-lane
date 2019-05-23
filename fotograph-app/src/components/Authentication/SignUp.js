import React from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../actions';

import './SignUp.scss';
import loginHero from '../../styles/login-hero.jpg'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            registerUser: {
                fname: "",
                lname: "", 
                email: "",
                password: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
          registerUser: {
            ...this.state.registerUser,
            [e.target.name]: e.target.value
          }
        });
      };

      register = e => {
        e.preventDefault();
        this.props.register(this.state.registerUser)
        .then(() => {
          this.props.history.push("/user");
        });
      };


    render(){
        return (
            <div className="signup-page">
            <div className="signup-page-container">
                <form className="signup-form" onSubmit={this.register}>
                    <header className="header">
                        <h3>Create Your own photo experience</h3>
                        <h2>Create an Account</h2>
                    </header>
                        <div className="input-container">
                        <div className="name-inputs">
                            <div>
                         <label className="user-label">First Name</label>
                            <input
                            // placeholder="First Name"
                            name="fname"
                            value={this.state.registerUser.fname}
                            onChange={this.handleChange}
                            required
                            />
                            </div>
                            <div>
                            <label className="user-label">Last Name</label>
                            <input 
                            // placeholder="Last Name"
                            name="lname"
                            value={this.state.registerUser.lname}
                            onChange={this.handleChange}
                            required
                            />
                            </div>
                        </div>
                        <label className="user-label">Email</label>
                        <input 
                        // placeholder="Email"
                        name="email"
                        value={this.state.registerUser.email}
                        onChange={this.handleChange}
                        />
                        <label className="user-label">Password</label>
                        <input 
                        // placeholder="Password"
                        name="password"
                        value={this.state.registerUser.password}
                        onChange={this.handleChange}
                        type="password"
                        required
                        />
                        {this.props.error && <p className="error-message">{this.props.error}</p>}
                        <button className="signup-btn">Sign Up</button>
                        <p className="form-footer">Already a member? <Link className='form-links'  to='/login'>Log in.</Link></p>
                        </div>
                </form>
                <img src={loginHero} className="login-hero" alt="girl with camera" />
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isRegistering: state.isRegistering,
    error: state.registationError
})

export default connect(mapStateToProps, { register } )(SignUp);