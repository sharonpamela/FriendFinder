
let friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });

    app.post("/api/friends", function (req, res) {

        let currentScores = req.body.scores // this is an array of scores
        let firstMatchScores = friendsData[0].scores; // this is an array of scores
        let bestMatch;
        let currCompScore = 0;

        //start off algorithm by calculating the current user's score's with the first person in the friends DB
        for (i = 0; i < currentScores.length; i++) {
            currCompScore += parseInt(Math.abs(parseInt(firstMatchScores[i]) - parseInt(currentScores[i])));
        }

        // assign this first person to be the closest match until otherwise proven
        bestMatch = {...friendsData[0], compScore: currCompScore};

        // compare the score with all the other people in the DB
        for (possibleMatch in friendsData) {
            let matchScores = (friendsData[possibleMatch].scores); // this is an array of scores in str
            currCompScore = 0; // reset the score before each calculation
            for (i = 1; i < matchScores.length; i++) {
                currCompScore += parseInt(Math.abs(parseInt(matchScores[i]) - parseInt(currentScores[i])));
            }
            if (currCompScore < bestMatch.compScore) {
                bestMatch = {...friendsData[possibleMatch], compScore: currCompScore};
            }
        }

        //push current user so that he/she is available to be a possible match
        friendsData.push(req.body);

        // respond with best match
        res.json(bestMatch);
    });
};
