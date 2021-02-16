import React, { useEffect, useState } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { getSampleRecipes } from "../utils/API";
import { Container } from "reactstrap";
import { updateRecipeList } from "../utils/actions";
import RecipesList from "../components/RecipesList";
import FluidImage from "../components/FluidImage";

function SearchPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)
    const recipe = useSelector(({recipe}:RootStateOrAny) => recipe);

    useEffect(() => {
        if(recipeList === undefined || recipeList.length === 0) {
            getSampleRecipes()
            .then(({data}) => {
                dispatch(updateRecipeList(data.hits));
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
                <Modal isOpen={modalOpen} toggle={handleSet}>
                    <ModalHeader toggle={handleSet} className="text-center">{recipe.recipe.label}</ModalHeader>
                    <ModalBody>
                        <FluidImage src={recipe.recipe.image} alt={`View Of ${recipe.recipe.label}`}/>

                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="primary">Heart</Button>
                        <Button color="danger" onClick={handleSet}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        </>
    );
};

export default SearchPage;