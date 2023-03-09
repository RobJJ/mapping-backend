const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["Feature"],
    default: "Feature",
  },
  properties: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
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
      type: mongoose.Schema.Types.Mixed,
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

module.exports = mongoose.model("GeoJson", featureCollectionSchema);
