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
  res.send('<h1>Hello World</h1>');
});

// Contact list
app.get('/persons', (req, res) => {
    res.json(persons);
});

// Api basic info
app.get('/info', (req, res) => {
  let requestTimeAsString = new Date().toString();
  let contactApiInfoAsString = 
  `<div> 
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${requestTimeAsString}</p>
  </div>`

  res.send(contactApiInfoAsString)

});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});