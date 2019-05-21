import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import './Home.scss';

class Home extends Component {
 constructor(props) {
   super(props);
   this.state = {
     recentPosts: []
   };
 }

 componentDidMount() {
   axios
     .get('https://artportfoliobw.herokuapp.com/')
     .then(res => {
       this.setState({ recentPosts: res.data })
      })
     .catch(err => console.log(err));
 }

 // -----------------------------RENDER FUNCTION---------------------------------- //


 render() {
   const recentPosts = this.state.recentPosts;
   console.log(recentPosts)
   return (
     <div className='home-container'>
       <h1 className='section-header'>Recent Photography Posts</h1>
       <div className='recents-container'>
         {recentPosts.slice(0, 6).map((recent, index) => (
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
         {recentPosts.slice(13, 19).map((recent, index) => (
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
   );
 }
}

export default Home;