import React from "react";
import { Helmet } from "react-helmet";
import PageContainer from "../components/PageContainer";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { Row, Col } from "reactstrap";

function ForgotPasswordPage() {
    return (
        <PageContainer>
            <Helmet>
                <title>uCook! - Oopsie!</title>
                <meta name="description" content="uCook! Forgot Password Page"/>
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
                    <ForgotPasswordForm />
                </Col>
            </Row>
        </PageContainer>
    );
};

export default ForgotPasswordPage;