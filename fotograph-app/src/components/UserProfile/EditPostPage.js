import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showUpdate, cancelUpdate } from '../../actions';

import '../Public/SinglePost.scss';

class EditPostPage extends React.Component{
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

    startEdit = () => {
      this.props.showUpdate();
  }

  cancelEdit = (e) => {
      e.preventDefault();
      this.props.cancelUpdate();
  }

    render(){
      console.log("item", this.state.item)
      console.log("props: ", this.props)

      const item = this.state.item;
    return (
      <div className="single-post-page">
        <div className="single-post-container">
          <div className="post-container">
            <header>
                <img src={item.avatar} alt={`${item.fname} ${item.lname}`} className="avatar-img" />
                <p>{item.fname} {item.lname}</p>
            </header>
          <div>
             <p className="likes"><i className="fas fa-heart"></i> {item.likes}</p>
          </div>
            <img src={item.src} alt={item.description} className="main-img" />
            <span>
            {!this.props.editingDescription && (
            <>
            <p className="photo-description">{item.description}</p>
            <i class="fas fa-edit" onClick={this.startEdit}></i>
            </>
            )}
            {this.props.editingDescription && (
            <>
            <input value={item.description} />
            <button>+</button>
            <button onClick={this.cancelEdit}>x</button>
            </>
            )}
            </span>
          </div>
        </div>
      </div>
    )
  } 
}

const mapStateToProps = state => ({ 
  user: state.user,
  editingDescription: state.editingDescription
})

export default withRouter(connect(mapStateToProps, { showUpdate, cancelUpdate } )(EditPostPage));