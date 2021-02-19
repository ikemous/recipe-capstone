import axios from "axios";
import { Recipe } from "./types";

export const getRecipesByIngredient = (ingredient: string) => axios.get(`/recipes/${ingredient}`);

export const getAnotherRecipePage = ({ ingredient, page }: { ingredient:string, page: number}) => axios.get(`/recipes/${ingredient}/${page}`);

export const getSampleRecipes = () => axios.get("/recipes");    

export const getUserRecipes = (userId: string) => axios.get(`/user-saved-recipes/${userId}`);

export const getUserCreatedRecipes = (userId: string) => axios.get(`/user-created-recipes/${userId}`);

export const saveRecipe = (recipe:Recipe, userId: string) => axios.post("/save-recipe", {recipe, id: userId});

export const createRecipe = (recipe:Recipe, userId: string) => axios.post("/create-recipe", {recipe, id: userId});

export const deleteRecipe = (recipeId:number) => axios.delete(`/delete-recipe/${recipeId}`);

export {};