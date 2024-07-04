const { Sequelize } = require('sequelize');

// // Replace with your database credentials and configuration
const sequelize = new Sequelize('sqlite::memory:')

module.exports = sequelize;