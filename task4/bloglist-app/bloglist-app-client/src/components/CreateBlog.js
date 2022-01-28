import CreateBlogForm from "./CreateBlogForm";
import Toggable from "./Toggable";

const CreateBlog = ({handleCreateBlog, handleTitleChange, handleAuthorChange, handleUrlChange}) => {

    return ( 
    <div>
        <h2>Create a new blog</h2>

        <Toggable buttonLabel="Create new blog post">
            <h3>Add the following Blog details</h3>
            <CreateBlogForm handleSubmit = {(event) => handleCreateBlog(event)} 
                handleTitleChange={(event) => handleTitleChange(event)} 
                handleAuthorChange ={(event) => handleAuthorChange(event)} 
                handleUrlChange = {(event) => handleUrlChange(event)}
                />
        </Toggable>

    </div>
    )
}

export default CreateBlog;
