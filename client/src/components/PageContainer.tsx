import React from "react";
import { Container } from "reactstrap";
import TotallyCewlNavBar from "./TotallyCewlNavBar";

interface Props {};

const PageContainer:React.FC<Props> = ({ children }) => {
  return (
    <>
      <TotallyCewlNavBar />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
