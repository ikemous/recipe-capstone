import { QueryAction } from "../types";

export const updateSearch = (search:string):QueryAction => {
    return {
        type: "UPDATE_SEARCH",
        payload: search,
    }
}