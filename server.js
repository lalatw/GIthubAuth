var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/routing.js")(app);

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });