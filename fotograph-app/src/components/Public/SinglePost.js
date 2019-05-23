import React from 'react';
import axios from 'axios';

import './SinglePost.scss';

class SinglePost extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        item: {}
      }
    }

    componentDidMount() {
      axios
      .get(`https://artportfoliobw.herokuapp.com/${this.props.match.params.photoId}`)
      .then(res => {
        console.log(res)
        this.setState({ 
          item: res.data
        })
      })
      .catch( err => {
        console.log(err)
      })
    }

    render(){
      console.log("item", this.state.item)
      console.log("props: ", this.props)

      const item = this.state.item;
    return (
        <div className="single-post-page">
          <div className="post-container">
            <header>
                <img src={item.avatar} alt={`${item.fname} ${item.lname}`} className="avatar-img" />
                <p>{item.fname} {item.lname}</p>
            </header>
          <div>
             <p className="likes"><i className="fas fa-heart"></i> {item.likes}</p>
          </div>
            <img src={item.src} alt={item.description} className="main-img" />
            <p className="description">{item.description}</p>
          </div>
        </div>
    )
  } 
}

export default SinglePost;