import Blog from './Blog';

const Blogs = ({blogs}) => {
    return (
        <div className="blogs">
            <p>Blogs</p>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
        </div>
    )
}

export default Blogs;
