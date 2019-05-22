import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import PopularPosts from './PopularPosts';
import RecentPosts from './RecentPosts';

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


 render() {
   return (
     <div className='home-container'>

      <h1 className='section-header'>Popular Posts</h1>
      <div className='recents-container'>
         {this.state.recentPosts.filter( post => post.likes > 3020 ).map( popular => (
           <PopularPosts popular={popular} />
         ))}
         </div>

         <h1 className='section-header'>Recent Posts</h1>
      <div className='recents-container'>
         {this.state.recentPosts.map( recent => (
           <RecentPosts recent={recent} />
         )).reverse().slice(12, 18)}
         </div>
       </div>

   );
 }
}

export default Home;