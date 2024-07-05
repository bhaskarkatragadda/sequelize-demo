
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const setUpAssociations = require('./config/associations');
const authorRoutes = require('./routes/author.routes');
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests
app.use(express.json()); // Middleware to parse JSON requests


async function initializeDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      // relationships
      setUpAssociations()
       // Sync all models with the database (create tables if they don't exist)
      await sequelize.sync({ force: true });
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Unable to connect to the database or sync models:', error);
    }
  }
  
  // To verify that the tables were created successfully
  async function listTables() {
    try {
      const tables = await sequelize.getQueryInterface().showAllSchemas();
      console.log(tables);
    } catch (error) {
      console.error('Error listing tables:', error);
    }
  }
  
initializeDatabase().then(() => { listTables(); });

// Ping route
app.use('/api/ping', ((req, res) => {  
    res.json({ message: 'pong' });
}));

app.use('/api/authors',authorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
