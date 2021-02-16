const router = require("express").Router();
const axios = require("axios");
const queryExample = require("../queryExmaple.json");

router.get("/recipes/:ingredient", (req, res) => {
    const { ingredient } = req.params
    console.log(req.params);
    axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.EDMAM_API_ID}&app_key=${process.env.EDMAM_API_KEY}`)
    .then(results => {
        console.log(results);
        res.json(results.data);
    })
    .catch(error => {
        res.json(error);
    });
});

router.get("/recipes", (req, res) => res.json(queryExample));

module.exports = router;