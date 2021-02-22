import React from "react";
import { Helmet } from "react-helmet";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";
import PageContainer from "../components/PageContainer";
import { Row, Col } from "reactstrap";

function SignupPage() {
    return (
        <PageContainer>
            <Helmet>
                <title>uCook! - Signup</title>
                <meta name="description" content="uCook! Signup Page"/>
            </Helmet>
            <Row 
                style={{
                    alignItems: "center", 
                    height: "75vh"
                }}
            >
                <Col
                    sm={{size: 12}}
                    md={{size: 6, offset: 3}}
                >
                    <AightUserAuthenticationForm signupPage />
                </Col>
            </Row>
        </PageContainer>
    );
};

export default SignupPage;