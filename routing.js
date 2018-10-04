var path = require("path");

module.exports = function(app) {
    //GET Route to /survey which will display the survey html page.
    app.get("/github/callback", function(req, res) {
        res.send("helloLee");
    });

};
