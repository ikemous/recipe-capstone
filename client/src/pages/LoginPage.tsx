import  React from "react";
import { Row, Col } from "reactstrap";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";
import PageContainer from "../components/PageContainer";

function LoginPage() {
    return (
        <PageContainer>
            <Row 
                style={{
                    alignItems: "center", 
                    height: "75vh"
                }}
            >
                <Col>
                    <AightUserAuthenticationForm />
                </Col>
            </Row>
        </PageContainer>
    );
};

export default LoginPage;