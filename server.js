const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const server = express();
const db = require("./models");


if(process.env.Node_ENV === "production") {
    server.use(express.static("client/build"));
}

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(require("./routes/recipe-api-routes.js"));

// Send every request to the React app
// Define any API routes before this runs
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  

db.sequelize.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`🌎 ==> API server now on port http://localhost:${PORT}`);
    });
});



