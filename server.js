const express = require("express");
const path = require("path");
require("dotenv").config(); //.env use

const PORT = process.env.PORT || 3001;
const server = express();

const db = require("./models");

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "production") server.use(express.static("client/build"));

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(require("./routes/recipe-api-routes.js"));

// Send every request to the React app
// Define any API routes before this runs
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  

db.sequelize.sync().then(function(){
    server.listen(PORT,function(){
        console.log(`🌎 ==> API server now on port http://localhost:${PORT}`);
    });
});
