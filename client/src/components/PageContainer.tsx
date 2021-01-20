import React form "react";
import { Container } from "reactstrap";

interface Props {};

const PageContainer:React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container fluid={true}>
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
