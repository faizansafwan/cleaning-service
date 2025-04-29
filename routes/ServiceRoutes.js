const express = require('express');
const { createService } = require('../controllers/ServiceController.js');

const router = express.Router();

// POST service
router.post('/', createService);

module.exports = router;
