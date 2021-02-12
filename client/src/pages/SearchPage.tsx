import React, { useEffect } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import QueryForm from "../components/QueryForm";
import { Row } from "reactstrap";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { getSampleRecipes } from "../utils/API";
import { Container } from "reactstrap";
import { updateRecipeList } from "../utils/actions";

function SearchPage() {
    const dispatch = useDispatch();
    const { search } = useSelector(({query}:RootStateOrAny) => query);

    useEffect(() => {
        console.log(search);
        // getSampleRecipes()
        // .then( ({ data }) => {
        //     console.log(data);

        //     dispatch(updateRecipeList(data.hits));
        // })
        // .catch(error => console.log(error));
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