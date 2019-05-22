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

<h1 className='section-header'>New Artists</h1>
       <div className='recents-container'>
         {artists.map((recent, index) => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.email} alt={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>
           </div>
         )).reverse().slice(0, 12)}
       </div>

      <h1 className='section-header'>Popular Artists</h1>
       <div className='recents-container'>
         {artists.slice(0, 12).map( recent => (
           <div className="post-container">
             <div className="post-header">
               <img src={recent.avatar} key={recent.email} alt ={recent.fname} className='user-avatar' />
               <header>{recent.fname} {recent.lname}</header>
            </div>  
           </div>
         ))}
       </div>
     </div>
   );
 }
}

export default ArtistsPage;