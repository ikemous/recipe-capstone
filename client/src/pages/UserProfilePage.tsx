import React from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../utils/contexts/AuthContext";
import PageContainer from "../components/PageContainer";
function UserProfilePage() {

    const { currentUser } = useAuth();
    console.log(currentUser);
    
    return (
        <PageContainer>
            <Helmet>
                <title>uCook! - Profile</title>
                <meta name="description" content="uCook! Profile Page"/>
            </Helmet>
            <h1>{currentUser.email}</h1>
        </PageContainer>
    );
};

export default UserProfilePage;