import { useState } from "react";

const CreateBlogForm = ({ createNewBlog }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    const handleCreateNewBlog = (event) => {
        event.preventDefault();

        const blogData = {
            title: title,
            author: author,
            url: url
        };
        createNewBlog(blogData);
    }

    return <form onSubmit={(event) => handleCreateNewBlog(event)}>
        <div>
            <label>
                title <input type="text" name="Title" value={title} onChange={({ target }) => setTitle(target.value)} />
            </label>
        </div>
        <div>
            <label>
                author <input type="text" name="Author" value={author} onChange={({ target }) => setAuthor(target.value)} />
            </label>
        </div>
        <div>
            <label>
                url <input type="text" name="Url" value={url} onChange={({ target }) => setUrl(target.value)} />
            </label>
        </div>
        <button type="submit">Create</button>
    </form>
}

export default CreateBlogForm;