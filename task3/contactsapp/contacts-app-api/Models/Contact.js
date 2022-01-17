const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
});

//Contact already exist's validation
contactSchema.path('name').validate(async function validateDuplicatedName (value) {
  if (!this.isNew && !this.isModified('name')) return true;

  try {
    const Contact = mongoose.model('Contact');
    const count = await Contact.countDocuments({ name: value });
    if ((this.isNew && count > 0) || (this.isModified('name') && count > 0)) return false;
    return true;
  } catch (error) {
    return false;
  }

}, 'Name already exists');

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = {ContactModel: mongoose.model('Contact', contactSchema)}