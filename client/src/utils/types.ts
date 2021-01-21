export interface Recipe {
    name: string;
};

export interface RecipeAction {
    type: string;
    payload: string;
};

export interface Query {
  search: string;  
};

export interface QueryAction {
    type: string;
    payload: string;
};

export interface RecipeList {
    name: string;
};

export interface RecipeListAction {
    type: string;
    payload: any;
};