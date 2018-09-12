var friends = require("../data/friends.js");
//console.log(friends);
module.exports = function (app) {

    // Access to front and back end here...
    //=====================================
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        //console.log(req.body);

        var leastDiff = 40;
        var totalDiff = 0;
        var bestFriendIndex;

        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(req.body.scores[j] - friends[i].scores[j]);
                totalDiff += difference;

                if (totalDiff < leastDiff) {
                    leastDiff = totalDiff;
                    bestFriendIndex = i;
                    //console.log(leastDiff);
                    //console.log(bestFriendIndex);
                }
            }
        }

        friends.push(userData);
        res.json(friends[bestFriendIndex]);

    })

    app.get("/api/friends", function (req, res) {

        res.json(friends);
    })
}
