const httpGetGeoJsonData = require("../routes/geojson.controller");

const express = require("express");
const geoRouter = express.Router();

geoRouter.get("/", httpGetGeoJsonData);
module.exports = { geoRouter };
