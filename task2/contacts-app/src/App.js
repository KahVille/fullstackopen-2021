import { useState } from "react"

// Conntacts App
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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


  const isContactValid = (persons, newContact) => {
    let personFound = persons.filter((person) => person.name === newContact.name && person.number === newContact.number);
    return personFound.length > 0 ? false : true;
  }


  const IsNewContactValid = (persons, newContact) => {
    return isContactValid(persons, newContact);
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
      {persons.map((person) => {
        return <p key={person.name + person.number}>{person.name} {person.number}</p>
      })}
      </div>
    </div>
  )

}

export default App;
