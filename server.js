// Dependencies
// =============================================================
const express = require("express");
const apiRoutes = require("./routing/apiRoutes.js");
const htmlRoutes = require("./routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001


// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// app.use("/assets", express.static("./assets"))


app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// require("./routing/html_routes")(app);
// require("./routing/api_routes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));