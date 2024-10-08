const express = require('express');
const router = express.Router();
const Booking = require("./Models/Booking"); // Import the Booking model
const Contact = require("./Models/Contact");
const MedBooking = require("./Models/MedTour");
const Activity_booking = require('./Models/Activity_booking');
const Subscription = require('./Models/Subscription');
const CultBooking = require("./Models/Cultural")

router.get('/', (req, res) => {
    res.json({ msg: "This is an example" });
});

// Route to create a new booking
router.post('/bookings', async (req, res) => {
    try {
        const newBooking = await Booking.create({ ...req.body });
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Error creating booking', error });
    }
});
router.post('/activity_bookings', async (req, res) => {
    try {
        const newBooking = await Activity_booking.create({ ...req.body });
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Error creating booking', error });
    }
});
router.post('/medtourism', async (req, res) => {
    try {
       
        const newMedBooking = await MedBooking.create({ ...req.body });
       
        res.status(201).json(newMedBooking);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error creating MedBooking', error });
    }
});
router.post('/culturaltourism', async (req, res) => {
    try {
       
        const newCultBooking = await CultBooking.create({ ...req.body });
       
        res.status(201).json(newCultBooking);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error creating CulturalBooking', error });
    }
});
router.post('/contactUs', async (req, res) => {
    try {
        console.log(req.body);
        req.body.emailaddress = req.body.email; 
        const newContact = new Contact({ ...req.body });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error creating contact', error });
    }
});
router.post('/subscriptions', async (req, res) => {
    try {
        console.log(req.body);
        req.body.emailaddress = req.body.email; 
        const newSubs = new Subscription({ ...req.body });
        await newSubs.save();
        res.status(201).json(newSubs);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error creating contact', error });
    }
});


module.exports = router;
