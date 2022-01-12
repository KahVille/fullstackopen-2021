// Backend api server

const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3001;

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
app.get('/persons', (req, res) => {
    return res.json(persons);
});

// Single contact info
app.get('/persons/:id', (req, res) => {
  const contactId = Number(req.params.id);

  if(!contactId)
    return res.sendStatus(400);

  const [contact] = persons.filter(person => person.id === contactId);

  if(!contact)
    return res.sendStatus(404)

  return res.send(contact);

});

// Remove single contact from contacts
app.delete('/persons/:id', (req, res) => {
  const contactId = Number(req.params.id);

  if(!contactId)
    return res.sendStatus(400);

  const [contact] = persons.filter(person => person.id === contactId);

  if(!contact)
    return res.sendStatus(404)

  persons = persons.filter(person => person.id !== contactId);

  return res.sendStatus(200);

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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});