import { RecipeList, RecipeListAction } from "../types";

const initialState = {
    name: "",
};

const recipeListReducer = (state:RecipeList = initialState, { type, payload }:RecipeListAction):RecipeList => {
    switch(type) {
        case "":
            return { ...state }
        default: 
            return state;
    };
};

export default recipeListReducer;

