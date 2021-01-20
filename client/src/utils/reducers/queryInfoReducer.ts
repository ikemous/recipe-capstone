import { Query, QueryAction } from "../types";

const initialState = {
  search: "",
};

const queryReducer = (state:Query = initialState,  { type, payload }:QueryAction):Query => {
  switch(type) {
    case "UPDATE_SEARCH":
      return {...state, search: payload}
    default:
      return state;
  };
};

export default queryReducer;
