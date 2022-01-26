import Blog from './Blog';

const Blogs = ({blogs}) => {
    return (
        <div className="blogs">
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
        </div>
    )
}

export default Blogs;
