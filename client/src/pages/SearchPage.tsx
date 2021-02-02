import React, { useEffect } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { useDispatch, RootStateOrAny } from "react-redux";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
// temp import for query
import queryExample from "../utils/queryExmaple.json";

function SearchPage() {
    const params = useParams();
    const dispatch = useDispatch();

    console.log(queryExample);
    
    useEffect(() => {

    },[])

    console.log(params);
    return (
        <>  
            <TotallyCewlNavBar />
            <Container style={{padding: 0, margin: 0}} fluid={true}>
                <QueryForm />
            </Container>
            <Container fluid={true}>

            </Container>
        </>
    );
};

export default SearchPage;