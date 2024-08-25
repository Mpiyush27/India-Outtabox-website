const mongoose = require('mongoose');
const { Schema } = mongoose;

const culturalSchema = new Schema({
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
    CulturalActivity:{
        type:String
    }
},{timestamps:true});

const Cultural = mongoose.model('Cultural', culturalSchema);

module.exports = Cultural;
