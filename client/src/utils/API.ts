import axios from "axios";

export const getRecipesByIngredient = (ingredient: string) => axios.get(`/recipes/${ingredient}`);

export const getAnotherRecipePage = ({ ingredient, page }: { ingredient:string, page: number}) => axios.get(`/recipes/${ingredient}/${page}`);
export const getSampleRecipes = () => axios.get("/recipes");

export {};