const router = require("express").Router();
const axios = require("axios");

router.get("/books/:query"), ({body, params}, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${body}:keyes&key=${key}`)
    .then(res => res.json(res))
    .catch(err => res.json(err));
});