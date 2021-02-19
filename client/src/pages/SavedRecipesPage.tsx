import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { getUserRecipes } from "../utils/API";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { useAuth } from "../utils/contexts/AuthContext";
import { updateRecipeList, updateRecipeListHits } from "../utils/actions";
import RecipesList from "../components/RecipesList";
import { Recipe } from "../utils/types";

function SavedRecipesPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const recipeList = useSelector(({recipeList}:RootStateOrAny) => recipeList);
    const { currentUser } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        getUserRecipes(currentUser.uid)
        .then(({data}) => {
            console.log(data);
            dispatch(updateRecipeListHits(data));
            console.log(recipeList);
        })
        .then(() => setLoading(false))
        .catch(error => console.log(error));
    }, []);

    return (
        <PageContainer>
            <h2 className="text-center">Saved Recipes</h2>
            {
                !loading  && recipeList.hits.map((recipe:Recipe) => console.log(recipe))
            }
        </PageContainer>
    )
};

export default SavedRecipesPage;