var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars")

<<<<<<< Updated upstream
// ENABLE PORT
const PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
=======
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js")
app.use(routes);

app.listen(PORT, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});
>>>>>>> Stashed changes
