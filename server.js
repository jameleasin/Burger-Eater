  
// DEPENDENCIES
const express = require("express");
const exphbs = require("express-handlebars");
require('dotenv').config()

// ENABLE PORT
const PORT = process.env.PORT || 8080;

// CREATE APP
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// CREATE ROUTES
const routes = require("./controllers/burgers_controller");
app.use(routes);

// LISTEN FOR CONNECTIONS
app.listen(PORT, function() {
  console.log(` Server listening on: http://localhost:${PORT}`);
});