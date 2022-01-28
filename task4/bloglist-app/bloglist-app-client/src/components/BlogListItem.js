import Blog from './Blog';

const BlogListItem = ({blog, onLikeBlogPost}) => {

    return (
        <div>
            <Blog blog={blog} onLikeBlogPost={onLikeBlogPost} />
        </div>
    )
}

export default BlogListItem;
