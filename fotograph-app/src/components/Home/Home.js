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
  //  console.log(recentPosts)
   return (
     <div className='home-container'>

      <h1 className='section-header'>Popular Posts</h1>
       <div className='recents-container'>
         {recentPosts.slice(35, 41).map( recent => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.artistId} alt ={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>
            <p className="likes"><i className="far fa-heart"></i> {recent.likes} likes</p>
            <img src={recent.src} key={recent.artistId} alt={recent.fname} className='recent-posts' />
            <p className="photo-description">{recent.description}</p>
           </div>
         ))}
       </div>

       <h1 className='section-header'>Recent Posts</h1>
       <div className='recents-container'>
         {recentPosts.map( recent => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.artistId} alt ={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>
            <p className="likes"><i className="far fa-heart"></i> {recent.likes} likes</p>
           <img src={recent.src} key={recent.artistId} alt={recent.fname} className='recent-posts' />
           <p className="photo-description">{recent.description}</p>
           </div>
         )).reverse().slice(20, 26)}
       </div>
     </div>
   );
 }
}

export default Home;