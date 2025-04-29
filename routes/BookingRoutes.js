const express = require('express');
const { createBooking, getAllBookings } = require('../controllers/BookingController.js');
const authenticateToken = require('../middleware/auth.js');

const router = express.Router();

// register new user
router.post("/", authenticateToken, createBooking);
router.get("/", authenticateToken, getAllBookings);

module.exports = router;