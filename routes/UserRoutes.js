const express = require('express');
const { createUser, loginUser } = require('../controllers/UserController.js');

const router = express.Router();

// register new user
router.post("/register", createUser);

// login user
router.post("/login", loginUser);
module.exports = router;