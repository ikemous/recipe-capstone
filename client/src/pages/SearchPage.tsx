import React, { useEffect } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { Row } from "reactstrap";
import { useDispatch, RootStateOrAny } from "react-redux";
import { getSampleRecipes } from "../utils/API";
import { Container } from "reactstrap";

function SearchPage() {
    const dispatch = useDispatch();

    
    useEffect(() => {
        getSampleRecipes()
        .then( ({ data }) => {
            console.log(data);
        })
        .catch(error => console.log(error));
    },[])

    return (
        <>  
            <TotallyCewlNavBar />
            <QueryForm />
            <Container>

            </Container>
        </>
    );
};

export default SearchPage;