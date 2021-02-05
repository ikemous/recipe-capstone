import axios from "axios";

export const getRecipes = (ingredient: string) => axios.get(`/recipes/${ingredient}`);

export {};