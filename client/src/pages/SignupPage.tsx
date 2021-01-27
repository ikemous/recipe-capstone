import React from "react";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";
import PageContainer from "../components/PageContainer";

function SignupPage() {
    return (
        <PageContainer>
            <AightUserAuthenticationForm signupPage />
        </PageContainer>
    );
};

export default SignupPage;