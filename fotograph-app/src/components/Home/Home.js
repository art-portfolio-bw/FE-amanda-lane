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
   return (
     <div className='home-container'>
       <h1 className='section-header'>Recent Photography Posts</h1>
       <div className='recents-container'>
         {recentPosts.slice(0, 12).map((recent, index) => (
           <img src={recent.src} key={index} alt={recent.fname} className='recent-posts' />
         ))}
       </div>
       <h1 className='section-header'>Popular Photography Posts</h1>
       <div className='recents-container'>
         {recentPosts.slice(13, 25).map((recent, index) => (
           <img src={recent.src} key={index} alt={recent.fname} className='recent-posts' />
         ))}
       </div>
     </div>
   );
 }
}

export default Home;