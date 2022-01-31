import Blog from './Blog';

const BlogListItem = ({ blog, onLikeBlogPost, onRemoveBlogPost }) => {

    return (
        <div>
            <Blog blog={blog} onLikeBlogPost={onLikeBlogPost} onRemoveBlogPost={onRemoveBlogPost} />
        </div>
    );
};

export default BlogListItem;
