import React from "react";
import { useAuth } from "../utils/contexts/AuthContext";
import PageContainer from "../components/PageContainer";
function UserProfilePage() {

    const { currentUser } = useAuth();
    console.log(currentUser);
    
    return (
        <PageContainer>
            <h1>{currentUser.email}</h1>
        </PageContainer>
    );
};

export default UserProfilePage;