const express = require('express');
const { createService, getAllServices } = require('../controllers/ServiceController.js');

const router = express.Router();

// POST service
router.post('/', createService);

// Get service
router.get('/', getAllServices);

module.exports = router;
