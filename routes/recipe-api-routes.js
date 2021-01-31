const router = require("express").Router();
const axios = require("axios");
const queryExample = require("../queryExample.json");

router.get("/recipe", (req, res) => {
    res.json(queryExample);
});

module.exports = router;