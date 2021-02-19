import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { getUserRecipes } from "../utils/API";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { useAuth } from "../utils/contexts/AuthContext";
import { updateRecipeListHits } from "../utils/actions";
import { Recipe } from "../utils/types";
import { Col, Row, Card, CardImg, CardTitle } from "reactstrap";

function SavedRecipesPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const recipeList = useSelector(({recipeList}:RootStateOrAny) => recipeList);
    const { currentUser } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        getUserRecipes(currentUser.uid)
        .then(({data}) => {
            dispatch(updateRecipeListHits(data));
        })
        .then(() => setLoading(false))
        .catch(error => console.log(error));
    }, []);

    return (
        <PageContainer>
            <h2 className="text-center">Saved Recipes</h2>
            <Row>
                {
                    !loading  && recipeList.hits.map((recipe:any) => {
                        const { label, image, id } = recipe;
                        
                        return (
                            <Col  key={id} style={{marginRight: 0, marginLeft: 0, padding:25}} xs={12} md={4}>
                                <Card onClick={() => console.log("clicked")}>
                                    <CardImg top width="100%" src={image} alt={`View Of ${label}`}/>
                                    <CardTitle className="text-center" tag="h5">{ label }</CardTitle>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        </PageContainer>
    )
};

export default SavedRecipesPage;