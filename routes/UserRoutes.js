const express = require('express');
const { createUser } = require('../controllers/UserController.js');

const router = express.Router();

// register new user
router.post("/register", createUser);

module.exports = router;