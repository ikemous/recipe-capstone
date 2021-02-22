import  React from "react";
import { Helmet } from "react-helmet";
import { Row, Col } from "reactstrap";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";
import PageContainer from "../components/PageContainer";

function LoginPage() {
    return (
        <PageContainer>
            <Helmet>
                <title>uCook! - Login</title>
                <meta name="description" content="uCook! Login Page"/>
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
                    <AightUserAuthenticationForm />
                </Col>
            </Row>
        </PageContainer>
    );
};

export default LoginPage;