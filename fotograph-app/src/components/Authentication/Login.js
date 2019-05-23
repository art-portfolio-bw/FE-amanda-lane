import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions';

import './SignUp.scss';
import loginHero from '../../styles/login-hero.jpg'

class Login extends React.Component{
    state = {
        credentials: {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
          this.props.history.push("/user");
        });
      };

    render(){
    return (
        <div className="signup-page">
        <div className="signup-page-container">
            <form className="signup-form" onSubmit={this.login}>
                <header className="header">
                    <h3>Welcome Back!</h3>
                    <h2>Login</h2>
                </header>
                    <div className="input-container">
                    <label className="user-label">Username (email)</label>
                    <input 
                    // placeholder="Username/Email"
                    onChange={this.handleChange}
                    value={this.state.credentials.email}
                    name="email"
                    required
                    />
                    <label className="user-label">Password</label>
                    <input 
                    // placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.credentials.password}
                    name="password"
                    type="password"
                    required
                    />
                    {this.props.error && <p className="error-message">{this.props.error}</p>}
                    <button onClick={this.login} className="signup-btn">Log In</button>
                    <p className="form-footer">Not registered? 
                    <Link className='form-links' to='/sign-up'> Create an Account.</Link></p>
                    </div>
            </form>
            <img src={loginHero} className="login-hero" alt="girl with camera" />
        </div>
        </div>
    )
    }
}

const mapStateToProps = state => ({  
    loggingIn: state.LoggingIn,
    error: state.loginError
})

export default connect(mapStateToProps, { login } )(Login);