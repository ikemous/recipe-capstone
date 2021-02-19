import React, { useEffect, useState } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { 
    Alert,
    Button, 
    Col, 
    Modal, 
    ModalBody,
    ModalFooter, 
    ModalHeader, 
    Pagination, 
    PaginationItem, 
    PaginationLink, 
    Row, 
    UncontrolledAlert
} from "reactstrap";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { getSampleRecipes, getAnotherRecipePage, saveRecipe } from "../utils/API";
import { Container } from "reactstrap";
import { updateRecipeList } from "../utils/actions";
import { AiFillHeart } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import RecipesList from "../components/RecipesList";
import FluidImage from "../components/FluidImage";
import { useAuth } from "../utils/contexts/AuthContext";

function SearchPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)
    const recipe = useSelector(({recipe}:RootStateOrAny) => recipe);

    useEffect(() => {
        if(recipeList.hits === undefined || recipeList.hits.length === 0) {
            getSampleRecipes()
            .then(({data}) => dispatch(updateRecipeList(data)))
            .catch(error => console.log(error));
        }
    },[]);

    const handleSet = () => setModalOpen(!modalOpen);

    const handleNext = () => {
        getAnotherRecipePage({ ingredient: recipeList.q, page: recipeList.from + 10})
        .then(({data}) => dispatch(updateRecipeList(data)))
        .catch(error => console.log(error));
    };

    const handlePrev = () => {
        getAnotherRecipePage({ ingredient: recipeList.q, page: recipeList.from - 10})
        .then(({data}) => dispatch(updateRecipeList(data)))
        .catch(error => console.log(error));
    };

    const handleModalHeartClick = () => {
        if(!currentUser) return alert("Must Be Logged In To Save Recipe");
        console.log(recipe);
        saveRecipe(recipe.recipe, currentUser.uid)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    };

    return (
        <>  
            <TotallyCewlNavBar />
            <QueryForm />
            <Container>
                <Row>
                    <RecipesList setModalOpen={handleSet} />
                </Row>
                <Row>
                    <Pagination>
                        <PaginationItem disabled={recipeList.from === 0? true: false}>
                            <PaginationLink 
                                onClick={handlePrev} 
                                previous 
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next onClick={handleNext}  />
                        </PaginationItem>
                    </Pagination>
                </Row>
                <Modal isOpen={modalOpen} toggle={handleSet}>
                    <ModalHeader toggle={handleSet} className="text-center">{recipe.recipe.label}</ModalHeader>
                    <FluidImage src={recipe.recipe.image} alt={`View Of ${recipe.recipe.label}`}/>
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
                                        <h6 key={uuidv4()}>{ingredient.text}</h6>
                                    );
                                })
                            }
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button onClick={handleModalHeartClick} color="primary">
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