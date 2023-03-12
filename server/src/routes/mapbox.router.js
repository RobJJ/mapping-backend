const { httpGetMapboxUrl } = require("./mapbox.controller");

const express = require("express");
const mapboxRouter = express.Router();

mapboxRouter.get("/", httpGetMapboxUrl);
module.exports = { mapboxRouter };
