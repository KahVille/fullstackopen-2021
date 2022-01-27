import Blog from './Blog';
import CreateBlog from './CreateBlog';

const Blogs = ({blogs, userDetails, handleUserLogOut, handleCreateBlog, handleTitleChange, handleAuthorChange, handleUrlChange}) => {
    return (
        <div className="blogs">
            <p>Blogs</p>

            <div>
                <p>{userDetails.name} logged in</p>
                <button onClick={() => handleUserLogOut()}>Log out</button>
            </div>

            <CreateBlog handleCreateBlog = {(event) => handleCreateBlog(event)}
            handleTitleChange={(event) => handleTitleChange(event)} 
            handleAuthorChange ={(event) => handleAuthorChange(event)} 
            handleUrlChange = {(event) => handleUrlChange(event)}
            />

        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
        </div>
    )
}

export default Blogs;
