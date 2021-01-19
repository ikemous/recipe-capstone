import { combineReducers } from "redux";
import queryReducer from "./queryInfoReducer";
import recipeReducer from "./recipeReducer";

const allReducers = combineReducers({
  recipe: recipeReducer,
  query: queryReducer
});

export default allReducers;
