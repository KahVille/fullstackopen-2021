import BlogListItem from "./BlogListItem";

const BlogList = ({blogs, onLikeBlogPost}) => {
    return (
        <div>
            {blogs.map(blog =>
                <BlogListItem key={blog.id} blog={blog} onLikeBlogPost={onLikeBlogPost}></BlogListItem>
            )}
        </div>
    )
}

export default BlogList;
