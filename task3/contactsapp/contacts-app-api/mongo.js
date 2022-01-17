// const mongoose = require('mongoose');
// const { mongoDBUrl } = require('./config');

// const connectionString = mongoDBUrl;
// const contactSchema = new mongoose.Schema({
//     name: String,
//     number: String
// });

// const ContactModel = mongoose.model('Contact', contactSchema);

// const getAll = () => {
//     ContactModel.find({}).then(result => {
//         result.forEach(contact => {
//             console.log(`${contact.name} ${contact.number}`);
//         })
//         mongoose.connection.close();
//     });
// }

// const addNew = (name, number) => {
//     const contact = new ContactModel({
//         name: name,
//         number: number
//     })

//     contact.save().then(result => {
//         console.log(`Added ${result.name} ${result.number} to your phonebook`);
//         mongoose.connection.close();
//     });
// }

// if (process.argv.length<3) {
//     console.log('give password as argument')
//     process.exit(1)
//   }
  

//   const password = process.argv[2]
//   const name = process.argv[3]
//   const number = process.argv[4]

// mongoose.connect(connectionString);

// if (!name && !number)
// {
//     getAll();
//     return;
// }

// addNew(name, number);