// Dependencies 
let express = require("express");

// Tells node that we are creating an "express" server
let app = express();

// Sets an initial port.
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
