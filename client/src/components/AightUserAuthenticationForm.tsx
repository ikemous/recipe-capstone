import React, { useState } from "react";
import { Form, FormGroup, Button, Card, CardTitle, Label, Input, Alert } from "reactstrap";
import { useAuth } from "../utils/contexts/AuthContext";

interface Props {
    signupPage?: boolean;
}

const AightUserAuthenticationForm:React.FC<Props> = (props) => {
    // const email = useRef();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const { signup } = useAuth();

    const { signupPage } = props;


    async function handleSignup(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(password !== confirmPassword) {
            return setError("Passwords Dont Match");
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
        } catch {
            setError("Failed To Create Account")
        }

        setLoading(false);
    };

    function handleLogin(event:React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();
    }

    return (
        <>
            <Card body className="text-center">
                {error && <Alert color="danger">{error}</Alert>}
                <CardTitle tag="h2">{signupPage?"Signup":"Login"}</CardTitle>
                <Form onSubmit={signupPage?handleSignup:handleLogin}>
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
                            value={password}
                            onChange={({target}:React.ChangeEvent<HTMLInputElement>) => setPassword(target.value)}
                        />
                    </FormGroup>
                    {
                        signupPage?
                            (
                                <FormGroup>
                                    <Label 
                                        for="password-confirm" 
                                        hidden
                                    >
                                        Password:
                                    </Label>
                                    <Input 
                                        type="password" 
                                        name="password-confirm" 
                                        id="password-confirm" 
                                        placeholder="password..." 
                                        value={confirmPassword}
                                        onChange={({target}:React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(target.value)}
                                    />
                                </FormGroup>
                            ):
                            <></>
                    }
                    <FormGroup>
                            <Button disabled={loading}type="submit">{signupPage?"Signup":"Login"}</Button>
                    </FormGroup>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                {
                    signupPage?
                    <p>Already Have a account? Login Here</p>:
                    <p>Don't Have a account? Signup Here</p>
                }
            </div>
        </>
    );
};

AightUserAuthenticationForm.defaultProps = {
    signupPage: false,
};

export default AightUserAuthenticationForm;