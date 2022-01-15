const baseApiUrl = '/api/persons'

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
      return promise.then(response => {
        if(response.ok)
        return response.json();
        else throw new Error('Failed to get contacts');
      });
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
      return promise.then(response => {
        if(response.ok)
        return response.json();
        else throw new Error('Failed to add new contact');
      });
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
      return promise.then(response => {
        if(response.ok)
        return response.json();
        else if(response.status === 404)
            throw new Error('Contact already removed');
        else throw new Error('Failed to update contact');
      });
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
      return promise.then(response => {
        if(response.ok) 
        return response.json();
        else if(response.status === 404)
            throw new Error('Contact already removed');
        else throw new Error('Failed to remove contact');
      });

};

const contactsApi = { getAll, addNew, update, remove }
export default contactsApi;