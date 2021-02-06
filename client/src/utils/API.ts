import axios from "axios";

export const getRecipesByIngredient = (ingredient: string) => axios.get(`/recipes/${ingredient}`);

export const getSampleRecipes = () => axios.get("/recipes");

export {};