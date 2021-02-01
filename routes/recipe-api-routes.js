const router = require("express").Router();
const axios = require("axios");
const queryExample = require("../queryExample.json");

router.get("/recipe", (req, res) => {
    console.log("Made it");
    res.json(queryExample);
});

module.exports = router;