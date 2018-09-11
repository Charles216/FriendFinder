var friends = [];
module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        var friendData = req.body;
        //console.log(req.body);
        friends.push(friendData);

    })
    app.get("/api/friends", function (req, res) {
        
        res.json(friends);
    })
}
