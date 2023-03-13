const path = require("path");

const { getAllGeoJson } = require("../models/geojson.model");
const { getAllGeoData } = require("../models/vietnam-geojson.model");

async function httpGetGeoJsonData(req, res) {
  return res.status(200).json(await getAllGeoJson());
}

async function httpTest(req, res) {
  // return res.status(200).json()
  // const data = res
  //   .status(200)
  //   .sendFile(path.join(__dirname, "..", "data", "geojson-vietnam-country.js"));
  return res.status(200).json(await getAllGeoData());
}

module.exports = { httpGetGeoJsonData, httpTest };
