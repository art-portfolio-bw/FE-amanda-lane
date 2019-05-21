import React from 'react';
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
              <h1 className='section-header'>Recent Photography Posts</h1>
                <div className='recents-container'>
                    {this.state.myRecentPosts.slice(0, 6).map((recent, index) => (
                    <div className="post-container">
                        <div className="post-header">
                        <img src={recent.avatar} key={recent.fname} alt ={recent.fname} className='user-avatar' />
                        <header>{recent.fname} {recent.lname}</header>
                        </div>
                    <img src={recent.src} key={index} alt={recent.fname} className='recent-posts' />
                    </div>
                    ))}
                </div>
                <h1 className='section-header'>Popular Photography Posts</h1>
                <div className='recents-container'>
                    {this.state.myRecentPosts.slice(13, 19).map((recent, index) => (
                    <div className="post-container">
                        <div className="post-header">
                        <img src={recent.avatar} key={recent.lname} alt ={recent.fname} className='user-avatar' />
                        <header>{recent.fname} {recent.lname}</header>
                        </div>
                        <img src={recent.src} key={index} alt={recent.fname} className='recent-posts' />
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserHomePage;