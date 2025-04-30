const { Booking, User, Service } = require('../models');

// Create a new booking
async function createBooking(req, res) {
    const { customer_name, address, date_time, service_id } = req.body;

    // extract user id from logged in user
    const user_id = req.user.id;

    // Validate required fields
    if (!customer_name || !address || !date_time || !service_id ) {
    return res.status(400).json({ message: 'All fields are required' });
    }

    try {
    
        // Validate user and service existence
        const user = await User.findByPk(user_id);

        if (!user){
            return res.status(404).json({ message: 'User not found' });

        }

        const service = await Service.findByPk(service_id);

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });

        }
        // Create booking
        const booking = await Booking.create({
            customer_name,
            address,
            date_time,
            service_id,
            user_id
        });

        res.status(201).json({ message: 'Booking created successfully', booking });
    } 
    catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}


async function getAllBookings(req, res) {

    // extracting user id from logged in user
    const user_id = req.user.id; 

    try {

        // get all the booking that belongs to logged in user
        const bookings = await Booking.findAll({
        where: { user_id },
        include: [{ model: Service, attributes: ['name'] }]
        });

        res.status(200).json({ bookings });

    } 

    catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


async function deleteBooking(req, res) {
    const bookingId = req.params.id;
    const user_id = req.user.id;

    try {
        const booking = await Booking.findOne({ where: { id: bookingId, user_id } });

        

        if (!user_id) {
        return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found or unauthorized' });
        }

        console.log(bookingId);
        
        await booking.destroy();

        res.status(200).json({ message: 'Booking deleted successfully' });

    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


async function updateBooking(req, res) {
    const bookingId = req.params.id;
    const { customer_name, address, date_time, service_id } = req.body;
    const user_id = req.user.id;

    try {
        // Find the booking
        const booking = await Booking.findOne({ where: { id: bookingId, user_id } });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found or unauthorized' });
        }


        // Update the booking
        await booking.update({ customer_name, address, date_time, service_id });

        res.status(200).json({ message: 'Booking updated successfully', booking });

    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = { createBooking, getAllBookings, deleteBooking, updateBooking };
