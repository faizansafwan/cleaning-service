const Service = require('../models/Service.js');

// Create a new service
async function createService(req, res) {
    const { name } = req.body;

    // if the field empty
    if (!name) {
        return res.status(400).json({ message: 'Service name is required' });
    }

    try {

    // create service
        const newService = await Service.create({ name });

        res.status(201).json({ message: 'Service created successfully', service: newService });

    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


// Get all services
async function getAllServices(req, res) {
    try {
        const services = await Service.findAll();
        res.status(200).json({ services });
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { createService, getAllServices };
