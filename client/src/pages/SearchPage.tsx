import React, { useEffect, useState } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { Modal, ModalHeader, Row } from "reactstrap";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { getSampleRecipes } from "../utils/API";
import { Container } from "reactstrap";
import { updateRecipeList } from "../utils/actions";
import RecipesList from "../components/RecipesList";

function SearchPage() {
    
    const dispatch = useDispatch();
    const recipeList = useSelector(({ recipeList }:RootStateOrAny) => recipeList)

    useEffect(() => {
        if(recipeList === undefined || recipeList.length === 0) {
            getSampleRecipes()
            .then(({data}) => {
                dispatch(updateRecipeList(data.hits));
            })
            .catch(error => console.log(error));
        }
    },[]);

    return (
        <>  
            <TotallyCewlNavBar />
            <QueryForm />
            <Container>
                <Row>
                    <RecipesList />
                </Row>
                <Modal>
                    <ModalHeader></ModalHeader>
                </Modal>
            </Container>
        </>
    );
};

export default SearchPage;