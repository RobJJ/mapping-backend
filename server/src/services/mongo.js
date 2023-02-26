const mongoose = require("mongoose");
//
const MONGO_URL = process.env.MONGO_URL;
//
//
//
mongoose.connection.once("open", () => {
  console.log("MongoDB connection approved!".cyan);
});
//
mongoose.connection.on("error", (err) => {
  console.log("Error: ", err);
});
//
async function mongoConnect(params) {
  await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect(params) {
  await mongoose.disconnect();
}
//
module.exports = {
  mongoConnect,
  mongoDisconnect,
};
