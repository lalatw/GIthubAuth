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


        var newParams = new Object();
        newParams.code=session_code;
        newParams.client_id="e52b2491623d91b826f2";
        newParams.client_secret="704548b912277672139d79560c6ef28017a6b3df";
        // newParams.redirect_uri="https://evening-basin-39728.herokuapp.com/main";


        request.post(
            "https://github.com/login/oauth/access_token",
            {json: newParams},
            function (error, response, body) {
                if (!error&&response.statusCode ==200) {
                    console.log(body)
                    res.send("response: "+response)
                }
            }

        );
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
