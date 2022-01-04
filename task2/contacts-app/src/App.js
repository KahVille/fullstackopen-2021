import { useState } from "react"

// Conntacts App
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleContactAdd = (event) => {
    event.preventDefault();

    const newContact = {
        name: newName
    };

    if(!IsNewContactValid(persons,newContact))
    {
      alert(`${newName} is already added to contacts`);
      console.warn(`${newName} is already added to contacts`);
      return;
    }

    setPersons([...persons,newContact]);
    setNewName('');

  }

  const handleContactChange = (event) => {
  setNewName(event.target.value)
  }

  const IsNewContactValid = (persons, newContact) => {
    let personFound = persons.filter((person) => person.name === newContact.name);
    return personFound.length > 0 ? false : true;
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(event) => handleContactAdd(event)}>
        <div>
          name: <input
           value={newName}
           onChange={(event) => handleContactChange(event)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map((person) => {
        return <p key={person.name}>{person.name}</p>
      })}
      </div>
    </div>
  )

}

export default App;
