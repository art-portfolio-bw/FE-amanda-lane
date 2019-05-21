import React from 'react';
import { Link } from 'react-router-dom';
import addbtn from '../../styles/addbtn.svg';

import axios from 'axios';

import "./UserHomePage.scss";

class UserHomePage extends React.Component{
    constructor() {
    super();
    this.state = {
        myRecentPosts: []
     }
    }

    componentDidMount() {
        axios
        .get('https://artportfoliobw.herokuapp.com/')
        .then(res => {
            this.setState({ 
                myRecentPosts: res.data
             })
        })
        .catch( err => console.log(err))
    }

    render(){
        return (
            <div className="user-home-page">
            <nav>
                <Link to="/">Create new post 
                    <img className="create-post-btn" src={addbtn} alt="add new post" />
                </Link>
            </nav>
              <h1 className='section-header'>My Posts</h1>
                <div className='recents-container'>
                    {this.state.myRecentPosts.slice(23, 29).map((recent, index) => (
                    <div className="post-container">
                    <img src={recent.src} key={index} alt={recent.fname} className='recent-posts' />
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserHomePage;