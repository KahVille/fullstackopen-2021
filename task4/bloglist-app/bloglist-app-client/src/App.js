import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import blogsApi from "./api/blogsApi";

const App = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await blogsApi.getAll();
      setBlogs(response);
      
    }
    fetchBlogData();
  }, []);

  return (
    <div className="App">
      
      <h2>Blogs</h2>
      <Blogs blogs={blogs} />

    </div>
  );
}

export default App;
