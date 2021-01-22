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
        <Col sm={4}>
          <FormGroup>
            <Label for="searchbox" hidden>Search</Label>
            <Input 
              type="search" 
              name="searchbox" 
              placholder="Search Recipe..."
              value={search}
              onChange={({target}:React.ChangeEvent<HTMLInputElement>) => dispatch(updateSearch(target.value))}
            />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Button type="submit">Search</Button>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default QueryForm;
