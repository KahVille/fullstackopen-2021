const baseApiUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const personsInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      const promise = fetch(baseApiUrl, personsInit)
      return promise.then(response => {return response.json()});

};

const addNew = (newContact) => {
    const personsInit = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(newContact), 
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      const promise = fetch(baseApiUrl, personsInit)
      return promise.then(response => {return response.json()});

};

const update = () => {};

const remove = () => {};

const contactsApi = { getAll, addNew, update, remove }
export default contactsApi;