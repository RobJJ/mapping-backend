const { model } = require("mongoose");
const districtModel = require("../models/districts.model");
//

module.exports = {
  Query: {
    districts: () => {
      return "Hello world";
    },
  },
};

//
// module.exports = {
//   Query: {
//     books: () => {
//       return booksModel.getAllBooks();
//     },
//     booksByRating: (_, args) => {
//       return booksModel.getBooksByRating(args.minRating);
//     },
//   },
//   Mutation: {
//     addNewBook: (parent, args) => {
//       return booksModel.addNewBook(args.name, args.author, args.rating);
//     },
//     deleteBookWithId: (_, args) => {
//       return booksModel.deleteBookWithId(args.bookId);
//     },
//     editBookWithId: (_, args) => {
//       return booksModel.editBookWithId(args.bookId, args.book);
//     },
//   },
// };
