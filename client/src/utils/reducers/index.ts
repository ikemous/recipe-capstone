import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";

const allReducers = combineReducers({
  recipe: recipeReducer,
});

export default allReducers;
