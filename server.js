const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
//=====================================
// Route for home page....
app.get("/", function (req, res) {
  //res.send("I am trying to work");
     res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// Route for survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// route for showing all of the friends
 app.get("/api/friends", function (req, res) {
     return res.json(freinds);
 });

// Create a new freind - JSON input
 app.post('/api/freinds', function(req, res) {
     let newFriend = req.body;
     newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

     console.log(newFriend);
     friends.push(newFriend);
     res.join(newFriend);
 });

app.listen(PORT, function () {
    console.log(`Friend Finder LIVE & ONLINE at ${PORT} 🌎`);
});