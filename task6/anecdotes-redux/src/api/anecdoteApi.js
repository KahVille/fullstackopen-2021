const baseUrl = '/anecdotes';

const getAll = async () => {
    try {
        const requestHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeaders
        };

        const request = await fetch(baseUrl, requestOptions);
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

const anecdoteApi = {
    getAll
};

export default anecdoteApi;
