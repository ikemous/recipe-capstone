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
                <Col 
                    sm={{size: 12}}
                    md={{size: 6, offset: 3}}
                >
                    <AightUserAuthenticationForm />
                </Col>
            </Row>
        </PageContainer>
    );
};

export default LoginPage;