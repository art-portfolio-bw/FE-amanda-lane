import React from 'react';
import { Link } from 'react-router-dom';

class RecentPosts extends React.Component{
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
        const id = 1;
        return(
            <div className="post-container">
            <div className="post-header">
              <img 
              src={this.props.recent.avatar} 
              key={this.props.recent.artistId} 
              alt ={this.props.recent.fname} 
              className='user-avatar' 
              />
              <header>{this.props.recent.fname} {this.props.recent.lname}</header>
           </div>
                <p className="likes">
                    <i className={`fas fa-heart ${this.state.liked ? `liked` : null}`} onClick={this.toggleLikes}>
                </i> {this.props.recent.likes + this.state.likes}</p>
                <Link to={`/post/${id}`}>
                <img 
                src={this.props.recent.src} 
                key={this.props.recent.artistId} 
                alt={this.props.recent.fname} 
                className='recent-posts' 
                />
                 </Link>
           <p className="photo-description">{this.props.recent.description}</p>
          </div>
        )
    }
}

export default RecentPosts;
