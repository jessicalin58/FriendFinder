var newFriend = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(newFriend);
        
        //console.log(newFriend[1]);
        console.log(newFriend[1].scores);
        console.log(newFriend[5].scores);

        if (newFriend[1].scores === newFriend[5].scores){
            alert("You have a match!");
        }

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
    });

    // app.post("/api/clear", function () {
    //     // Empty out the arrays of data
    //     newFriend = [];

    //     console.log(newFriend);
    // });
};
