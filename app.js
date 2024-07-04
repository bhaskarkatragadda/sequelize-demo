
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const Author = require('./models/author');
const Book = require('./models/book');
const Loan = require('./models/loan');
const Member = require('./models/member');
app.use(express.json()); // Middleware to parse JSON requests


async function initializeDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      // Sync all models with the database (create tables if they don't exist)
      Author.hasMany(Book, { foreignKey: 'authorId' });
      Book.belongsTo(Author,{ foreignKey: 'authorId' });

      Loan.belongsTo(Book, { foreignKey: 'bookId' });
      Loan.belongsTo(Member, { foreignKey: 'memberId' });
      await sequelize.sync({ force: true }); // Re-create all tables
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Unable to connect to the database or sync models:', error);
    }
  }
  
initializeDatabase();

// Ping route
app.use('/api/ping', ((req, res) => {   // Test route
    res.json({ message: 'pong' });
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
