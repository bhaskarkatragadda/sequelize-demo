import { Sequelize } from "sequelize"

// // Replace with your database credentials and configuration
const sequelize = new Sequelize('sqlite::memory:', {
    logging: console.log,
})

export default sequelize