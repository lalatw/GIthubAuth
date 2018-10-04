var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./index.html"))});

    app.get("/github/callback/", function(req, res) {
        console.log("hello");
        res.JSON.stringify(res);
    })

}
