import React, { useEffect, useState } from "react";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import {
  createRecipe,
  getUserCreatedRecipes,
  updateUserRecipe,
} from "../utils/API";
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
  Row,
  Card,
  CardImg,
  CardTitle,
} from "reactstrap";
import { ImPlus } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import {
  addRecipeIngredient,
  removeRecipeIngredient,
  updateRecipe,
  updateRecipeLabel,
  updateRecipeListHits,
  updateRecipeUrl,
  updateRecipeYield,
} from "../utils/actions";
import { useAuth } from "../utils/contexts/AuthContext";

function MyRecipesPage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [tempIngredient, setTempIngredient] = useState<string>("");
  const { recipe } = useSelector(({ recipe }: RootStateOrAny) => recipe);
  const { hits } = useSelector(({ recipeList }: RootStateOrAny) => recipeList);
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserCreatedRecipes(currentUser.uid)
      .then(({ data }) => dispatch(updateRecipeListHits(data)))
      .catch((error) => console.log(error));
  });

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
        },
      })
    );
    setTempIngredient("");
  };

  const openUpdateModal = (updatedRecipe: any) => {
    setUpdateModalOpen(true);
    dispatch(
      updateRecipe({
        bookmarked: false,
        recipe: updatedRecipe,
      })
    );
    setTempIngredient("");
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
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
        },
      })
    );
    setTempIngredient("");
  };

  const handleServingSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (parseInt(event.target.value))
      dispatch(updateRecipeYield(parseInt(event.target.value)));
    else if (event.target.value === "") dispatch(updateRecipeYield(0));
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
        },
      })
    );
    setTempIngredient("");
    setModalOpen(false);
  };

  const handleAddingIngredient = () => {
    if (tempIngredient !== "" && tempIngredient !== undefined) {
      dispatch(addRecipeIngredient(tempIngredient));
      setTempIngredient("");
    }
  };

  const handleDeleteIngredient = (index: number) =>
    dispatch(removeRecipeIngredient(index));

  const handleCreateClick = () => {
    console.log(recipe);
    createRecipe(recipe, currentUser.uid)
      .then(() => {
        getUserCreatedRecipes(currentUser.uid)
          .then(({ data }) => dispatch(updateRecipeListHits(data)))
          .catch((error) => console.log(error));

        setTempIngredient("");
        setModalOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (id: number) => {
    updateUserRecipe(recipe, id)
      .then((results) => {
        getUserCreatedRecipes(currentUser.uid)
          .then(({ data }) => dispatch(updateRecipeListHits(data)))
          .catch((error) => console.log(error));

        setTempIngredient("");
        setUpdateModalOpen(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <TotallyCewlNavBar />
      <Container style={{ minHeight: "93vh" }} fluid>
        <Row style={{ paddingBottom: "50px" }}>
          {hits.map((recipe: any) => {
            const { label, image, id } = recipe;
            return (
              <Col
                onClick={() => openUpdateModal(recipe)}
                key={id}
                style={{ marginRight: 0, marginLeft: 0, padding: 25 }}
                xs={12}
                md={4}
              >
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={image}
                    alt={`View Of ${label}`}
                  />
                  <CardTitle className="text-center" tag="h5">
                    {label}
                  </CardTitle>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Modal isOpen={updateModalOpen} toggle={closeUpdateModal}>
          <ModalHeader toggle={closeUpdateModal}>View Recipe</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Col xs={{ offset: 1, size: 10 }}>
                  <Label for="recipeName">Recipe Name</Label>
                  <Input
                    value={recipe.label}
                    onChange={(event) =>
                      dispatch(updateRecipeLabel(event.target.value))
                    }
                    type="text"
                    name="recipeName"
                    placeholder="Recipe Name..."
                    autoComplete="off"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs={{ offset: 1, size: 10 }} md={{ offset: 1, size: 3 }}>
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
                <Col xs={{ offset: 1, size: 10 }} md={6}>
                  <Label for="websiteLink">Website (optional)</Label>
                  <Input
                    value={recipe.url}
                    onChange={(event) =>
                      dispatch(updateRecipeUrl(event.target.value))
                    }
                    type="text"
                    name="websiteLink"
                    placeholder="www.recipewebsite.com"
                    autoComplete="off"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs={{ offset: 1, size: 9 }}>
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
                    style={{ position: "absolute", bottom: 0, left: 0 }}
                  >
                    <ImPlus />
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            {recipe.ingredients.map(function (
              ingredient: { text: string },
              index: number
            ) {
              if (ingredient.text === "") {
                return <></>;
              }
              return (
                <Row style={{ paddingBottom: 15 }} key={index}>
                  <Col xs={10}>
                    <h6>{ingredient.text}</h6>
                  </Col>
                  <Col xs={2}>
                    <Button
                      style={{ position: "absolute", left: 0 }}
                      onClick={() => handleDeleteIngredient(index)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </ModalBody>
          <ModalFooter className="justify-content-between">
            <Button onClick={closeUpdateModal} color="danger">
              Back
            </Button>
            <Button onClick={() => handleUpdate(recipe.id)} color="success">
              Update
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Create Recipe</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Col xs={{ offset: 1, size: 10 }}>
                  <Label for="recipeName">Recipe Name</Label>
                  <Input
                    value={recipe.label}
                    onChange={(event) =>
                      dispatch(updateRecipeLabel(event.target.value))
                    }
                    type="text"
                    name="recipeName"
                    placeholder="Recipe Name..."
                    autoComplete="off"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs={{ offset: 1, size: 10 }} md={{ offset: 1, size: 3 }}>
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
                <Col xs={{ offset: 1, size: 10 }} md={6}>
                  <Label for="websiteLink">Website (optional)</Label>
                  <Input
                    value={recipe.url}
                    onChange={(event) =>
                      dispatch(updateRecipeUrl(event.target.value))
                    }
                    type="text"
                    name="websiteLink"
                    placeholder="www.recipewebsite.com"
                    autoComplete="off"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs={{ offset: 1, size: 9 }}>
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
                    style={{ position: "absolute", bottom: 0, left: 0 }}
                  >
                    <ImPlus />
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            {recipe.ingredients.map(
              (ingredient: { text: string }, index: number) => {
                return (
                  <Row style={{ paddingBottom: 2 }} key={index}>
                    <Col xs={10}>
                      <h6>{ingredient.text}</h6>
                    </Col>
                    <Col xs={2}>
                      <Button onClick={() => handleDeleteIngredient(index)}>
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                );
              }
            )}
          </ModalBody>
          <ModalFooter className="justify-content-between">
            <Button onClick={handleCancel} color="danger">
              Cancel
            </Button>
            <Button onClick={handleCreateClick} color="success">
              Create
            </Button>
          </ModalFooter>
        </Modal>
        <Button
          onClick={toggleModal}
          style={{ position: "fixed", bottom: 20 }}
          className="col-8 offset-2"
          color="success"
        >
          Add Recipe
        </Button>
      </Container>
    </>
  );
}

export default MyRecipesPage;
