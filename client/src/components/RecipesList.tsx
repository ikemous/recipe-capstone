import React from "react";
import { v4 as uuidv4} from "uuid";
import { Recipe } from "../utils/types";
import { 
    Row, 
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
        <Row>
            {
                hits.map((recipeObject:Recipe) => {
                    const { label, image } = recipeObject.recipe;
                    
                    return (
                        <Col  key={uuidv4()} style={{marginRight: 0, marginLeft: 0, padding:25}} xs={12} md={4}>
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