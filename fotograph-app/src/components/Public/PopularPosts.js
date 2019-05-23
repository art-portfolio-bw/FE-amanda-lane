import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            liked: false
        }
    }

     toggleLikes = () => {
  if(!this.state.liked){
      this.setState(prevState => ({
          likes: prevState.likes + 1, 
          liked: !prevState.liked
      }))} else if (this.state.liked) {
          this.setState(prevState => ({ 
              likes: prevState.likes - 1,
              liked: !prevState.liked
           }))
      }
}

   

    render(){
        console.log('popular', this.props.popular.photoId)
    return (
 
        <div className="post-container">
        <div className="post-header">
          <img 
          src={this.props.popular.avatar} 
          key={this.props.popular.artistId} 
          alt ={this.props.popular.fname} 
          className='user-avatar' 
          />
          <header>{this.props.popular.fname} {this.props.popular.lname}</header>
       </div>
            
            <Link to={`/post/${this.props.popular.photoId}`}>
            <img 
            src={this.props.popular.src} 
            key={this.props.popular.artistId} 
            alt={this.props.popular.fname} 
            className='recent-posts' 
            />
            </Link>
            <p className="likes">
                <i className={`fas fa-heart ${this.state.liked ? `liked` : null}`} 
                onClick={this.toggleLikes}>
            </i> {this.props.popular.likes + this.state.likes}
            </p>
      </div>

    )
    }
}

export default Post;