import React from "react";
import { Container } from "reactstrap";
import TotallyCewlNavBar from "./TotallyCewlNavBar";

interface Props {};

const PageContainer:React.FC<Props> = ({ children }) => {
  return (
    <>
      <TotallyCewlNavBar />
      <Container fluid={true}>
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
