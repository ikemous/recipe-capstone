import React from "react";
import PageContainer from "../components/PageContainer";
import QueryForm from "../components/QueryForm";
import { Col, Row, } from "reactstrap";
import "./landingPage.css";

function LandingPage() {
  return (
    <PageContainer>
       <QueryForm />
       <Row className="item-section">
          <Col style={{background: "yellow"}} sm={12} md={4}>
            <img src="https://via.placeholder.com/250" alt="Placeholder" />
          </Col>
          <Col style={{background: "green"}} sm={12} md={8}>
            <h2>Search For Recipes!</h2>
            <p>
              You can either search from the home page or click the search page! Think of an ingredient or 
              food choice and discover some delicious meals!
            </p>
          </Col>
       </Row>
       <Row className="item-section">
         <Col xs={{ size: "auto", order: 2}}  sm={{ size: "8", order: 1}}>
            <h2>Save Favourites!</h2>
            <p>
              Found something you like but not hungry yet? Click the heart and save it for later!
              You'll need to be logged in. Not Logged in? Create and account!
            </p>
         </Col>
         <Col xs={{ size: "auto", order: 1}} sm={{ size: "4", order: 2}}>
            <img src="https://via.placeholder.com/250" alt="Placeholder" />
         </Col>
       </Row>
       <Row className="item-section">
         <Col sm={12} md={4}>
            <img src="https://via.placeholder.com/250" alt="Placeholder" />
         </Col>
         <Col sm={12} md={8}>
            <h2>Save Your Own Recipes!</h2>
            <p>
              Know of some recipes but dont want to write them on paper? Create your recipe and save it for later!
              You'll need to be logged in. Not Logged in? Create and account!
            </p>
         </Col>
       </Row>
    </PageContainer>
  );
};

export default LandingPage;
