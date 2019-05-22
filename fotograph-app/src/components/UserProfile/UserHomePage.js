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
        console.log("Users: ", this.props.user)
        if(this.props.user === {}) return <h1>loading data...</h1>;
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
                    <p className="likes"><i className="fas fa-heart"></i> {photo.likes}</p>
                    <img src={photo.src} key={photo.email} alt={photo.fname} className='recent-posts' />
                    <span>
                    <p className="photo-description">{photo.description}</p>
                    <i class="fas fa-edit"></i>
                    </span>
                    </div>
                    )).reverse()}
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