import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';


const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  loanDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});



export default Loan;
