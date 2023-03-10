const geojsons = require("./geojson.mongo");

async function getAllGeoJson() {
  return await geojsons.find();
}

module.exports = {
  getAllGeoJson,
};
