import React from 'react';
import { connect } from 'react-redux';

import { addNewPost } from '../../actions';

import './CreateNewPostForm.scss';

class CreateNewPostForm extends React.Component{
    state = {
        src: "",
        description: ""
        }

    handleChange = e => {
        this.setState({  
                ...this.state,
                [e.target.name]: e.target.value
        })
    };

    addNewPost = e => {
        e.preventDefault();
        if(this.state.src === "" || this.state.description === "") return;
        this.props.addNewPost(this.state);
        this.setState({ 
            src: '', 
            description: ''
        })
    }    

    render(){
        return (
            <div className="create-post-container">
            <form className="create-post-form" onSubmit={this.addNewPost}>
                    <h3>Add New Post</h3>
                    <input 
                    placeholder="image URL"
                    name="src"
                    value={this.state.src}
                    onChange={this.handleChange}
                    />
                    <input 
                    placeholder="photo description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                    <button className="new-post-btn" onClick={this.addNewPost}>+</button>
            </form>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    user: state.user
})

export default connect(mapStateToProps, { addNewPost } )(CreateNewPostForm);