import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyPosts, showUpdate, cancelUpdate } from '../../actions';
import { withRouter } from 'react-router-dom';

import addbtn from '../../styles/addbtn.svg';

import "./UserHomePage.scss";

class UserHomePage extends React.Component{

    componentDidMount() {
        this.props.fetchMyPosts();
    }
    
    startEdit = () => {
        this.props.showUpdate();
    }

    cancelEdit = (e) => {
        e.preventDefault();
        this.props.cancelUpdate();
    }

    render(){
        console.log("Users: ", this.props.user)
        const id = 1;
        return (
            <div className="user-home-page">

            <nav>
                <div className="user-welcome-container">
                    <img src={this.props.user.avatar} className="avatar-img" alt={this.props.user.name} />
                    <h2>{this.props.user.msg}</h2>
                </div>
                <Link to="/create-post">Create new post 
                    <img className="create-post-btn" src={addbtn} alt="add new post" />
                </Link>
            </nav>
              <h3 className='section-header'>My Posts</h3>
                <div className='recents-container'>
                    {this.props.user.photos.map( photo => (
                    <div className="post-container">

                    
                    <Link to={`/post/${id}`}>
                    <img src={photo.src} key={photo.email} alt={photo.fname} className='recent-posts' />
                    </Link>
                    <p className="likes"><i className="fas fa-heart"></i> {photo.likes}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.user,
    editingDescription: state.editingDescription
})

export default withRouter(connect(mapStateToProps, { fetchMyPosts, showUpdate, cancelUpdate } )(UserHomePage));


                    {/* <span>
                    {!this.props.editingDescription && (
                    <>
                    <p className="photo-description">{photo.description}</p>
                    <i class="fas fa-edit" onClick={this.startEdit}></i>
                    </>
                    )}
                    {this.props.editingDescription && (
                    <>
                    <input value={photo.description} />
                    <button>+</button>
                    <button onClick={this.cancelEdit}>x</button>
                    </>
                    )}
                    </span> */}