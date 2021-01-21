import React from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Row } from "reactstrap";
import { updateSearch } from "../utils/actions";

function QueryForm() {
  const { search } = useSelector(({query}:RootStateOrAny) => query)
  const dispatch = useDispatch();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }
  
  return (
    <Form onSubmit={handleSubmit} inline>
      <FormGroup>
        <Label for="searchbox" />
        <Input 
          type="search" 
          name="searchbox" 
          placholder="Search Recipe..."
          value={search}
          onChange={({target}:React.ChangeEvent<HTMLInputElement>) => dispatch(updateSearch(target.value))}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Search</Button>
      </FormGroup>
    </Form>
  );
};

export default QueryForm;
