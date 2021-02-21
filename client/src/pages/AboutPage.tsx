import React from "react";
import { Row } from "reactstrap";
import PageContainer from "../components/PageContainer";

function AboutPage() {
    return (
        <PageContainer>
            <h2 className="text-center">About The Creator</h2>
            <Row 
                style={{marginRight: "auto", justifyContent: "center"}}
            >
                <img 
                    src="https://via.placeholder.com/400" 
                    alt="creator next to motorcycle"
                />
            </Row>
        </PageContainer>
    );
};

export default AboutPage;