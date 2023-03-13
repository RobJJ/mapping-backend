const {
  httpGetGeoJsonData,
  httpTest,
} = require("../routes/geojson.controller");

const express = require("express");
const geoRouter = express.Router();

geoRouter.get("/", httpGetGeoJsonData);
geoRouter.get("/vietnam", httpTest);

module.exports = { geoRouter };
