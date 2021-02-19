const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const queryExample = require("../queryExmaple.json");

router.get("/recipes/:ingredient", (req, res) => {
    const { ingredient } = req.params
    axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.EDMAM_API_ID}&app_key=${process.env.EDMAM_API_KEY}`)
    .then(results => {
        res.json(results.data);
    })
    .catch(error => {
        res.json(error);
    });
});

router.get("/recipes/:ingredient/:page", (req, res) => {
    const { ingredient, page } = req.params;
    const start = parseInt(page);
    const end = start + 10;
    axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.EDMAM_API_ID}&app_key=${process.env.EDMAM_API_KEY}&from=${start}&to=${end}`)
    .then(({data}) => {
        res.json(data);
    })
    .catch(error => res.json(error));
});

router.post("/save-recipe", (req, res) => {
    const {id, recipe} = req.body;

    let recipeIngredients = "";

    recipe.ingredients.forEach(ingredient => {
        recipeIngredients += ingredient.text + ";";
    });
    
    db.Recipe.create({
        userId: id,
        label: recipe.label,
        calories: recipe.calories,
        image: recipe.image,
        totalTime: recipe.totalTime,
        url: recipe.url,
        yield: recipe.yield,
        ingredients: recipeIngredients,
    })
    .then(results => {
        res.json(results);
    })
    .catch(error => res.json(error));
});

router.post("/create-recipe", (req, res) => {
    const { id, recipe } = req.body;

    let recipeIngredients = "";

    recipe.ingredients.forEach(ingredient => {
        recipeIngredients += ingredient.text + ";";
    });


    db.Recipe.create({
        userId: id,
        label: recipe.label,
        calories: recipe.calories,
        image: recipe.image,
        totalTime: recipe.totalTime,
        url: recipe.url,
        yield: recipe.yield,
        ingredients: recipeIngredients,
        userCreated: true,
    })
    .then((results) => res.json(results))
    .catch(error => res.json(error));
});

router.get("/user-saved-recipes/:id", (req, res) => {
    db.Recipe.findAll({
        where: {
            userId: req.params.id,
            userCreated: false
        }
    })
    .then(results => {
        const recipeList = results;
        recipeList.forEach((recipe) => {
            recipe.ingredients = recipe.ingredients.split(";").map(item =>{
                return {text: item}
            });
        });
        res.json(recipeList);
    })
    .catch(error => res.json(error));
});

router.get("/user-created-recipes/:id", (req, res) => {
    db.Recipe.findAll({
        where: {
            userId: req.params.id,
            userCreated: true
        }
    })
    .then(results => {
        const recipeList = results;
        recipeList.forEach((recipe) => {
            recipe.ingredients = recipe.ingredients.split(";").map(item =>{
                return {text: item}
            });
        });
        res.json(recipeList);
    })
    .catch(error => res.json(error));
});

router.delete("/delete-recipe/:id", (req, res) => {
    db.Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(results => res.json(results))
    .catch(error => res.json(error));
});

router.put("/update-recipe/:id", (req, res) => {
    const { ingredients } = req.body; 

    let recipeIngredients = "";
    ingredients.forEach(ingredient => {
        recipeIngredients += ingredient.text + ";";
    });

    const recipe = {
        userId: req.body.userId,
        label: req.body.label,
        calories: req.body.calories,
        image: req.body.image,
        totalTime: req.body.totalTime,
        url: req.body.url,
        tield: req.body.yield,
        ingredients: recipeIngredients,
        userCreated: true,
    }

    db.Recipe.update(recipe, {
        where: {
            id: req.params.id
        }
    })
    .then(results => res.json(results))
    .catch(error => res.json(error));
});

router.get("/recipes", (req, res) => res.json(queryExample));

module.exports = router;