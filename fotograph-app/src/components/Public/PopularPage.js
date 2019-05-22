import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import PopularPosts from './PopularPosts';

import './Home.scss';

class Home extends Component {
 constructor(props) {
   super(props);
   this.state = {
     popularPosts: []
   };
 }

 componentDidMount() {
   axios
     .get('https://artportfoliobw.herokuapp.com/')
     .then(res => {
       this.setState({ popularPosts: res.data })
      })
     .catch(err => console.log(err));
 }


 render() {
   return (
     <div className='home-container'>

      <h1 className='section-header'>Popular Posts</h1>
      <div className='recents-container'>
         {this.state.popularPosts.filter( post => post.likes > 3020 ).map( popular => (
           <PopularPosts popular={popular} />
         ))}
         </div>
       </div>

   );
 }
}

export default Home;