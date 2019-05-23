import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyPosts } from '../../actions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import addbtn from '../../styles/addbtn.svg';

import "./UserHomePage.scss";

class UserHomePage extends React.Component{
    state = {
        user: []
    }

    componentDidMount() {
        this.props.fetchMyPosts();
        axios 
        .get(`https://artportfoliobw.herokuapp.com/artists/${this.props.match.params.id}`)
        .then(res => {
            this.setState({ 
                user: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }



    render(){
        console.log("Users: ", this.props.user)
        console.log('user: ', this.state.user)
        return (
            <div className="user-home-page">

            <nav className="profile-nav">
                <div className="user-welcome-container">
                    <img 
                    src={this.props.user.avatar} 
                    className="avatar-img" 
                    alt={this.props.user.name} 
                    />
                    <h2>{this.props.user.msg}</h2>
                </div>
                <Link to="/create-post"><span>Create new post </span>
                    <img className="create-post-btn" src={addbtn} alt="add new post" />
                </Link>
            </nav>
              <h3 className='section-header'>My Posts</h3>
                <div className='recents-container'>
                    {this.props.user.photos.map( photo => (
                    <div className="post-container">
                  
                    <Link to={`/my-post/${photo.photoId}`}>
                    <img 
                    src={photo.src} 
                    key={photo.email} 
                    alt={photo.fname} 
                    className='recent-posts' />
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

export default withRouter(connect(mapStateToProps, { fetchMyPosts } )(UserHomePage));


