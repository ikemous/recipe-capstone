import { Recipe, RecipeAction } from"../types";

const initialState:Recipe = {
  bookmarked: false,
  recipe: {
    calories: 0,
    image: "https://via.placeholder.com/400",
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
      return payload as Recipe;
    case "UPDATE_RECIPE_LABEL":
      return {bookmarked: false, recipe: {...state.recipe, label: payload as string}};
    case "UPDATE_RECIPE_YIELD":
      return {bookmarked: false, recipe: {...state.recipe}};
    case "UPDATE_RECIPE_URL":
      return {bookmarked: false, recipe: {...state.recipe}};
    case "ADD_RECIPE_INGREDIENT":
      return {bookmarked: false, recipe: {...state.recipe}};
    case "DELETE_RECIPE_INGREDIENT":
      return {bookmarked: false, recipe: {...state.recipe}};
    default:
      return state;
  };
};

export default recipeReducer;
