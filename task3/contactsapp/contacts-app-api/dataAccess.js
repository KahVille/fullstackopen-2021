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
    const contact = new ContactModel({
        name: name,
        number: number
    })

    await contact.validate();
    const promise = await contact.save();
    return promise;
};

const removeSingle = async (id) => {
    const promise = await ContactModel.findByIdAndRemove(id);
    return promise;
}

const updateSingle = async (contactId,updatedContact) => {
    const promise = await ContactModel.findByIdAndUpdate(contactId, updatedContact,{new:true});
    return promise;
}


module.exports = {getAll, getSingle, addNew, removeSingle, updateSingle}