import React from "react";
import PageContainer from "../components/PageContainer";
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

    </Container>

    </>
  );
};

export default LandingPage;
