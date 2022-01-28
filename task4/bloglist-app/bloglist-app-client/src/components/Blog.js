import { useState } from "react";

const Blog = ({blog}) => {

    const blogStyle = {
        padding: 10,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }

    const [showBlogDetails, setShowBlogDetails] = useState(false);

    const showInList = {display: showBlogDetails ? 'none' : ''}
    const showInDetail = {display: showBlogDetails ? '' : 'none'}

    const toggleShowBlogDetails = () => {
        setShowBlogDetails(!showBlogDetails);
    }

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
        <p> likes: {blog.likes}</p>
        <button>Like 👍</button>
        </div>


        <p>{blog.author}</p>
        </div>
        </div>



    )
}

export default Blog;
