import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Post from './PopularPosts';

import './Home.scss';

class Home extends Component {
 constructor(props) {
   super(props);
   this.state = {
     recentPosts: [],
    //  liked: false,
    //  likes: null
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

//  toggleLikes = () => {
//   if(!this.state.liked){
//       this.setState(prevState => ({
//           likes: prevState.likes + 1, 
//           liked: !prevState.liked
//       }))} else if (this.state.liked) {
//           this.setState(prevState => ({ 
//               likes: prevState.likes - 1,
//               liked: !prevState.liked
//            }))
//       }
// }

 render() {
   return (
     <div className='home-container'>

      <h1 className='section-header'>Popular Posts</h1>
      <div className='recents-container'>
         {this.state.recentPosts.slice(47, 53).map( popular => (
           <Post 
            // toggleLikes={this.toggleLikes}
            // likes={this.state.likes}
            // liked={this.state.liked}
            popular={popular}
           />
         ))}
         </div>
         
      

       <h1 className='section-header'>Recent Posts</h1>
       <div className='recents-container'>
         {this.state.recentPosts.map( recent => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.artistId} alt ={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>
            <p className="likes"><i className="far fa-heart liked"></i> {recent.likes} likes</p>
           <img src={recent.src} key={recent.artistId} alt={recent.fname} className='recent-posts' />
           <p className="photo-description">{recent.description}</p>
           </div>
         )).reverse().slice(3, 9)}
       </div>
       </div>

   );
 }
}

export default Home;