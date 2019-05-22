import React from 'react';

function Post(props){
    console.log('props', props)
    return (
 
        <div className="post-container">
        <div className="post-header">
          <img 
          src={props.popular.avatar} 
          key={props.popular.artistId} 
          alt ={props.popular.fname} 
          className='user-avatar' 
          />
          <header>{props.popular.fname} {props.popular.lname}</header>
       </div>
            <p className="likes">
                <i className={`far fa-heart ${props.liked ? `liked` : null}`} onClick={props.toggleLikes}>
            </i> {props.popular.likes + props.likes} likes</p>
            <img 
            src={props.popular.src} 
            key={props.popular.artistId} 
            alt={props.popular.fname} 
            className='recent-posts' 
            />
       <p className="photo-description">{props.popular.description}</p>
      </div>

    )
}

export default Post;