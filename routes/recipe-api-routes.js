const router = require("express").Router();
const axios = require("axios");
const queryExample = require("../queryExmaple.json");

router.get("/recipes/:ingredient", (req, res) => {
    console.log(req.params);
    res.json(queryExample);
});

router.get("/recipes", (req, res) => res.json(queryExample));

module.exports = router;