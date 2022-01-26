const Blog = ({blog}) => {
    return (
        <div className="blog">
            <p>{blog.title} {blog.author}</p>
        </div>
    )
}

export default Blog;
