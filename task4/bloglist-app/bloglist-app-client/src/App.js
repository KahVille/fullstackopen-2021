import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import blogsApi from "./api/blogsApi";
import Notification from "./components/Notification";
//import Login from "./components/Login";
import loginApi from "./api/loginApi";

const App = () => {

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const loggedInUser = await loginApi.login({username, password});
      setUser(loggedInUser);
      setUsername('');
      setPassword('');
      const emptyMessage = {message: '', classname: ''}
      setNotification(emptyMessage)
    } catch (error) {
      setErrorMessage(error.message);
    }
}

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  //This follows the course implementation for now. So no props to login form yeat. Todo Make login i'ts own component file
  const Login = () => (
            <form className="login-form" onSubmit={(event) => handleLogin(event)}>
                <div>
                    <label>
                        Username <input type="text" name="Username" value={username} onChange={({target}) => setUsername(target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Password <input type="password" name="Password" value={password} onChange={({target}) => setPassword(target.value)}/>
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
)

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
        const response = await blogsApi.getAll(user.token);
        setBlogs(response);
        setSuccessMessage('Blogs fetched');
      } catch (error) {
        setErrorMessage(error.message);
      }

    }
    fetchBlogData();
  }, [user.token]);

  return (
    <div className="App">
      
      <Notification message={notification.message} classname={notification.classname} />

      {!user?.token ? <Login /> : <Blogs blogs={blogs} />}

    </div>
  );
}

export default App;
