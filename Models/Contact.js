const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    emailaddress: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        
    }
},{timestamps:true});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
