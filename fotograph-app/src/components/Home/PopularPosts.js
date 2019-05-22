import React from 'react';

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
            <p className="likes">
                <i className={`far fa-heart ${this.state.liked ? `liked` : null}`} onClick={this.toggleLikes}>
            </i> {this.props.popular.likes + this.state.likes} likes</p>
            <img 
            src={this.props.popular.src} 
            key={this.props.popular.artistId} 
            alt={this.props.popular.fname} 
            className='recent-posts' 
            />
       <p className="photo-description">{this.props.popular.description}</p>
      </div>

    )
    }
}

export default Post;