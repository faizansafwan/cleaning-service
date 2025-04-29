const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js'); // Import your database connection


// User table structure
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users', // Table name in the database
  timestamps: false 
});

module.exports = User;
