const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
  console.log(`Friend Finder LIVE & ONLINE at ${PORT} 🌎`);
});
