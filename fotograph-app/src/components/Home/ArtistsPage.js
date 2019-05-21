import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import './Home.scss';

class ArtistsPage extends Component {
 constructor(props) {
   super(props);
   this.state = {
     artists: []
   };
 }

 componentDidMount() {
   axios
     .get('https://artportfoliobw.herokuapp.com/')
     .then(res => {
       this.setState({ artists: res.data })
      })
     .catch(err => console.log(err));
 }

 // -----------------------------RENDER FUNCTION---------------------------------- //


 render() {
   const recentPosts = this.state.recentPosts;
   console.log(recentPosts)
   return (
     <div className='home-container'>

      <h1 className='section-header'>Popular Artists</h1>
       <div className='recents-container'>
         {recentPosts.slice(13, 19).map( recent => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.email} alt ={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>
            <p className="likes"><i className="far fa-heart"></i> {recent.likes} likes</p>
            <img src={recent.src} key={recent.email} alt={recent.fname} className='recent-posts' />
            <p className="photo-description">{recent.description}</p>
           </div>
         ))}
       </div>

       <h1 className='section-header'>Recent Activity</h1>
       <div className='recents-container'>
         {recentPosts.map((recent, index) => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.email} alt ={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>
            <p className="likes"><i className="far fa-heart"></i> {recent.likes} likes</p>
           <img src={recent.src} key={recent.email} alt={recent.fname} className='recent-posts' />
           <p className="photo-description">{recent.description}</p>
           </div>
         )).reverse().slice(0, 6)}
       </div>
     </div>
   );
 }
}

export default ArtistsPage;