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
            throw new Error(JSON.parse(responseText)?.message || 'Unable to get any anecdotes');
        }

        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
};

const createNew = async (anecdoteData) => {
    try {
        const requestHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeaders,
            body: JSON.stringify(anecdoteData)
        };

        const request = await fetch(baseUrl, requestOptions);
        const response = await request;

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(JSON.parse(responseText)?.message || 'Unable to create new anecdote');
        }

        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
};

const updateAnecdote = async (anecdoteId, updatedAnecdoteData) => {
    try {
        const requestHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeaders,
            body: JSON.stringify(updatedAnecdoteData)
        };

        const request = await fetch(`${baseApiUrl}/${anecdoteId}`, requestOptions);
        const response = await request;

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(JSON.parse(responseText)?.message || 'Unable to create new anecdote');
        }

        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
};

const anecdoteApi = {
    getAll,
    createNew,
    updateAnecdote
};

export default anecdoteApi;
