export interface Recipe {
    bookmarked?: boolean;
    recipe: {
        calories: number;
        image: string;
        ingredients: Array<{
            text: string;
            image: string;
            label: string;
        }>;
        totalTime: number;
        yield: number;
        url: string;
        label: string;
    }
};

export interface RecipeList {
    from: number;
    q: string;
    hits: Array<Recipe>
}

export interface RecipeListAction {
    type: string;
    payload: RecipeList
}
export interface RecipeAction {
    type: string;
    payload: string | Recipe;
};

export interface Query {
  search: string;  
};

export interface QueryAction {
    type: string;
    payload: string;
};
