const { mongoDBUrl } = require('./config');
const connectionString = mongoDBUrl;

const {ContactModel} = require('./Models/Contact');

const mongoose = require('mongoose');
mongoose.connect(connectionString);

const getAll = async () => {
   const promise = await ContactModel.find({});
    return promise;
};

const getSingle = async (id) => {
    const promise = await ContactModel.findById(id);
    return promise;
};

const addNew = async (name, number) => {
    mongoose.connect(connectionString);
    const contact = new ContactModel({
        name: name,
        number: number
    })

    const promise = await contact.save();
    return promise;
};

module.exports = {getAll, getSingle, addNew}