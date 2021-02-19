import React, { useState } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { 
    Button, 
    Col, 
    Container, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalHeader, 
    Row 
} from "reactstrap";
import { ImPlus } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { addRecipeIngredient, removeRecipeIngredient, updateRecipe, updateRecipeLabel, updateRecipeUrl, updateRecipeYield } from "../utils/actions";

function MyRecipesPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [tempIngredient, setTempIngredient] = useState<string>("");
    const { recipe } = useSelector(({recipe}:RootStateOrAny) => recipe);
    const dispatch = useDispatch();
    const toggleModal = () => {
        setModalOpen(!modalOpen)
        dispatch(
            updateRecipe({  
                bookmarked: false,
                recipe: {
                calories: 0,
                image: "https://via.placeholder.com/400",
                ingredients: [],
                totalTime: 0,
                yield: 0,
                url: "",
                label: "",
                }
            })
        );
        setTempIngredient("");
    };

    const handleServingSizeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(parseInt(event.target.value)) dispatch(updateRecipeYield(parseInt(event.target.value)));
        else if(event.target.value === "") dispatch(updateRecipeYield(0));
    };

    const handleCancel = () => {
        dispatch(
            updateRecipe({  
                bookmarked: false,
                recipe: {
                calories: 0,
                image: "https://via.placeholder.com/400",
                ingredients: [],
                totalTime: 0,
                yield: 0,
                url: "",
                label: "",
                }
            })
        );
        alert();
        setTempIngredient("");
        setModalOpen(false);
    };

    const handleAddingIngredient = () => {
        if(tempIngredient !== "" && tempIngredient !== undefined) {
            dispatch(addRecipeIngredient(tempIngredient));
            setTempIngredient("");
        }
    };

    const handleDeleteIngredient = (index:number) => dispatch(removeRecipeIngredient(index));

    return (
        <> 
            <TotallyCewlNavBar />
            <Container style={{height: "93vh"}} fluid>
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Create Recipe</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Col xs={{offset: 1, size:10}}>
                                    <Label for="recipeName">Recipe Name</Label>
                                    <Input 
                                        value={recipe.label}
                                        onChange={(event) => dispatch(updateRecipeLabel(event.target.value))}
                                        type="text" 
                                        name="recipeName" 
                                        placeholder="Recipe Name..."
                                        autoComplete="off"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs={{offset: 1, size: 10}} md={{offset: 1, size: 3}}>
                                    <Label for="servingSize">Serving Size</Label>
                                    <Input
                                        value={recipe.yield}
                                        onChange={handleServingSizeChange}
                                        type="text"
                                        name="servingSize"
                                        placeholder="1"
                                        autoComplete="off"
                                    />
                                </Col>
                                <Col xs={{offset: 1, size: 10}} md={6}>
                                    <Label for="websiteLink">Website (optional)</Label>
                                    <Input
                                        value={recipe.url}
                                        onChange={(event) => dispatch(updateRecipeUrl(event.target.value))}
                                        type="text"
                                        name="websiteLink"
                                        placeholder="www.recipewebsite.com"
                                        autoComplete="off"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs={{offset: 1, size:9}}>
                                    <Label for="ingredient">Ingredient:</Label>
                                    <Input 
                                        value={tempIngredient}
                                        onChange={(event) => setTempIngredient(event.target.value)}
                                        type="text"
                                        name="ingredient"
                                        placeholder="1/4 cup of milk"
                                        autoComplete="off"
                                    />
                                </Col>
                                <Col>
                                    <Button 
                                        onClick={handleAddingIngredient}
                                        type="button" 
                                        style={{position: "absolute", bottom: 0, left: 0}}
                                    >
                                        <ImPlus />
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        {
                            recipe.ingredients.map((ingredient: {text: string}, index:number) => {
                                return (
                                    <Row style={{paddingBottom: 2}} key={index}>
                                        <Col xs={10}>
                                            <h6>{ingredient.text}</h6>
                                        </Col>
                                        <Col xs={2}>
                                            <Button onClick={() => handleDeleteIngredient(index)}><FaTrash /></Button>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button onClick={handleCancel} color="danger">Cancel</Button>
                        <Button color="success">Create</Button>
                    </ModalFooter>
                </Modal>
                <Button onClick={toggleModal} style={{position: "fixed", bottom: 20}} className="col-8 offset-2" color="success">Add Recipe</Button>
            </Container>
        </>
    );
};

export default MyRecipesPage;