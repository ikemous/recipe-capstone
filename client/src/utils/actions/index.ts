import { QueryAction } from "../types";

export const updateSearch = (search:string):QueryAction => {
    return {
        type: "UPDATE_SEARCH",
        payload: search,
    };
};

export const updateRecipeList = (list: any) => {
    return {
        type: "UPDATE_RECIPE_LIST",
        payload: list,
    };
};