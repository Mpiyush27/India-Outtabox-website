const mongoose = require('mongoose');
const { Schema } = mongoose;

const subsSchema = new Schema({
    emailaddress: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps:true});

const Subscription = mongoose.model('Subscription', subsSchema);

module.exports = Subscription;
