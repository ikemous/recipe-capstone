import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Card, CardTitle, Label, Input, Alert } from "reactstrap";
import { useAuth } from "../utils/contexts/AuthContext";


interface Props {
    signupPage?: boolean;
}

const AightUserAuthenticationForm:React.FC<Props> = (props) => {

    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [sent, setSent] = useState<boolean>(false);
    const history = useHistory();

    const { resetPassword } = useAuth();

    const { signupPage } = props;

    async function handleReset(event:React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();

        try {
            setError('');
            setSent(true);
            await resetPassword(email);
            history.push("/");
        } catch {
            setError("No Account Or Incorrect Password");
            setSent(false);
        }

    }

    return (
        <>
            <Card body className="text-center">
                {error && <Alert color="danger">{error}</Alert>}
                <CardTitle tag="h2">{signupPage?"Signup":"Login"}</CardTitle>
                <Form onSubmit={handleReset}>
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
                            value={email}
                            onChange={({target}:React.ChangeEvent<HTMLInputElement>) => setEmail(target.value)}
                            autoComplete="off"
                        />
                    </FormGroup>
                    <FormGroup>
                            <Button disabled={sent} type="submit">{signupPage?"Signup":"Login"}</Button>
                    </FormGroup>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                <p>Already Reset? <Link to="/login">Login Here</Link></p>
            </div>
        </>
    );
};

AightUserAuthenticationForm.defaultProps = {
    signupPage: false,
};

export default AightUserAuthenticationForm;