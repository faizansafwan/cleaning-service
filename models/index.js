const Booking = require('./Booking.js');
const Service = require('./Service.js');
const User = require('./User.js');

// Define associations
Booking.belongsTo(Service, { foreignKey: 'service_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });

Service.hasMany(Booking, { foreignKey: 'service_id' });
User.hasMany(Booking, { foreignKey: 'user_id' });

module.exports = {
  Booking,
  Service,
  User,
};
