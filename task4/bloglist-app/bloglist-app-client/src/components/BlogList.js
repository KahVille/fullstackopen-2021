import BlogListItem from "./BlogListItem";

const BlogList = ({blogs}) => {
    return (
        <div>
            {blogs.map(blog =>
                <BlogListItem key={blog.id} blog={blog}> </BlogListItem>
            )}
        </div>
    )
}

export default BlogList;
