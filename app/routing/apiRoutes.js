var oldFriend = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(newFriend);
        
        //console.log(newFriend[1]);
        console.log(newFriend[1].scores);
        console.log(newFriend[5].scores);

  

    });


    app.post("/api/friends", function (req, res) {

        parseInt(newFriend.scores);

        if (newFriend.length > 4) {
            newFriend.push(req.body);
            res.json(true);
            

        }
        else {
            newFriend.push(req.body);
            res.json(false);
            console.log(newFriend.length)
        }

        //Compare oldFriend with newFriend 
        //newFriend = req.body -> console log it
        //lop throught the old ones
        //create another lop to go througth the scores
        //1.subtract the scores and then add (then add a var=SUM) then compare setting up another var = tosum will never add up to (50);
        


    });

    // app.post("/api/clear", function () {
    //     // Empty out the arrays of data
    //     newFriend = [];

    //     console.log(newFriend);
    // });
};
