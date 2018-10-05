var express = require('express');
var app = express();
var path = require("path");
var request = require("request");

$("#subbtn").on("click",  function(event) {   
    event.preventDefault();
    var email = $(".inputemail").val().trim();
    var pw = $(".inputpw").val().trim();

    var queryURL = "https://github.com/login/oauth/authorize?client_id=e52b2491623d91b826f2&state=active";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(response);
        app.get("/github/callback/", function(req, res) {
            console.log("hello");
            var session_code = req.query.code;
            console.log(session_code);
            res.send("code: "+ session_code);
            // redirect_uri="https://evening-basin-39728.herokuapp.com/main"
        //     var jsonObj = JSON.stringify({
        //         code: "8b6d87c8d12080f78310",
        //         client_id:"e52b2491623d91b826f2",
        //         client_secret:"704548b912277672139d79560c6ef28017a6b3df"
        // });
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
                    }
                }
    
            );
            });


    });


});  


