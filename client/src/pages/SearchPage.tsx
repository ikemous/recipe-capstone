import React, { useEffect } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { Row } from "reactstrap";
import { useDispatch, RootStateOrAny } from "react-redux";
import { getSampleRecipes } from "../utils/API";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
// temp import for query
import queryExample from "../utils/queryExmaple.json";

function SearchPage() {
    const params:{ingredient: string} = useParams();
    const dispatch = useDispatch();

    
    useEffect(() => {
        getSampleRecipes()
        .then( ({ data }) => {
            console.log(data);
        })
        .catch(error => console.log(error));
    },[])

    console.log(params);
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