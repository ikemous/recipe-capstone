import { combineReducers } from "redux";
import queryReducer from "./queryInfoReducer";
import recipeListReducer from "./recipeListReducer";
import recipeReducer from "./recipeReducer";

const allReducers = combineReducers({
  recipe: recipeReducer,
  query: queryReducer,
  recipeList: recipeListReducer,
});

export default allReducers;
