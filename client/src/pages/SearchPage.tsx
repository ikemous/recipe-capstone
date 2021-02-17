import React, { useEffect, useState } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { 
    Button, 
    Col, 
    Modal, 
    ModalBody,
    ModalFooter, 
    ModalHeader, 
    Pagination, 
    Row 
} from "reactstrap";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { getSampleRecipes } from "../utils/API";
import { Container } from "reactstrap";
import { updateRecipeList } from "../utils/actions";
import { AiFillHeart } from "react-icons/ai"
import RecipesList from "../components/RecipesList";
import FluidImage from "../components/FluidImage";

function SearchPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)
    const recipe = useSelector(({recipe}:RootStateOrAny) => recipe);

    useEffect(() => {
        if(recipeList.hits === undefined || recipeList.hits.length === 0) {
            getSampleRecipes()
            .then(({data}) => {
                dispatch(updateRecipeList(data));
            })
            .catch(error => console.log(error));
        }
    },[]);

    const handleSet = () => setModalOpen(!modalOpen);

    return (
        <>  
            <TotallyCewlNavBar />
            <QueryForm />
            <Container>
                <Row>
                    <RecipesList setModalOpen={handleSet} />
                </Row>
                <Row>
                    <Pagination></Pagination>
                </Row>
                <Modal isOpen={modalOpen} toggle={handleSet}>
                    <ModalHeader toggle={handleSet} className="text-center">{recipe.recipe.label}</ModalHeader>
                    <ModalBody>
                        <FluidImage src={recipe.recipe.image} alt={`View Of ${recipe.recipe.label}`}/>
                    </ModalBody>
                    <ModalBody>
                        <Row>
                            <Col>
                                <h5>Serving Size: {recipe.recipe.yield}</h5>
                            </Col>
                            <Col>
                                <h5>
                                    <a href={`${recipe.recipe.url}`} rel="noopener noreferrer" target="_blank">Website Source</a>
                                </h5>
                            </Col>
                        </Row>
                            <h4>Ingredients:</h4>
                            {
                                recipe.recipe.ingredients.map((ingredient:{text:string}) => {
                                    return (
                                        <h6>{ingredient.text}</h6>
                                    );
                                })
                            }
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="primary">
                            <AiFillHeart style={recipe.bookmarked?{color:"red"}:{color: "white"}} />
                        </Button>
                        <Button color="danger" onClick={handleSet}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        </>
    );
};

export default SearchPage;