const baseUrl = '/api/login';

const login = async (loginInformation) => {
    try {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInformation)
        };

        const request = await fetch(baseUrl,requestOptions);
        const response = await request;

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(JSON.parse(responseText)?.message || 'Unable to login');
        }
        return response.json();
    } catch (error) {
        throw Error(error.message);
    }
};

const loginApi = {
    login
};

export default loginApi;