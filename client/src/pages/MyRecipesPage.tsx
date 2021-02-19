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

function MyRecipesPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => setModalOpen(!modalOpen);

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
                                        type="text" 
                                        name="recipeName" 
                                        placeholder="Recipe Name..."
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs={{offset: 1, size: 10}} md={{offset: 1, size: 3}}>
                                    <Label for="servingSize">Serving Size</Label>
                                    <Input
                                        type="text"
                                        name="servingSize"
                                        placeholder="1"
                                    />
                                </Col>
                                <Col xs={{offset: 1, size: 10}} md={7}>
                                    <Label for="websiteLink">Website (optional)</Label>
                                    <Input
                                        type="text"
                                        name="websiteLink"
                                        placeholder="www.recipewebsite.com"
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="danger">Cancel</Button>
                        <Button color="success">Create</Button>
                    </ModalFooter>
                </Modal>
                <Button onClick={toggleModal} style={{position: "absolute", bottom: 20}} className="col-8 offset-2" color="success">Add Recipe</Button>
            </Container>
        </>
    );
};

export default MyRecipesPage;