import React from "react";
import QueryForm from "../components/QueryForm";
import FluidImage from "../components/FluidImage";
import { Col, Container, Row, } from "reactstrap";
import "./landingPage.css";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";

function LandingPage() {
  return (
    <>
      <TotallyCewlNavBar />
      <Container style={{padding: 0, margin: 0}} fluid={true}>
        <QueryForm />
      </Container>
      <Container fluid={true}>
        <Row style={{ marginLeft: 0, marginRight: 0 }} className="item-section">
          <Col className="text-center" sm={12} md={4}>
            <FluidImage />
          </Col>
          <Col sm={12} md={8}>
            <Row>
              <h2 className="col text-center">Search For Recipes!</h2>
            </Row>
            <Row>
              <p className="col text-center">
                You can either search from the home page or click the search page! Think of an ingredient or 
                food choice and discover some delicious meals!
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="item-section">
          <Col xs={{ size: "auto", order: 2}}  sm={{ size: "8", order: 1}}>
            <h2 className="text-center">Save Favourites!</h2>
            <p className="col text-center">
              Found something you like but not hungry yet? Click the heart and save it for later!
              You'll need to be logged in. Not Logged in? Create and account!
            </p>
          </Col>
          <Col className="text-center" xs={{ size: "auto", order: 1}} sm={{ size: "4", order: 2}}>
            <FluidImage />
          </Col>
        </Row>
        <Row className="item-section">
          <Col className="text-center" sm={12} md={4}>
            <FluidImage />
          </Col>
          <Col  sm={12} md={8}>
            <h2 className="text-center">Save Your Own Recipes!</h2>
            <p className="col text-center">
              Know of some recipes but dont want to write them on paper? Create your recipe and save it for later!
              You'll need to be logged in. Not Logged in? Create and account!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
