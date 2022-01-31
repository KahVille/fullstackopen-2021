import CreateBlogForm from './CreateBlogForm';
import Toggable from './Toggable';

const CreateBlog = ({ createNewBlog, createBlogFormRef }) => {

    return (
        <div>
            <h2>Create a new blog</h2>

            <Toggable buttonLabel="Create new blog post" ref={createBlogFormRef}>
                <h3>Add the following Blog details</h3>
                <CreateBlogForm createNewBlog = {(blogData) => createNewBlog(blogData)}/>
            </Toggable>

        </div>
    );
};

export default CreateBlog;
