const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
    hotelName:{
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
    numberOfRooms: {
        type: Number,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    hotelLocation:{
        type:String,
    }
},{timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
