import React from "react";
import { Form, FormGroup, Button, Card, CardTitle, Label, Input } from "reactstrap";

interface Props {
    signupPage?: boolean;
}

const AightUserAuthenticationForm:React.FC<Props> = (props) => {

    const { signupPage } = props;
    return (
        <Card body className="text-center">
            <CardTitle tag="h2">{signupPage?"Signup":"Login"}</CardTitle>
            <Form>
                <FormGroup>
                    <Label 
                        for="email" 
                        hidden
                    >
                        Email:
                    </Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="example@email.com" 
                    />
                </FormGroup>
                <FormGroup>
                    <Label 
                        for="password" 
                        hidden
                    >
                        Password:
                    </Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="password..." 
                    />
                </FormGroup>
                <FormGroup>
                    <Button>{signupPage?"Signup":"Login"}</Button>
                </FormGroup>
            </Form>
        </Card>
    );
};

AightUserAuthenticationForm.defaultProps = {
    signupPage: false,
};

export default AightUserAuthenticationForm;