import { RecipeAction, RecipeList } from "../types";

const initialState:RecipeList = [];

const recipeListReducer = (state:RecipeList = initialState, { type, payload }:RecipeAction):RecipeList => {
    switch(type) {
        case "UPDATE_RECIPE_LIST":
            console.log(payload, state);
            return state;
        default: 
            return state;
    };
};

export default recipeListReducer;