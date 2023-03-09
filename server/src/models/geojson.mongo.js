const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    GID_1: { type: String, required: true },
    GID_0: { type: String, required: true },
    COUNTRY: { type: String, required: true },
    NAME_1: { type: String, required: true },
    VARNAME_1: { type: String, required: true },
    NL_NAME_1: { type: String, required: true },
    TYPE_1: { type: String, required: true },
    ENGTYPE_1: { type: String, required: true },
    CC_1: { type: String, required: true },
    HASC_1: { type: String, required: true },
    ISO_1: { type: String, required: true },
  },
  geometry: {
    type: {
      type: String,
      required: true,
      enum: [
        "Point",
        "MultiPoint",
        "LineString",
        "MultiLineString",
        "Polygon",
        "MultiPolygon",
        "GeometryCollection",
      ],
    },
    coordinates: {
      type: [[[Number]]],
      required: true,
    },
  },
});

const featureCollectionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["FeatureCollection"],
    default: "FeatureCollection",
  },
  name: {
    type: String,
    required: true,
  },
  crs: {
    type: {
      type: String,
      required: true,
      enum: ["name"],
      default: "name",
    },
    properties: {
      name: {
        type: String,
        required: true,
      },
    },
  },
  features: {
    type: [featureSchema],
    required: true,
  },
});

// const geoTestSchema = new mongoose.Schema({
//   name: String,
//   location: {
//     type: {
//       type: String, // Don't do `{ location: { type: String } }`
//       enum: ["Point"], // 'location.type' must be 'Point'
//       required: true,
//     },
//     coordinates: {
//       type: [Number],
//       required: true,
//     },
//   },
// });

module.exports = mongoose.model("GeoJson", featureCollectionSchema, "geojsons");
