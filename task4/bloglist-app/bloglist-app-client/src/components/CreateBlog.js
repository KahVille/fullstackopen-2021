import CreateBlogForm from "./CreateBlogForm";


const CreateBlog = ({handleCreateBlog, handleTitleChange, handleAuthorChange, handleUrlChange}) => {

    return <div>
        <h2>Create a new blog</h2>
        <CreateBlogForm handleSubmit = {(event) => handleCreateBlog(event)} 
            handleTitleChange={(event) => handleTitleChange(event)} 
            handleAuthorChange ={(event) => handleAuthorChange(event)} 
            handleUrlChange = {(event) => handleUrlChange(event)}/>

    </div>
}

export default CreateBlog;
