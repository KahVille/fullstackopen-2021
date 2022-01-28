const baseUrl = '/api/blogs';

const getAll = async (token) => {
    try {
        const requestHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });

        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeaders
          }
    
        const request = await fetch(baseUrl,requestOptions);
        const response = await request;

        if (!response.ok) {
              const responseText = await response.text();
              throw new Error(JSON.parse(responseText)?.message || 'Unable to get any blogs');
        }

        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
};

const createBlog = async (token, blogData) => {
    try {
        const requestHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeaders,
            body: JSON.stringify(blogData)
          }
    
        const request = await fetch(baseUrl,requestOptions);
        const response = await request;

        if (!response.ok) {
              const responseText = await response.text();
              throw new Error(JSON.parse(responseText)?.message || 'Unable to create new blog post');
        }

        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
}

const likeBlogPost = async (token, blogData, blogId) => {
    try {
        const requestHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });

        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeaders,
            body: JSON.stringify(blogData)
          }
    
        const request = await fetch( `${baseUrl}/${blogId}`,requestOptions);
        const response = await request;

        if (!response.ok) {
              const responseText = await response.text();
              throw new Error(JSON.parse(responseText)?.message || 'Unable to like a blog post');
        }

        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
}

const blogsApi = {
    getAll,
    createBlog,
    likeBlogPost
}

export default blogsApi;
