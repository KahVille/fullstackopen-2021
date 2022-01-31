import BlogListItem from "./BlogListItem";

const BlogList = ({blogs, onLikeBlogPost}) => {

    const orderByMostLiked = (blogs) => {
        return blogs.sort((firstItem, secondItem) => firstItem.likes - secondItem.likes).reverse()
      }

    return (
        <div>
            {orderByMostLiked(blogs).map(blog =>
                <BlogListItem key={blog.id} blog={blog} onLikeBlogPost={onLikeBlogPost}></BlogListItem>
            )}
        </div>
    )
}

export default BlogList;
