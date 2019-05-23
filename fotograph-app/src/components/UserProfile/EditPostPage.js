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
        description: 'hello'
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

    updateDescription = async (description, id) => {
      console.log(this.state.description, "new description")
      try { const options = {
        headers: {
          token: 
          localStorage.getItem('token')
        }
      }
      axios.put(`https://artportfoliobw.herokuapp.com/${id}`, {description: this.state.description}, options)
    } catch(err) {
        console.log(err, "error")
      }
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
        this.updateDescription(this.state.newDescription, this.state.item.photoId)
        window.location.reload();
      }

    render(){

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
            >cancel
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