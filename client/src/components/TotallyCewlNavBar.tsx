import React, { useState  } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";

function TotallyCewlNavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <Navbar color="light" light expand="sm">
      <Link to="/" className="navbar-brand">uCook!</Link>
      <NavbarToggler onClick={() => setNavOpen(!navOpen)}/>
      <Collapse className="justify-content-end" isOpen={navOpen} navbar>
        <Nav  navbar>
          <NavItem>
            Test
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TotallyCewlNavBar;
