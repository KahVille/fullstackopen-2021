import { useEffect, useState } from "react";

const Blog = ({blog, onLikeBlogPost, onRemoveBlogPost}) => {

    const blogStyle = {
        padding: 10,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }

    const [showBlogDetails, setShowBlogDetails] = useState(false);

    const [blogLikes, setBlogLikes] = useState(blog.likes);

    const showInList = {display: showBlogDetails ? 'none' : ''}
    const showInDetail = {display: showBlogDetails ? '' : 'none'}

    const toggleShowBlogDetails = () => {
        setShowBlogDetails(!showBlogDetails);
    }

    const removeBlogPost = (id) => {
     
        if(!window.confirm(`Do you want really to remove blog ${blog.title} by ${blog.author} from the listing?`))
            return;
        
        onRemoveBlogPost(id);
    }
    const likeBlogPost = () => {
        setBlogLikes(blogLikes + 1);
    }

    useEffect(() => {
        const likedBlogPost = {
            title: blog.title,
            url: blog.url,
            author: blog.author,
            user: blog.user?.id || null,
            likes: blogLikes
        }
        const likedBlogPostId = blog.id;
        onLikeBlogPost(likedBlogPost, likedBlogPostId);
    }, [blogLikes])


    return (

        <div style={blogStyle}>

        <div className="blog" style={showInList}>
            <p>{blog.title}</p>
            <button onClick={() => toggleShowBlogDetails()}>View details</button>
        </div>

        <div className="blog" style={showInDetail}>
        <p>{blog.title}</p>
        <button onClick={() => toggleShowBlogDetails()}>hide details</button>
        <p>{blog.url}</p>
        <div>
        <p> likes: {blogLikes}</p>
        <button onClick={() => likeBlogPost()}>Like 👍</button>
        <button onClick={() => removeBlogPost(blog?.id)}>Remove blog post</button>
        </div>


        <p>{blog.author}</p>
        </div>
        </div>



    )
}

export default Blog;
