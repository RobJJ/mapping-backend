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

//
async function mongoConnect(params) {
  // Could enable logging features here on setup of the function
  // mongoose.set("debug", true);
  // var options = {
  //   logger: console.log,
  //   loggerLevel: "info",
  //   maxPoolSize: 10,
  // };
  // edit this to pass in options
  // await mongoose.connect(MONGO_URL, options);
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
