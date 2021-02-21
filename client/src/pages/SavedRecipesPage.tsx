import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { deleteRecipe, getUserRecipes } from "../utils/API";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { useAuth } from "../utils/contexts/AuthContext";
import { updateRecipe, updateRecipeListHits } from "../utils/actions";
import { Col, Row, Card, CardImg, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import FluidImage from "../components/FluidImage";
import { v4 as uuidv4 } from "uuid";

function SavedRecipesPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const recipeList = useSelector(({recipeList}:RootStateOrAny) => recipeList);
    const { recipe } = useSelector(({ recipe }:RootStateOrAny) => recipe)
    const { currentUser } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        getUserRecipes(currentUser.uid)
        .then(({data}) => dispatch(updateRecipeListHits(data)))
        .then(() => setLoading(false))
        .catch(error => console.log(error));
    });

    const handleCardClick = (savedRecipe:any) => {
        dispatch(updateRecipe({ bookmarked: true, recipe: savedRecipe}));
        setModalOpen(true);
    };

    const handleToggle = () => setModalOpen(!modalOpen);

    const handleDelete = (recipeId:number) => {
        deleteRecipe(recipeId)
        .then(result => console.log(result))
        .then(() => window.location.replace("/saved-recipes"))
        .catch(error => console.log(error));
    }

    return (
        <PageContainer>
            <h2 className="text-center">Saved Recipes</h2>
            <Row>
                {
                    !loading  && recipeList.hits.map((recipe:any) => {
                        const { label, image, id } = recipe;
                        
                        return (
                            <Col  key={id} style={{marginRight: 0, marginLeft: 0, padding:25}} xs={12} md={4}>
                                <Card onClick={() => handleCardClick(recipe)}>
                                    <CardImg top width="100%" src={image} alt={`View Of ${label}`}/>
                                    <CardTitle className="text-center" tag="h5">{ label }</CardTitle>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
            <Modal isOpen={modalOpen} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle} className="text-center">{recipe.label}</ModalHeader>
                <FluidImage src={recipe.image} alt="" />
                <ModalBody>
                    <Row>
                        <Col>
                            <h5>Serving Size: {recipe.yield}</h5>
                        </Col>
                        <Col>
                            <h5>
                                <a href={`${recipe.url}`} rel="noopener noreferrer" target="_blank">Website Source</a>
                            </h5>
                        </Col>
                    </Row>
                    <h4>Ingredients: </h4>
                    {
                        recipe.ingredients.map((ingredient:{text: string}) => {
                        console.log(ingredient); 
                        return <h6 key={uuidv4()}>{ingredient.text}</h6>
                        })
                    }
                </ModalBody>
                <ModalFooter className="justify-content-between">
                    <Button onClick={() => handleDelete(recipe.id)} color="danger">
                        Delete
                    </Button>
                    <Button>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </PageContainer>
    )
};

export default SavedRecipesPage;