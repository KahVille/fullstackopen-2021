import Blog from './Blog';

const Blogs = ({blogs, userDetails, handleUserLogOut}) => {
    return (
        <div className="blogs">
            <p>Blogs</p>

            <div>
                <p>{userDetails.name} logged in</p>
                <button onClick={() => handleUserLogOut()}>Log out</button>
            </div>

        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
        </div>
    )
}

export default Blogs;
