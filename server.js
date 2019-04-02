// Dependencies 
let express = require("express");
let path = require("path");

// Tells node that we are creating an "express" server
let app = express();

// Sets an initial port.
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
