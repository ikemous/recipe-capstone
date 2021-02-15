import React from "react";
import { v4 as uuidv4} from "uuid";
import { Recipe } from "../utils/types";
import { 
    CardGroup, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText, 
    Button, 
    CardSubtitle 
} from "reactstrap";
import { useSelector, RootStateOrAny } from "react-redux";

function RecipesList() {

    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)

    return (
        <CardGroup>
            {
                recipeList.map((recipeObject:Recipe) => {
                    const { label } = recipeObject.recipe;
                    console.log(recipeObject.recipe);
                    return (
                        <Card key={uuidv4()}>
                            <CardTitle>{ label }</CardTitle>
                        </Card>
                    )
                })
            }
        </CardGroup>
    )
};

export default RecipesList;