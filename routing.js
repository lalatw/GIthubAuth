var path = require("path");
var express = require('express');
var app = express();

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./index.html"))});
    
    app.get("/main", function(req, res) {
        res.sendFile(path.join(__dirname, "./main.html"))});

    app.get("/callback/", function(req, res) {
        console.log("hello");
        res.send("helloLEE");
        var code = res.params("code");
        console.log(code);

        // $.ajax ({
        //     url: "https://github.com/login/oauth/access_token?code=ed0f9c98293094f5755b?redirect_uri=https://evening-basin-39728.herokuapp.com/main",
        //     method: "POST"
        // }) .then(function(response) {
        //     console.log(response);
        // });


    })




    // app.post('/signin', passport.authenticate('local-signin', {
    //     successRedirect: '/',
    //     failureRedirect: '/signup'
    //     }), function(res, req){
    //         console.log("signing in...")
    //     }
    // );

    // app.get('/signout', function (req, res) {
    //     res.clearCookie('userid');

    //     req.session.destroy(function (err) {

    //         res.redirect('/');

    //     });
    // });



}
