import { useEffect, useState } from "react"
import contactsApi from "./api/ContactsAppApi"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"

// Conntacts App
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNameValue, setFilterNameValue] = useState('')

  useEffect(() => {

    const HandlePersonDataChange = persons => {
        setPersons(persons);
    };

    contactsApi.getAll().then(data => HandlePersonDataChange(data));
  },[])


  const handleNewContactAdded = (addedContact) => {
    setPersons([...persons,addedContact]);
    setNewName('');
    setNewNumber('');
  }

  const handleContactAdd = (event) => {
    event.preventDefault();

    const newContact = {
        name: newName,
        number: newNumber
    };

    if(!IsNewContactValid(persons,newContact))
    {
      alert(`${newName} is already added to contacts`);
      console.warn(`${newName} is already added to contacts`);
      return;
    }

    contactsApi.addNew(newContact).then(data => handleNewContactAdded(data));
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
    let personFound = persons.filter((person) => person.name === newContact.name && person.number === newContact.number);
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

      <ContactList persons={filteredPersons(persons)} />
    </div>
  )

}

export default App;
