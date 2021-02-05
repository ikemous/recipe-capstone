import React from "react";
import PageContainer from "../components/PageContainer";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { Row, Col } from "reactstrap";

function ForgotPasswordPage() {
    return (
        <PageContainer>
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