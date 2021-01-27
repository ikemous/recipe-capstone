import React from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { updateSearch } from "../utils/actions";

function QueryForm() {
  const { search } = useSelector(({query}:RootStateOrAny) => query)
  const dispatch = useDispatch();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }
  
  return (
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col sm={12} md={9}>
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
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={3}>
            <FormGroup>
              <Button type="submit">Search</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
  );
};

export default QueryForm;
