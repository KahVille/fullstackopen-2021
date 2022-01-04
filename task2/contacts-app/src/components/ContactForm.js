// Contact form
const ContactForm = (props) => {
    return <div>
        <form onSubmit={(event) => props.handleContactAdd(event)}>
        <div>
        name: <input
        value={props.newName}
        onChange={(event) => props.handleContactNameChange(event)}
        />
        </div>
        <div>
        number: <input
        value={props.newNumber}
        onChange={(event) => props.handleContactNumberChange(event)}
        />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
    </form>
    </div>
}

export default ContactForm;