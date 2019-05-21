import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyPosts } from '../../actions';
import { withRouter } from 'react-router-dom';

import addbtn from '../../styles/addbtn.svg';

import "./UserHomePage.scss";

class UserHomePage extends React.Component{

    componentDidMount() {
        this.props.fetchMyPosts();
    }

    render(){
        console.log("Users: ", this.props.user.photos)
        return (
            <div className="user-home-page">

            <nav>
                <h2>{this.props.user.msg}</h2>
                <Link to="/create-post">Create new post 
                    <img className="create-post-btn" src={addbtn} alt="add new post" />
                </Link>
            </nav>
              <h1 className='section-header'>My Posts</h1>
                <div className='recents-container'>
                    {this.props.user.photos.map( photo => (
                    <div className="post-container">
                    <img src={photo.src} key={photo.email} alt={photo.fname} className='recent-posts' />
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.user
})

export default withRouter(connect(mapStateToProps, { fetchMyPosts } )(UserHomePage));