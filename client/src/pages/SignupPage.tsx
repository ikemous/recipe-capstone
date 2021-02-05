import React from "react";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";
import PageContainer from "../components/PageContainer";
import { Row, Col } from "reactstrap";

function SignupPage() {
    return (
        <PageContainer>
            <Row 
                style={{
                    alignItems: "center", 
                    height: "75vh"
                }}
            >
                <Col>
                    <AightUserAuthenticationForm signupPage />
                </Col>
            </Row>
        </PageContainer>
    );
};

export default SignupPage;