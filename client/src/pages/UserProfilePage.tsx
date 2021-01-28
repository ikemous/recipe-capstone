import React from "react";
import { useAuth } from "../utils/contexts/AuthContext";

function UserProfilePage() {

    const { currentUser } = useAuth();
    
    return (
        <>
            {JSON.stringify(currentUser)}
        </>
    );
};

export default UserProfilePage;