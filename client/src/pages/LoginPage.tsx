import  React from "react";
import { Row } from "reactstrap";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";
import PageContainer from "../components/PageContainer";

function LoginPage() {
    return (
        <PageContainer>
            <Row>
                <AightUserAuthenticationForm />
            </Row>
        </PageContainer>
    );
};

export default LoginPage;