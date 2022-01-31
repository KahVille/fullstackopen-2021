import { useEffect, useState, useRef } from "react";
import Blogs from "./components/Blogs";
import blogsApi from "./api/blogsApi";
import Notification from "./components/Notification";
import Login from "./components/Login";
import loginApi from "./api/loginApi";
import './App.css'

const App = () => {

  const createBlogFormRef = useRef();

  const handleRemoveBlogPost = async (id) => {
    try {
      const removedBlog = await blogsApi.removeBlogPost(user.token, id);
      
      if(!removedBlog)
      {
        return;
      }

      const response = await blogsApi.getAll(user.token);
      setBlogs(response);
      setSuccessMessage('Blogs fetched');
    } catch (error) {
      setErrorMessage(error.message);      
    }
  }

  const handleLikeBlogPost = async (blogData, blogId) => {
      try {

        const likedPost = await blogsApi.likeBlogPost(user.token, blogData, blogId);
        if(!likedPost) {
          setErrorMessage('Blog could not be liked');
          setIsBlogPostLiked(false);
          return;
        }

        setSuccessMessage('Blog Post liked');
        setIsBlogPostLiked(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
  }

  const handleCreateBlog = async (blogData) => {
    try {
      createBlogFormRef.current.toggleVisibility();
      const newBlog = await blogsApi.createBlog(user.token, blogData);
      if(!newBlog)
        {
          setErrorMessage('Blog could not be created');
          setIsNewBlogCreated(false);
          return;
        }
        setSuccessMessage('New blog Added');
        setIsNewBlogCreated(true);     
    } catch (error) {
      createBlogFormRef.current.toggleVisibility();
      setErrorMessage(error.message);
    }

  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const loggedInBlogListappUser = await loginApi.login({username, password});
      
      window.localStorage.setItem(
        'loggedInBlogListappUser', JSON.stringify(loggedInBlogListappUser)
      )
      
      setUser(loggedInBlogListappUser);
      setUsername('');
      setPassword('');
      const emptyMessage = {message: '', classname: ''}
      setNotification(emptyMessage)
    } catch (error) {
      setErrorMessage(error.message);
    }
}

  const handleLogOut = async () => {
    const emptyUser = {token: null, username: null, name: null};
    setUser(emptyUser);
    window.localStorage.removeItem('loggedInBlogListappUser');
  }

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  const setErrorMessage = (message) => {
    const errorMessage = {message: message, classname: 'error-message'}
    setNotification(errorMessage);
  }

  const setSuccessMessage = (message) => {
    const successMessage = {message: message, classname: 'success-message'}
    setNotification(successMessage);
  }

  const [user, setUser] = useState({token: null, username: null, name: null});
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState({message: '', classname: ''});
  const [isNewBlogCreated, setIsNewBlogCreated] = useState(false);
  const [isBlogPostLiked, setIsBlogPostLiked] = useState(false);


  useEffect(() => {

    const loggedInUserJSON = window.localStorage.getItem('loggedInBlogListappUser');

    if(! loggedInUserJSON)
      return;

    const loggedInUser = JSON.parse(loggedInUserJSON);
    if(!loggedInUser)
      return;

    setUser(loggedInUser);    

  },[])

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await blogsApi.getAll(user.token);
        setBlogs(response);
        setSuccessMessage('Blogs fetched');
        setIsNewBlogCreated(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    fetchBlogData();
  }, [user.token, isNewBlogCreated, isBlogPostLiked]);

  return (
    <div className="App">
      
      <Notification message={notification.message} classname={notification.classname} />

      {!user?.token ? 
      <Login  handleSubmit={(event) => handleLogin(event)}
              handleUsernameChange={({target}) => setUsername(target.value)}
              handlePasswordChange={({target})=> setPassword(target.value)}
      /> 
      : <Blogs blogs={blogs} userDetails={user} 
          handleUserLogOut={() => handleLogOut()}
          handleCreateBlog = {(blogData) => handleCreateBlog(blogData)}
          createBlogFormRef={createBlogFormRef}
          onLikeBlogPost={handleLikeBlogPost}
          onRemoveBlogPost={handleRemoveBlogPost}
      />}

    </div>
  );
}

export default App;
