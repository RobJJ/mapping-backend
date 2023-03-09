const geojsons = require("./geojson.mongo");

async function getAllGeoJson() {
  return await geojsons.find(
    {},
    {
      // think about what is best to keep out of the cache?
      _id: 0,
      //   __v: 0,
    }
  );
}

module.exports = {
  getAllGeoJson,
};
