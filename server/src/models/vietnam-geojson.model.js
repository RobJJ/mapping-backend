const vietnamGeoJson = require("./vietnam-geojson.mongo");

async function getAllGeoData() {
  return await vietnamGeoJson.find();
}

module.exports = {
  getAllGeoData,
};
