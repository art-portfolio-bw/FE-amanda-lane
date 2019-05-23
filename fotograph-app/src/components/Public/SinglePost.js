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
    return (
        <div className="single-post-page">I'm single post page
          <p>{this.state.item.fname}</p>
        </div>
    )
  } 
}

export default SinglePost;