var path = require("path");
var express = require('express');
var app = express();
var request = require("request");


module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./index.html"))});
    
    app.get("/main", function(req, res) {
        res.sendFile(path.join(__dirname, "./main.html"))});

    app.get("/github/callback/", function(req, res) {
        console.log("hello");
        var session_code = req.query.code;
        console.log(session_code);
        res.send("code: "+ session_code);
        // redirect_uri="https://evening-basin-39728.herokuapp.com/main"
        var jsonObj = JSON.stringify({
            code: session_code,
            client_id:"e52b2491623d91b826f2",
            client_secret:"704548b912277672139d79560c6ef28017a6b3df"
    });
        request({
            url:"https://github.com/login/oauth/access_token",
            method:"POST",
            json:true,
            body:jsonObj,
            function (error, response, body) {
                if (!error&&response.statusCode ==200) {
                    console.log(response);
                    var access_token=JSON.parse(response)['access_token'];
                    console.log(access_token);
                }
            }

        });
        });




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
