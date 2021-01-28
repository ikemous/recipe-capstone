import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Button, Card, CardTitle, Label, Input, Alert } from "reactstrap";
import { useAuth } from "../utils/contexts/AuthContext";

const AightUserAuthenticationForm = () => {

    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [sent, setSent] = useState<boolean>(false);

    const { resetPassword } = useAuth();

    async function handleReset(event:React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();

        try {
            setError('');
            setSent(true);
            await resetPassword(email);
            setMessage("Check Email For Password Reset");
        } catch {
            setError("No Account or Incorrect Email");
        }
        setSent(false);
    }

    return (
        <>
            <Card body className="text-center">
                {error && <Alert color="danger">{error}</Alert>}
                {message && <Alert color="success">{message}</Alert>}
                <CardTitle tag="h2">Forgot Password?</CardTitle>
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
                            <Button disabled={sent} type="submit">Send Email</Button>
                    </FormGroup>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                <p>Already Reset? <Link to="/login">Login Here</Link></p>
            </div>
        </>
    );
};

export default AightUserAuthenticationForm;