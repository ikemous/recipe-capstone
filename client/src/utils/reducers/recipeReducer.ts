import { Recipe, RecipeAction } from"../types";

const initialState:Recipe = {
  saved: false,
  recipe: {
    calories: 0,
    image: "",
    ingredients: [],
    totalTime: 0,
    yield: 0,
    url: "",
    label: "",
  }
};

const recipeReducer = (state:Recipe = initialState, {type, payload}:RecipeAction):Recipe => {
  switch(type) {
    case "UPDATE_RECIPE":
      return {...state}
    default:
      return state;
  };
};

export default recipeReducer;
