const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    Shape_Leng: { type: Number, required: true },
    Shape_Area: { type: Number, required: true },
    shapeName: { type: String, required: true },
    shapeISO: { type: String, required: true },
    Level: { type: String, required: true },
    shapeID: { type: String, required: true },
    shapeGroup: { type: String, required: true },
    shapeType: { type: String, required: true },
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
      type: [[[[Number]]]],
      index: "2dsphere",
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

module.exports = mongoose.model(
  "Vietnam",
  featureCollectionSchema,
  "vietnamGeoJson"
);

// {"type":"FeatureCollection", "features": [
