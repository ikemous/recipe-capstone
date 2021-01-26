import React from "react";
import { Form, FormGroup, Button, Card, CardTitle } from "reactstrap";

interface Props {
    signupPage?: boolean;
}

const AightUserAuthenticationForm:React.FC<Props> = (props) => {

    const { signupPage } = props;
    return (
        <Card>
            <CardTitle>
                {
                    signupPage?
                    "Signup":
                    "Login"
                }
            </CardTitle>
            <Form>
                <FormGroup>
                    
                </FormGroup>
                <FormGroup>

                </FormGroup>
                <FormGroup>
                    <Button></Button>
                </FormGroup>
            </Form>
        </Card>
    );
};

AightUserAuthenticationForm.defaultProps = {
    signupPage: false,
};
export default AightUserAuthenticationForm;