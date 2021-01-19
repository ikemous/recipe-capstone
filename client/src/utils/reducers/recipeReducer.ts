import { Recipe, RecipeAction } from"../types";

const initialState = {
  name: "" 
};

const recipeReducer = (state:Recipe = initialState, {type, action}:RecipeAction):Recipe => {
  switch(type) {
    case "":
      return {...state}
    default:
      return state;
  };
};

export default recipeReducer;
