const mongoose = require('mongoose');
const { Schema } = mongoose;

const Activity_bookingSchema = new Schema({
    activityName:{
        type:String,
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
  
    numberOfGuests: {
        type: Number,
        required: true
    },
    activityCity:{
        type:String,
    }
},{timestamps: true});

const Activity_booking = mongoose.model('Activity_booking', Activity_bookingSchema);

module.exports = Activity_booking;
