const router = require("express").Router();
const axios = require("axios");
const queryExample = require("../queryExample.json");

router.get("/recipes/:ingredient", (req, res) => {
    console.log("Made it");
    console.log(req.params);
    res.json(queryExample);
});

module.exports = router;