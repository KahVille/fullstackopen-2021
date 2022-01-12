// Contact list
const ContactList = ({persons, onRemoveContact}) => {
    return <div>
        {persons.map((person) => {
            return (
                <div key={person.id}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => onRemoveContact(person.id)}>Remove</button>
                </div>
            )           
        })}
    </div>
}

export default ContactList;