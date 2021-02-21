import React from "react";
import { v4 as uuidv4} from "uuid";
import { Recipe } from "../utils/types";
import { 
    Row, 
    Card, 
    CardImg, 
    CardTitle,
    Col
} from "reactstrap";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { updateRecipe } from "../utils/actions";

interface Props {
    setModalOpen: any;
};

const RecipesList:React.FC<Props> = ({setModalOpen}) => {

    const { hits } = useSelector(({ recipeList }:RootStateOrAny) => recipeList)
    const dispatch = useDispatch();

    const handleRecipeClick = (recipeObject:Recipe) => {
        dispatch(updateRecipe(recipeObject));
        setModalOpen();
    };

    return (
        <Row style={{marginRight: 0, marginLeft: 0}}>
            {
                hits.map((recipeObject:Recipe) => {
                    const { label, image } = recipeObject.recipe;
                    
                    return (
                        <Col key={uuidv4()} style={{padding: 10}} xs={12} md={4}>
                            <Card onClick={() => handleRecipeClick(recipeObject)}>
                                <CardImg top width="100%" src={image} alt={`View Of ${label}`}/>
                                <CardTitle className="text-center" tag="h5">{ label }</CardTitle>
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
    );
};

export default RecipesList;