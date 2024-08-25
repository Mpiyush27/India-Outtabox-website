const mongoose = require('mongoose');
const { Schema } = mongoose;

const medSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    message: {
        type: String,
        
    },
    medActivity:{
        type:String
    }
},{timestamps:true});

const MedTour = mongoose.model('MedTour', medSchema);

module.exports = MedTour;
