var path = require("path");

module.exports = function(app) {
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./index.html"))});

    
    //GET Route to /survey which will display the survey html page.
    app.get("/github/callback", function(req, res) {
        res.send("helloLee");
    })

}
