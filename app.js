var express = express


$(".subbtn").on("click",  function(event) {
        
    event.preventDefault();
    var email = $(".inputemail").val().trim();
    var pw = $(".inputpw").val().trim();

    var queryURL = "https://github.com/login/oauth/authorize+" + itemName + "&rating=g&limit=10&api_key=TVxQvzKbz76RUCSYfQDXsZU5CHvX6uxY";
    $("#mainimages").empty();

    $.ajax ({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(response);


});  