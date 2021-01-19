export interface Recipe {
    name: string;
};

export interface RecipeAction {
    type: string;
    payload: string;
};

export interface Query {
  query: string;  
};

export interface QueryAction {
    type: string;
    payload: string;
};
