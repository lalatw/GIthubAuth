$(document).ready(function() {
    $("#subbtn").click(function() {   
        event.preventDefault();
  
        var queryURL = "https://github.com/login/oauth/authorize?client_id=e52b2491623d91b826f2&state=active";
        $(location).attr('href',queryURL);
        // $.ajax ({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function(response) {
        //     console.log(response);
        // });
    });  

})