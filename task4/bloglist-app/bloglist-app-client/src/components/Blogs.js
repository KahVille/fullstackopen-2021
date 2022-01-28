import Blog from './Blog';
import CreateBlog from './CreateBlog';
const Blogs = ({blogs, userDetails, handleUserLogOut, handleCreateBlog, createBlogFormRef}) => {
    return (
        <div className="blogs">
            <h2>Blogs</h2>

            <div>
                <p>{userDetails.name} logged in</p>
                <button onClick={() => handleUserLogOut()}>Log out</button>
            </div>

            <CreateBlog createNewBlog = {(blogData) => handleCreateBlog(blogData)} createBlogFormRef = {createBlogFormRef}/>
            
        <h2>Blog listings</h2>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
        </div>
    )
}

export default Blogs;
