const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js'); // Import your database connection

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'services', 
  timestamps: false     
});

module.exports = Service;
