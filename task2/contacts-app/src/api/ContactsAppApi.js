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

const update = (updatedContactInfo) => {
    const personsInit = {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(updatedContactInfo), 
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      const promise = fetch(`${baseApiUrl}/${updatedContactInfo.id}`, personsInit)
      return promise.then(response => {return response.json()});

};

const remove = (id) => {
    const personsInit = {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      const promise = fetch(`${baseApiUrl}/${id}`, personsInit)
      return promise.then(response => {return response.json()});

};

const contactsApi = { getAll, addNew, update, remove }
export default contactsApi;