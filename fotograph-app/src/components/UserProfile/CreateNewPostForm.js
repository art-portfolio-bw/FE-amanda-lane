import React from 'react';

import './CreateNewPostForm.scss';

class CreateNewPostForm extends React.Component{



    render(){
        return (
            <div className="create-post-container">
            <form className="create-post-form">
                    <h3>Add New Post</h3>
                    <input 
                    placeholder="image URL"
                    />
                    <input 
                    placeholder="photo description"
                    />
                    <button className="new-post-btn">+</button>
            </form>
            </div>
            
        )
    }
}

export default CreateNewPostForm;