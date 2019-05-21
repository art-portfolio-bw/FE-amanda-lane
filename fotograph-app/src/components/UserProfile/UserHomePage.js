import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyPosts } from '../../actions';
import { withRouter } from 'react-router-dom';

import addbtn from '../../styles/addbtn.svg';

import axios from 'axios';

import "./UserHomePage.scss";

class UserHomePage extends React.Component{

    componentDidMount() {
        this.props.fetchMyPosts();
    }

    render(){
        return (
            <div className="user-home-page">
            <nav>
                <Link to="/">Create new post 
                    <img className="create-post-btn" src={addbtn} alt="add new post" />
                </Link>
            </nav>
              <h1 className='section-header'>My Posts</h1>
                <div className='recents-container'>
                    {this.props.myPosts.map( recent => (
                    <div className="post-container">
                    <img src={recent.src} key={recent.email} alt={recent.fname} className='recent-posts' />
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    myPosts: state.myPosts
})

export default withRouter(connect(mapStateToProps, { fetchMyPosts } )(UserHomePage));