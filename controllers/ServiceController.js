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

module.exports = { createService };
