import React from "react";
import { Button } from "reactstrap";
import { useAuth } from "../utils/contexts/AuthContext";
import { useHistory } from "react-router-dom";

function LogoutButton() {
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        try {
            await logout();
            history.push("/login");
        } catch {
            console.log("Failed To Logout :(");
        }
    }

    return (
        <Button color="danger" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;