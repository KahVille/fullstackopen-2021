const baseUrl = '/api/blogs';

const getAll = async () => {
    
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }

    const request = await fetch(baseUrl,requestOptions);
    const response = await request;

    return response.json();
};

const blogsApi = {
    getAll
}

export default blogsApi;
