const { Sequelize } = require('sequelize');

// // Replace with your database credentials and configuration
const sequelize = new Sequelize('sqlite::memory:', {
    logging: console.log,
})

module.exports = sequelize;