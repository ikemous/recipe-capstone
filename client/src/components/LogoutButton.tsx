import React from "react";
import { Button } from "reactstrap";
import { useAuth } from "../utils/contexts/AuthContext";

function LogoutButton() {
    
    function handleLogout() {

    }

    return (
        <Button onClick={handleLogout}>

        </Button>
    );
};

export default LogoutButton;