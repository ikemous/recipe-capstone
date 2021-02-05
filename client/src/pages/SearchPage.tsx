import React, { useEffect } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { Row } from "reactstrap";
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
            <Row
                style={{
                height: "40vh", 
                paddingTop: "10px",
                marginLeft: 0,
                marginRight: 0,
                background: `url(./images/query-background.jpg)`,
                backgroundRepeat: "no-repeat", 
                backgroundAttachment: "fixed",
                backgroundSize: "100% 73%",
                }}
            >
                <QueryForm />
            </Row>
            <Container fluid={true}>

            </Container>
        </>
    );
};

export default SearchPage;