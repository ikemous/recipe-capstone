import { RecipeList, RecipeListAction, Recipe } from "../types";

const initialState:RecipeList = {
    from: 0,
    q: "coffee",
    hits: [],
};

const recipeListReducer = (state:RecipeList = initialState, { type, payload }:RecipeListAction):RecipeList => {
    switch(type) {
        case "UPDATE_RECIPE_LIST":
            return payload as RecipeList;
        case "UPDATE_RECIPE_LIST_HITS":
            return {...state, hits: payload as Array<Recipe> };
        default: 
            return state;
    };
};

export default recipeListReducer;