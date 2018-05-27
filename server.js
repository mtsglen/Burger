var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(express.static("."));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
