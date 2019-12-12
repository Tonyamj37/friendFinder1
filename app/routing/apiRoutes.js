// Loading data
var friends = require("../data/friends");
// Get requests
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var myForeverFriend = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
// parse results
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;

// for loop through range of possibilities
        for (var i = 0; i < friends.length; i++) {
            var bestFriend = friends[i];
            totalDifference = 0;

            console.log(bestFriend.name);

// After looping through every possibility
        for (var j = 0; j < bestFriend.scores.length; j++) {
            var currentScore = bestFriend.scores[j];
            var currentUserScore = userScores[j];
// Parsent scores
            totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentScore));
            }

        if (totalDifference <= myForeverFriend.friendDifference) {
                myForeverFriend.name = bestFriend.name;
                myForeverFriend.photo = bestFriend.photo;
                myForeverFriend.friendDifference = totalDifference;
            }
        }
// Return data from the database
    friends.push(userData);

// Return JSON with bestfriend match
    res.json(myForeverFriend);
    
    });

};