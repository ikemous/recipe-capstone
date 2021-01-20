import React from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { updateSearch } from "../utils/actions";

function QueryForm() {
  const { search } = useSelector(({query}:RootStateOrAny) => query)
  const dispatch = useDispatch();

  return (
    <Form>
      <FormGroup>
        <Label for="searchbox" />
        <Input 
          type="text" 
          name="searchbox" 
          placholder="Search Recipe..."
          value={search}
          onChange={({target}:React.ChangeEvent<HTMLInputElement>) => dispatch(updateSearch(target.value))}
        />
      </FormGroup>
      <FormGroup>
        <Button>Search</Button>
      </FormGroup>
    </Form>
  );
};

export default QueryForm;
