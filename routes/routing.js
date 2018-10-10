var path = require("path");
var express = require('express');
var app = express();
var request = require("request");
var Cookies = require("universal-cookie");
const cookies = new Cookies();


module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))});
    
    app.get("/main", function(req, res) {
        console.log("hi");
        res.sendFile(path.join(__dirname, "../public/main.html"))});

    app.get("/github/callback/", function(req, res) {
        console.log("hello");
        var session_code = req.query.code;
        console.log(session_code);
        res.sendFile(path.join(__dirname, "../public/index.html"));
        // res.send("code: "+ session_code);

        request({
            url:"https://github.com/login/oauth/access_token",
            method:"POST",
            json:true,
            body:{code: session_code,client_id:"e52b2491623d91b826f2",client_secret:"704548b912277672139d79560c6ef28017a6b3df",accept:"json"}
        },
            function (error, response, body) {
                console.log(response.body);
                if (!error&&response.statusCode ==200) {
                    console.log(response);
                    //var access_token=JSON.parse(response)['access_token'];
                    console.log("AC="+response.body.access_token);
                    cookies.set("access token", response.body.access_token, { path: '/' });
                    console.log(cookies.get("access token")); 
                    
                }
            }

        );
        });


    app.get("/user", function(req, res) {

        var access_token=cookies.get("access token");
        console.log(cookies.get("access token")); 
        console.log(access_token);
        
        request({
            url:"https://api.github.com/user?access_token="+access_token,
            method:"GET"
        },

            function(error, response, body) {
                console.log(response.body)
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
