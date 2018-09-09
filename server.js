const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, function () {
    console.log(`Friend Finder LIVE & ONLINE at ${PORT} 🌎`);
});