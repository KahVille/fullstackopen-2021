// Backend api server
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { getAll, getSingle, addNew } = require('./dataAccess');

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

const app = express();
app.use(express.static('build'));
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const hostname = '0.0.0.0';
const port = process.env.PORT || 3001;
const basePersonApiPath = '/api/persons';

let persons =  [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ];


app.get('/', (req, res) => {
  return res.send('<h1>Hello World</h1>');
});

// Contact list
app.get(basePersonApiPath, async (req, res) => {
    const persons = await getAll();
    return res.json(persons);
});

// Single contact info
app.get(`${basePersonApiPath}/:id`, async (req, res) => {
  const contactId = req.params.id;

   if(!contactId)
    return res.sendStatus(400);

  const contact = await getSingle(contactId)

  if(!contact)
    return res.sendStatus(404)

    return res.status(200).json(contact);

});

// Remove single contact from contacts
app.delete(`${basePersonApiPath}/:id`, (req, res) => {
  const contactId = Number(req.params.id);

  if(!contactId)
    return res.sendStatus(400);

  const [contact] = persons.filter(person => person.id === contactId);

  if(!contact)
    return res.sendStatus(404);

  persons = persons.filter(person => person.id !== contactId);

  return res.status(200).json(contactId);

});

// Create new contact
app.post(`${basePersonApiPath}`,async (req, res) => {

  const newContactData = JSON.parse(JSON.stringify(req.body));

  if(!newContactData)
    return res.statusCode(400);

    if(!newContactData.number || !newContactData.name)
      return res.status(400).json({message: 'Name or Number is missing'});

    let isPersonDuplicate = false;
    let personFound = persons.filter((person) => person.name.toLowerCase() === newContactData.name.toLowerCase());
    isPersonDuplicate = personFound.length > 0 ? true : false;

    if(isPersonDuplicate)
      return res.status(400).json({message: `Contact is already added with the same name of ${newContactData.name}`});

  const newContact = {
    name: newContactData.name,
    number: `${newContactData.number}`,
  };

  const newPerson = await addNew(newContact.name,newContact.number)

  persons = [...persons, newPerson];

  return res.status(201).json(newPerson);

});


// Api basic info
app.get('/info', (req, res) => {
  let requestTimeAsString = new Date().toString();
  let contactApiInfoAsString = 
  `<div> 
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${requestTimeAsString}</p>
  </div>`

  return res.send(contactApiInfoAsString)

});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ message: 'unknown endpoint' })
}
app.use(unknownEndpoint)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});