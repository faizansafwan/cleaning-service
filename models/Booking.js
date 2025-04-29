const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');

// Booking table structure
const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'services', 
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'id'
    }
  }
}, {
  tableName: 'bookings',
  timestamps: false
});

module.exports = Booking;
