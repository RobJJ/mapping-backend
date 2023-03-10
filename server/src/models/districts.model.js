const districts = require("./districts.mongo");
const { v4: uuidv4 } = require("uuid");

// this func is superceded by multi param query
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
// this func is superceded by multi param query
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
async function getDistrictsByMultiParam(
  YEAR,
  REGION_ID,
  PROVINCE_ID,
  DISTRICT_ID,
  POP_ZONE
) {
  const filterOptions = {};
  // try neaten this up in future.. flow revised
  if (YEAR) {
    filterOptions.YEAR = YEAR;
  }
  if (REGION_ID) {
    filterOptions.REGION_ID = REGION_ID;
  }
  if (PROVINCE_ID) {
    filterOptions.PROVINCE_ID = PROVINCE_ID;
  }
  if (DISTRICT_ID) {
    filterOptions.DISTRICT_ID = DISTRICT_ID;
  }
  if (POP_ZONE) {
    filterOptions.POP_ZONE = POP_ZONE;
  }

  return await districts.find(filterOptions, { _id: 0 });
}
//
// Lets get array of years that exists in the database
async function getYears() {
  const uniqueYears = await districts.distinct("YEAR");
  return { uniqueYears };
}
//

// ******* these functions could be used to provide unique information on the regions-provinces-districts so that it can be used on the map without having to do an opperation.. These will be called and stored in cache.. eg,, number of provinces in a region, or districts in a province.. etc

// lets get an array of objects that contain REGION and REGION ID props
async function getRegionsAndIds() {
  // returns an arr of regions and their ids.. format.. _id: "REGION", regionId: "REGION_ID"
  // the aggregate method is a powerful way of doing opperations on a model!! learn it!
  const uniqueRegionsAndIds = await districts.aggregate([
    {
      $group: { _id: "$REGION", regionId: { $first: "$REGION_ID" } },
    },
  ]);

  return uniqueRegionsAndIds;
  // this is a Map object with same shit, just named better.. test purpose
  // const testMap = new Map();
  // uniqueObjects.forEach((region) => {
  //   testMap.set(region._id, region.regionId);
  // });
}

async function getProvincesAndIds() {
  const uniqueProvincesAndIds = await districts.aggregate([
    {
      $group: { _id: "$PROVINCE", provinceId: { $first: "$PROVINCE_ID" } },
    },
  ]);
  console.log(uniqueProvincesAndIds.length);
  return uniqueProvincesAndIds;
}

async function getDistrictsAndIds() {
  const uniqueDistrictsAndIds = await districts.aggregate([
    {
      $group: { _id: "$DISTRICT", districtId: { $first: "$DISTRICT_ID" } },
    },
  ]);
  console.log(uniqueDistrictsAndIds.length);
  return uniqueDistrictsAndIds;
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
  getYears,
  getRegionsAndIds,
  getProvincesAndIds,
  getDistrictsAndIds,
};
