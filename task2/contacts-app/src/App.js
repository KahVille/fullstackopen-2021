import { useState } from "react"

// Conntacts App
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNameValue, setFilterNameValue] = useState('')


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

    setPersons([...persons,newContact]);
    setNewName('');
    setNewNumber('');

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

  const filteredPersons = () => {
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
      <form onSubmit={(event) => handleContactAdd(event)}>
        <div>
          name: <input
           value={newName}
           onChange={(event) => handleContactNameChange(event)}
          />
        </div>
        <div>
          number: <input
           value={newNumber}
           onChange={(event) => handleContactNumberChange(event)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          filter contacts by name: <input
           value={filterNameValue}
           onChange={(event) => handleContactFilterChange(event)}
          />
        </div>
      <div>

      {filteredPersons().map((person) => {
        return <p key={person.name + person.number}>{person.name} {person.number}</p>
      })}
      </div>
    </div>
  )

}

export default App;
