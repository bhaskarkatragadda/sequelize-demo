
const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json()); // Middleware to parse JSON requests

// Test database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

// Ping route
app.use('/api/ping', ((req, res) => {   // Test route
    res.json({ message: 'pong' });
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

