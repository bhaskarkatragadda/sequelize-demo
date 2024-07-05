import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'
import Author from './author.js'

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

export default Book;
