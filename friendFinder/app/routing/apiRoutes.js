var friends = require('../data/friends.js');
var path = require('path');


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function (req, res) {
        var user = req.body;
        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000
        }
        var difference = 0;
        for (var i = 0; i < friends.length; i++) {
            difference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                difference += Math.abs(parseInt(user.scores[j]) - parseInt(friends[i].scores[j]))
            }
        if (difference <= bestMatch.difference){
           bestMatch.name = friends[i].name
           bestMatch.photo = friends[i].photo
           bestMatch.difference = difference[i].difference 
        }
        }
        friends.push(user)
        res.json(bestMatch)
    })

};