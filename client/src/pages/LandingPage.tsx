import React from "react";
import QueryForm from "../components/QueryForm";
import FluidImage from "../components/FluidImage";
import { Col, Container, Row, } from "reactstrap";
import { Link } from "react-router-dom";
import TotallyCewlNavBar from "../components/TotallyCewlNavBar";
import "./landingPage.css";

function LandingPage() {
  return (
    <>
      <TotallyCewlNavBar />
      <Row
        style={{
          height: "40vh", 
          paddingTop: "10px",
          marginLeft: 0,
          marginRight: 0,
          background: `url(./images/query-background.jpg)`,
          backgroundRepeat: "no-repeat", 
          backgroundAttachment: "fixed",
          backgroundSize: "100% 73%",
        }}
      >
        <QueryForm />
      </Row>
      <Container fluid={true}>
        <Row style={{paddingTop: "1vh"}}>
          <Col className="text-center" xs={12}>
            <h2>uCook! Find Or Create Recipes</h2>
            <p style={{fontSize: "1.5rem"}}>See The information below or use the serach bar to start finding!</p>
          </Col>
        </Row>
        <Row className="item-section">
          <Col className="text-center" sm={12} md={4}>
            <FluidImage src="./images/marie-dehayes-food.jpg" alt="cutting meat by marie dehayes" />
          </Col>
          <Col sm={12} md={8}>
            <Row>
              <h2 className="col text-center">Search For Recipes!</h2>
            </Row>
            <Row>
              <p className="col text-center landing-text">
                Using the Edmam API you can either search from the home page or click the search page! Think of an ingredient or 
                food choice and discover some delicious meals!
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="item-section">
          <Col xs={{ size: "auto", order: 2}}  sm={{ size: "8", order: 1}}>
            <h2 className="text-center">Save Favourites!</h2>
            <p className="col text-center landing-text">
              Found something you like but not hungry yet? Click the heart and save it for later!
              You'll need to be logged in. <Link to="/login">Login Here</Link>
            </p>
          </Col>
          <Col className="text-center" xs={{ size: "auto", order: 1}} sm={{ size: "4", order: 2}}>
            <FluidImage src="./images/henar-langa-food.jpg" alt="cutting meat by henar langa"/>
          </Col>
        </Row>
        <Row className="item-section">
          <Col className="text-center" sm={12} md={4}>
            <FluidImage src="./images/mindaugas-petrutis-food.jpg" alt="cutting meat by mindaugas petrutis" />
          </Col>
          <Col  sm={12} md={8}>
            <h2 className="text-center">Save Your Own Recipes!</h2>
            <p className="col text-center landing-text">
              Know of some recipes but dont want to write them on paper? Create your recipe and save it for later!
              You'll need to be logged in. <Link to="/login">Login Here</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
