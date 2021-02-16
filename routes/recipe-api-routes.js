const router = require("express").Router();
const axios = require("axios");
const queryExample = require("../queryExmaple.json");

router.get("/recipes/:ingredient", (req, res) => {
    const { ingredient } = req.params
    axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.EDMAM_API_ID}&app_key=${process.env.EDMAM_API_KEY}`)
    .then(results => {
        console.log(results);
        res.json(results.data);
    })
    .catch(error => {
        res.json(error);
    });
});

router.get("/recipes/:ingredient/:page", (req, res) => {
    console.log(req.params);
    const { ingredient, page } = req.params;
    const start = parseInt(page) * 10;
    const end = start + 10;
    axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.EDMAM_API_ID}&app_key=${process.env.EDMAM_API_KEY}&from=${start}&to=${end}`)
    .then(({data}) => {
        res.json(data);
    })
    .catch(error => res.json(error));
});

router.get("/recipes", (req, res) => res.json(queryExample));

module.exports = router;