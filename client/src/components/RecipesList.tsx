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
    CardSubtitle,
    CardColumns,
    Col
} from "reactstrap";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

function RecipesList() {

    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)

    return (
        <CardColumns>
            {
                recipeList.map((recipeObject:Recipe) => {
                    const { label, image } = recipeObject.recipe;
                    console.log(recipeObject.recipe);
                    return (
                        <Card key={uuidv4()}>
                            <CardImg top width="100%" src={image} />
                            <CardTitle className="text-center" tag="h3">{ label }</CardTitle>
                        </Card>
                    );
                })
            }
        </CardColumns>
    );
};

export default RecipesList;