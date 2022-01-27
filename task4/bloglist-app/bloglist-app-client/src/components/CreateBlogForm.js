const CreateBlogForm = ({
    handleSubmit,
    handleTitleChange,
    handleAuthorChange,
    handleUrlChange,
    title,
    author,
    url
}) => {

    return <form onSubmit={(event) => handleSubmit(event)}>
<div>
                    <label>
                        title <input type="text" name="Title" value={title} onChange={(event) => handleTitleChange(event)}/>
                    </label>
                </div>
                <div>
                    <label>
                        author <input type="text" name="Author" value={author} onChange={(event) => handleAuthorChange(event)}/>
                    </label>
                </div>
                <div>
                    <label>
                        url <input type="text" name="Url" value={url} onChange={(event) => handleUrlChange(event)}/>
                    </label>
                </div>


    <button type="submit">Create</button>

    </form>
}

export default CreateBlogForm;