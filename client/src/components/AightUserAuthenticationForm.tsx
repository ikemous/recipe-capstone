import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    const history = useHistory();

    const { signup, login } = useAuth();

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
            history.push("/");
        } catch {
            setError("Failed To Create Account")
        }

        setLoading(false);
    };

    async function handleLogin(event:React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch {
            setError("No Account Or Incorrect Password")
        }

        setLoading(false);
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
                    <p>Already Have An Account? <Link to="/login">Login Here</Link></p>:
                    <p>Need An account? <Link to="/signup">Signup Here</Link></p>
                }
            </div>
        </>
    );
};

AightUserAuthenticationForm.defaultProps = {
    signupPage: false,
};

export default AightUserAuthenticationForm;