import Blog from './Blog';
import CreateBlog from './CreateBlog';

const Blogs = ({blogs, userDetails, handleUserLogOut, handleCreateBlog, handleTitleChange, handleAuthorChange, handleUrlChange}) => {
    return (
        <div className="blogs">
            <h2>Blogs</h2>

            <div>
                <p>{userDetails.name} logged in</p>
                <button onClick={() => handleUserLogOut()}>Log out</button>
            </div>

            <CreateBlog handleCreateBlog = {(event) => handleCreateBlog(event)}
            handleTitleChange={(event) => handleTitleChange(event)} 
            handleAuthorChange ={(event) => handleAuthorChange(event)} 
            handleUrlChange = {(event) => handleUrlChange(event)}
            />

            
        <h2>Blog listings</h2>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
        </div>
    )
}

export default Blogs;
