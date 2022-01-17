const { mongoDBUrl } = require('./config');
const connectionString = mongoDBUrl;

const { ContactModel } = require('./Models/Contact');

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
  });
  const promise = await contact.save();
  return promise;
};

const removeSingle = async (id) => {
  const promise = await ContactModel.findByIdAndRemove(id);
  return promise;
};

const updateSingle = async (contactId, updatedContact) => {
  const promise = await ContactModel.findOneAndUpdate({ _id: contactId }, updatedContact, { new: true, runValidators: true, context: 'query' });
  return promise;
};

module.exports = { getAll, getSingle, addNew, removeSingle, updateSingle };