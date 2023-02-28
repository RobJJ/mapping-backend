const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  YEAR: { type: String, required: true },
  PROVINCE: { type: String, required: true },
  REGION: { type: String, required: true },
  DISTRICT: { type: String, required: true },
  REGION_ID: { type: String, required: true },
  PROVINCE_ID: { type: String, required: true },
  DISTRICT_ID: { type: String, required: true },
  POP_ZONE: { type: String, required: true },
  ECON_SCORE: { type: String, required: true },
  FOREST_SCORE: { type: String, required: true },
  AIR_SCORE: { type: String, required: true },
  TEMP_SCORE: { type: String, required: true },
  ENVR_SCORE: { type: String, required: true },
  COLOR: { type: String, required: true },
});

// 1st argument: Capital + Singular... mongoose then lowers and plurals and matches db collection
// This is an object model that mongoose creates...

// naming ?? not sure how in my case
module.exports = mongoose.model("District", districtSchema);
