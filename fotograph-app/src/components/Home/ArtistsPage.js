import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import './ArtistsPage.scss';

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
   const artists = this.state.artists;
   console.log(artists)
   return (
     <div className='artists-page-container'>

<h1 className='section-header'>Discover New Artists</h1>
       <div className='recents-container'>
         {artists.map((recent, index) => (
           <div className="post-container">
             <div className="post-header">
               <img 
               src={recent.avatar} 
               key={recent.email} 
               alt={recent.fname} 
               className='user-avatar' 
               />
               <header>{recent.fname} {recent.lname}</header>
            </div>
            <img 
            src={recent.src} 
            key={recent.artistId} 
            alt={recent.fname} 
            className='recent-posts' 
            />
       <p className="photo-description">{recent.description}</p>
           </div>
         )).reverse()}
       </div>
       
    </div>
   );
 }
}

export default ArtistsPage;