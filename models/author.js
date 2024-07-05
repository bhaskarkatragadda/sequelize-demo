console.log("Hello World");
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: DataTypes.STRING,
});

export default Author;
