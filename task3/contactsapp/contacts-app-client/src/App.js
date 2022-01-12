import { useEffect, useState } from "react"
import contactsApi from "./api/ContactsAppApi"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import "./App.css"

// Conntacts App
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNameValue, setFilterNameValue] = useState('')

  const [notificationMessage, setNotificationMessage] = useState({message: '', classname: ''});

  const setErrorMessage = (message) => {
    console.error(message);
    const errorMessage = {message: message, classname: 'error-message'}
    setNotificationMessage(errorMessage)
  }

  const setSuccessMessage = (message) => {
    console.log(message);
    const successMessage = {message: message, classname: 'success-message'}
    setNotificationMessage(successMessage)
  }

  useEffect(() => {

    const HandlePersonDataChange = persons => {
        setPersons(persons);
    };

    contactsApi.getAll()
    .then(data => HandlePersonDataChange(data))
    .catch(error => {
      setErrorMessage(error.message + ', unable to get any contacts from the server ')
    });
  },[])

  const handleUpdatedContactInformation = (data) => {
    const personList = [...persons];
    setPersons(personList.map(contact => contact.id !== data.id ? contact : data));
    setSuccessMessage('Updated contact information successfully');
  }

  const updateContactInformation = (contactToUpdate) => {
    const personList = [...persons];
    const filteredList = personList.filter((person) => person.name.toLowerCase() === contactToUpdate.name.toLowerCase());
    const [contact] = filteredList;
    const updateInformation = {
      id: contact.id,
      name: contact.name,
      number: contactToUpdate.number
    };

    contactsApi.update(updateInformation)
    .then(data => handleUpdatedContactInformation(data))
    .catch(error => {
      setErrorMessage(error.message);
    });
  }


  const handleNewContactAdded = (addedContact) => {
    setPersons([...persons,addedContact]);
    setNewName('');
    setNewNumber('');
    setSuccessMessage('Added new contact successfully')
  }

  const handleContactAdd = (event) => {
    event.preventDefault();

    const newContact = {
        name: newName,
        number: newNumber
    };

    if(!IsNewContactValid(persons,newContact))
    {
      const updateContact = window.confirm(`${newContact.name} is already added to contacts. Do you want to update ${newContact.name}`);
      if(updateContact) {
        updateContactInformation(newContact);
      }
      return;
    }

    contactsApi.addNew(newContact)
    .then(data => handleNewContactAdded(data))
    .catch(error => {
      setErrorMessage(error.message);
    });
  }

  const handleRemovedContact = (id) => {
    const updatedContactListAfterRemove = persons.filter(person => person.id !== id);
    setPersons(updatedContactListAfterRemove);
    setSuccessMessage('Removed contact successfully');
  }

  const handleRemoveContact = (id) => {
    contactsApi.remove(id)
    .then(() => handleRemovedContact(id))
    .catch(error => {
      setErrorMessage(error.message);
    });
  }

  const handleContactNameChange = (event) => {
  setNewName(event.target.value)
  }

  const handleContactNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleContactFilterChange = (event) => {
    setFilterNameValue(event.target.value);
  }

  const isContactValid = (persons, newContact) => {
    let personFound = persons.filter((person) => person.name.toLowerCase() === newContact.name.toLowerCase());
    return personFound.length > 0 ? false : true;
  }

  const IsNewContactValid = (persons, newContact) => {
    return isContactValid(persons, newContact);
  }

  const filteredPersons = (persons) => {
    const personList = [...persons];
    const filteredList = personList.filter((person) => person.name.toLowerCase() === filterNameValue.toLowerCase());

    if(filteredList && filteredList.length > 0)
      return filteredList;

    return personList;
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage.message} classname={notificationMessage.classname} />

      <h2>Add a new contact</h2>
      <ContactForm newName={newName} newNumber={newNumber} 
      handleContactAdd={(event) => handleContactAdd(event)} 
      handleContactNameChange={(event) => handleContactNameChange(event)}
      handleContactNumberChange={(event) => handleContactNumberChange(event)}
      />

      <h2>Numbers</h2>
      <Filter
      filterNameValue={filterNameValue}
      handleContactFilterChange= {(event) => handleContactFilterChange(event)} 
      />

      <ContactList persons={filteredPersons(persons)} onRemoveContact={(id) => handleRemoveContact(id)} />
    </div>
  )

}

export default App;
