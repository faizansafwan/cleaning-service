const express = require('express');
const { createBooking, getAllBookings, deleteBooking, updateBooking } = require('../controllers/BookingController.js');
const authenticateToken = require('../middleware/auth.js');

const router = express.Router();

// register new user
router.post("/", authenticateToken, createBooking);
router.get("/", authenticateToken, getAllBookings);
router.delete("/:id", authenticateToken, deleteBooking);
router.put("/:id", authenticateToken, updateBooking);

module.exports = router;