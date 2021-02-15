import { QueryAction, RecipeListAction, RecipeList, Recipe, RecipeAction } from "../types";

export const updateSearch = (search:string):QueryAction => {
    return {
        type: "UPDATE_SEARCH",
        payload: search,
    };
};

export const updateRecipeList = (list: RecipeList):RecipeListAction => {
    return {
        type: "UPDATE_RECIPE_LIST",
        payload: list,
    };
};

export const updateRecipe = (recipe: Recipe):RecipeAction => {
    return {
        type: "UPDATE_RECIPE",
        payload: recipe,
    };
}