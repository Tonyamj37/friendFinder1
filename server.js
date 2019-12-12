/// Dependencies ///
// Requiring necessary npm packages
var express = require("express");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));


// Path requiring our routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

/// Listerner ///
// Logging a message to see if the app runs successfully 
  app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT); 

  });

