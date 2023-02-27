const districts = require("./districts.mongo");
const { v4: uuidv4 } = require("uuid");

async function getAllDistricts() {
  return await districts.find(
    {},
    {
      // think about what is best to keep out of the cache?
      _id: 0,
      //   __v: 0,
    }
  );
}

async function getDistrictById(id) {
  return await districts.find(
    { DISTRICT_ID: id },
    {
      _id: 0,
      //   __v: 0,
    }
  );
}
// we dont have year yet for this function
async function getDistrictsByMultiParam(REGION, PROVINCE, POP_ZONE) {
  const filterOptions = {};

  if (REGION && REGION !== "") {
    filterOptions.REGION = REGION;
  }

  if (PROVINCE && PROVINCE !== "") {
    filterOptions.PROVINCE = PROVINCE;
  }

  if (POP_ZONE && POP_ZONE !== "") {
    filterOptions.POP_ZONE = POP_ZONE;
  }

  return await districts.find(filterOptions, { _id: 0 });
}
//
// get all the books from the DB
// async function getAllBooks() {
//   return await books.find(
//     {},
//     {
//       _id: 0,
//       __v: 0,
//     }
//   );
// }
// //
// //
// async function getBooksByRating(minRating) {
//   const allBooks = await getAllBooks();
//   return allBooks.filter((book) => Number(book.rating) >= Number(minRating));
// }
// //
// //
// async function saveBook(newbook) {
//   await books.findOneAndUpdate({ name: newbook.name }, newbook, {
//     upsert: true,
//   });
// }
// //
// //
// async function addNewBook(name, author, rating) {
//   const newBook = Object.assign(
//     { name, author, rating },
//     {
//       inStock: true,
//       bookId: uuidv4(),
//     }
//   );

//   await saveBook(newBook);
//   return newBook;
// }
// //
// //
// async function deleteBookWithId(bookId) {
//   // this method return deleted obj
//   const deletedBook = await books.findOneAndDelete({ bookId: bookId });
//   // truthy check
//   // return deletedBook.bookId === bookId;
//   return deletedBook;
// }
// //
// //
// async function editBookWithId(bookId, book) {
//   let foundBook = await books.findOne({
//     bookId: bookId,
//   });
//   foundBook = { ...book };
//   const updatedBook = await books.updateOne(
//     { bookId: bookId },
//     { $set: foundBook }
//   );
//   // return meta data from mongoose
//   // return updatedBook.modifiedCount === 1;
//   // return the updatedBook instead here for graphQl
//   return foundBook;
// }
// //
// //
// //
// //
module.exports = {
  getAllDistricts,
  getDistrictById,
  getDistrictsByMultiParam,
};
