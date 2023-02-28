const { model } = require("mongoose");
const districtModel = require("../models/districts.model");
//

module.exports = {
  Query: {
    district: (_parent, args) => {
      return districtModel.getDistrictById(args.id);
    },
    districts: () => {
      return districtModel.getAllDistricts();
    },
    districtsBy: (_parent, { input }, context) => {
      // we dont have year yet on this data
      const { YEAR, REGION, PROVINCE, POP_ZONE } = input;
      return districtModel.getDistrictsByMultiParam(
        YEAR,
        REGION,
        PROVINCE,
        POP_ZONE
      );
      // return districtModel.getDistrictsByMultiParam(input);
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
