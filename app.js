var express = require('express');
var app = express();
var request = require("request");

$("#subbtn").on("click",  function(event) {   
    event.preventDefault();
    var email = $(".inputemail").val().trim();
    var pw = $(".inputpw").val().trim();

    var queryURL = "https://github.com/login/oauth/authorize?client_id=e52b2491623d91b826f2&state=active";


    request({
        url: queryURL,
        method:"GET",
    }) .then(function(response) {
        console.log(response);
    });
});  


