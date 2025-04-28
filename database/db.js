// db.js
const { Sequelize } = require('sequelize');

// Connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // It will create this file automatically
});

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully.');

    await sequelize.sync();
    console.log("table created successful");
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

testConnection();

module.exports = sequelize;
