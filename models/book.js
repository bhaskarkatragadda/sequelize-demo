const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./author');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Author,
      key: 'id',
    },
  },
  genre: DataTypes.STRING,
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  publicationYear: DataTypes.INTEGER,
});

module.exports = Book;
