// Backend api server
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { getAll, getSingle, addNew, removeSingle } = require('./dataAccess');

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

app.get('/', (req, res) => {
  return res.send('<h1>Hello World</h1>');
});

// Contact list
app.get(basePersonApiPath, async (req, res) => {
  try {
    const persons = await getAll();
    return res.json(persons);    
  } catch (error) {
    return next(error);
  }

});

// Single contact info
app.get(`${basePersonApiPath}/:id`, async (req, res, next) => {
  const contactId = req.params.id;

   if(!contactId)
    return res.sendStatus(400);

  try {
      const contact = await getSingle(contactId)
      if(!contact)
      return res.sendStatus(404)

      return res.status(200).json(contact);
  } catch (error) {
      return next(error);    
  }

});

// Remove single contact from contacts
app.delete(`${basePersonApiPath}/:id`, async (req, res, next) => {
  const contactId = req.params.id;

  if(!contactId)
   return res.sendStatus(400);

   try {
    const contact = await getSingle(contactId)

    if(!contact)
      return res.sendStatus(404)
 
   const removedContact = await removeSingle(contactId);
   return res.status(200).json(removedContact.id);
   } catch (error) {
    return next(error);
   }
});

// Create new contact
app.post(`${basePersonApiPath}`,async (req, res, next) => {

  const newContactData = JSON.parse(JSON.stringify(req.body));

  if(!newContactData)
    return res.statusCode(400);

    if(!newContactData.number || !newContactData.name)
      return res.status(400).json({message: 'Name or Number is missing'});

  const newContact = {
    name: newContactData.name,
    number: `${newContactData.number}`,
  };

  try {
    const newPerson = await addNew(newContact.name,newContact.number)
    return res.status(201).json(newPerson);    
  } catch (error) {
    return next(error);
  }

});


// Api basic info
app.get('/info', async (req, res) => {
  try {
    let requestTimeAsString = new Date().toString();
    const persons = await getAll();

    let contactApiInfoAsString = 
    `<div> 
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${requestTimeAsString}</p>
    </div>`
  
    return res.send(contactApiInfoAsString)    
  } catch (error) {
    return next(error);
  }

});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ message: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request,response,next) => {
  console.error(error.message);

  if(error.name === 'CastError')
  return response.status(400).send({ message: 'malformatted id'})
  
  next(error);

};
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});