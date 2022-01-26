import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import blogsApi from "./api/blogsApi";
import Notification from "./components/Notification";
import Login from "./components/Login";

const App = () => {

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

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await blogsApi.getAll();
        setBlogs(response);
        setSuccessMessage('Blogs fetched');
      } catch (error) {
        setErrorMessage(error.message);
      }

    }
    fetchBlogData();
  }, []);

  return (
    <div className="App">
      
      <Notification message={notification.message} classname={notification.classname} />

      {!user?.token ? <Login /> : <Blogs blogs={blogs} />}

    </div>
  );
}

export default App;
