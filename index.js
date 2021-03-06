// Import dependencies
//--------------------------------------------------------
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./keys");
const app = express();
const path = require("path");
const server = http.createServer(app);
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

require("./services/cache");

// Configure Express server
//--------------------------------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));

if (["dev"].includes(process.env.NODE_ENV)) {
  app.use(morgan("combined"));
}

app.use(routes);
// Configure Mongoose
//--------------------------------------------------------
mongoose.Promise = global.Promise;
mongoose
  .connect(keys.MONGODB_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch(err => console.log(err));
if (["dev"].includes(process.env.NODE_ENV)) {
  // scope static assets to express
  // app.use(express.static(path.join(__dirname, "client/public")));
  // send SPA files to client
  app.use("*", (req, res, next) => {
    console.log("hell");
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

if (["prod", "ci"].includes(process.env.NODE_ENV)) {
  // scope static assets to express
  app.use(express.static(path.join(__dirname, "client/dist/")));
  // send SPA files to client
  app.use("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"));
  });
}

// Start server
//--------------------------------------------------------
const expressServer = app.listen(PORT, () => {
  console.log("listening to port: ", PORT);
});

module.exports = expressServer;
