import { RecipeList, RecipeListAction } from "../types";

const initialState:RecipeList = [];

const recipeListReducer = (state:RecipeList = initialState, { type, payload }:RecipeListAction):RecipeList => {
    switch(type) {
        case "UPDATE_RECIPE_LIST":
            return payload as RecipeList;
        default: 
            return state;
    };
};

export default recipeListReducer;