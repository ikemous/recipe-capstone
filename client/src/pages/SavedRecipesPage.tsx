import React from "react";
import PageContainer from "../components/PageContainer";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";

function SavedRecipesPage() {
    return (
        <PageContainer>
            <h2 className="text-center">Saved Recipes</h2>
        </PageContainer>
    )
};

export default SavedRecipesPage;