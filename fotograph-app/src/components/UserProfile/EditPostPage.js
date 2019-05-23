import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showUpdate, cancelUpdate } from '../../actions';

import axios from 'axios';
import { axiosWithAuth } from '../Authentication/axiosWithAuth';


import '../Public/SinglePost.scss';

class EditPostPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        item: {},
        description: ''
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

    updateDescription = (description, id) => {
      axiosWithAuth()
      .put(`https://artportfoliobw.herokuapp.com/${id}`, description)
      .then(res => {
        console.log("response:", res)
        this.setState({ 
          description: res.data
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

      
      changeHandler = (e) => {
        this.setState({  
          ...this.state.description,
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = e => {
        e.preventDefault();
        this.updateDescription(this.state.description, this.state.item.photoId)
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
            <div className="description-container">
            <p className="photo-description">{item.description}</p>
            <i class="fas fa-edit" onClick={this.startEdit}></i>
            </div>
            )}
            {this.props.editingDescription && (
            <>
            <label className="edit-label">Edit your description:</label>
            <input 
            value={this.state.description} 
            onChange={this.changeHandler}
            name="description"
            className="edit-description"
            placeholder={item.description}
            />
            <button 
            onClick={this.handleSubmit}
            className="save-edit-btn"
            >save
            </button>
            <button 
            onClick={this.cancelEdit}
            className="cancel-edit-btn"
            >x
            </button>
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