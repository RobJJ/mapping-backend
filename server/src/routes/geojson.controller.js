const { getAllGeoJson } = require("../models/geojson.model");

async function httpGetGeoJsonData(req, res) {
  return res.status(200).json(await getAllGeoJson());
}

module.exports = { httpGetGeoJsonData };
