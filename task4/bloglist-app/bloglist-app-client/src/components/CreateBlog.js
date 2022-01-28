import { useState } from "react";
import CreateBlogForm from "./CreateBlogForm";


const CreateBlog = ({handleCreateBlog, handleTitleChange, handleAuthorChange, handleUrlChange}) => {

    const [createBlogVisible, setCreateBlogVisible] = useState(false);

    const hideWhenVisible = {display: createBlogVisible ? 'none' : ''}
    const showWhenVisible = {display: createBlogVisible ? '' : 'none'}
    
    return ( 
    <div>
        <h2>Create a new blog</h2>

        <div style={hideWhenVisible}>
            <button onClick={() => setCreateBlogVisible(true)}>Create new blog</button>
        </div>

        <div style={showWhenVisible}>
        <CreateBlogForm handleSubmit = {(event) => handleCreateBlog(event)} 
            handleTitleChange={(event) => handleTitleChange(event)} 
            handleAuthorChange ={(event) => handleAuthorChange(event)} 
            handleUrlChange = {(event) => handleUrlChange(event)}
            />
            <button onClick={() => setCreateBlogVisible(false)}>Close</button>
        </div>

    </div>
    )
}

export default CreateBlog;
