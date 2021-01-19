import { Query, QueryAction } from "../types";

const initialState = {
  query: "",
};

const queryReducer = (state:Query = initialState,  {type,payload}:QueryAction):Query => {
  switch(type) {
    case "":
      return {...state}
    default:
      return state;
  };
};

export default queryReducer;
