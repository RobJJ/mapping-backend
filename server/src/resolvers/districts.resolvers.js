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
      const { YEAR, REGION_ID, PROVINCE_ID, DISTRICT_ID, POP_ZONE } = input;
      return districtModel.getDistrictsByMultiParam(
        YEAR,
        REGION_ID,
        PROVINCE_ID,
        DISTRICT_ID,
        POP_ZONE
      );
      // return districtModel.getDistrictsByMultiParam(input);
    },
    uniqueYearInfo: (_parent, args, context) => {
      return districtModel.getYearInfo();
    },
    uniqueRegionInfo: (_parent, args, context) => {
      return districtModel.getRegionInfo();
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
