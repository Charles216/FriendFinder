const friends = [];

app.post("/api/friends", function (req, res) {
    const friend = req.body;
    
    friends.push(friend);

    res.json(friend);
});

