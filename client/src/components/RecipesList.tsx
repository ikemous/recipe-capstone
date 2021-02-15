import React from "react";
import { CardGroup } from "reactstrap";
import { useSelector, RootStateOrAny } from "react-redux";

function RecipesList() {

    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)

    return (
        <CardGroup>

        </CardGroup>
    )
};

export default RecipesList;