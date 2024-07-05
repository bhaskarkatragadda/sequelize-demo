const Author = require('../models/author');
const Book = require('../models/book');
const Loan = require('../models/loan');
const Member = require('../models/member');
const setUpAssociations = () => {
 
    Author.hasMany(Book, { foreignKey: 'authorId', as: 'books'});
    Book.belongsTo(Author,{ foreignKey: 'authorId' });

    Loan.belongsTo(Book, { foreignKey: 'bookId' });
    Loan.belongsTo(Member, { foreignKey: 'memberId' });
}

module.exports = setUpAssociations;