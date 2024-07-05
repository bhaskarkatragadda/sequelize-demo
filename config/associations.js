import Author from '../models/author.js';
import Book from '../models/book.js';
import Loan from '../models/loan.js';
import Member from '../models/member.js';
const setUpAssociations = () => {
 
    Author.hasMany(Book, { foreignKey: 'authorId', as: 'books'});
    Book.belongsTo(Author,{ foreignKey: 'authorId' });

    Loan.belongsTo(Book, { foreignKey: 'bookId' });
    Loan.belongsTo(Member, { foreignKey: 'memberId' });
}

export default setUpAssociations;