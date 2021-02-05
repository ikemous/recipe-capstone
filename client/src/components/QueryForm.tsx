import React from "react";
import queryBackground from "../utils/images/query-background.jpg";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { updateSearch } from "../utils/actions";
import { useHistory } from "react-router-dom"

function QueryForm() {
  const { search } = useSelector(({query}:RootStateOrAny) => query)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/search/${search}`)
  }
  
  return (
      <Form 
        onSubmit={handleSubmit}
        style={{
          width: "100%"
        }}
      >
        <Row 
          style={{
            marginLeft: 0,
            marginRight: 0,
          }} 
          form
        >
          <Col xs={{ size: 8 }} md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="searchbox" hidden>Search</Label>
              <Input 
                type="search" 
                name="searchbox" 
                placholder="Search Recipe..."
                id="searchbox"
                value={search}
                onChange={({target}:React.ChangeEvent<HTMLInputElement>) => dispatch(updateSearch(target.value))}
                autoComplete="off"
                placeholder="Search Ingredient..."
              />
            </FormGroup>
          </Col>
          <Col xs={{ size: 2}} md={{size: 2}}>
            <FormGroup>
              <Button type="submit">Search</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
  );
};

export default QueryForm;
