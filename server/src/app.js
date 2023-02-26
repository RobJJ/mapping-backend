const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(
  cors({
    origin: "http://localhost:8000/graphql",
  })
);

// app.use(express.static(path.join(__dirname, "..", "public")));

// removed this for testing.... - lets you then reroute to the Apollo graphiql ui
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

module.exports = app;
