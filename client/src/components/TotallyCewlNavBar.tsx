import React, { useState  } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../utils/contexts/AuthContext";

function TotallyCewlNavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { currentUser } = useAuth();

  return (
    <Navbar color="light" light expand="sm">
      <Link to="/" className="navbar-brand">uCook!</Link>
      <NavbarToggler onClick={() => setNavOpen(!navOpen)}/>
      <Collapse className="justify-content-end" isOpen={navOpen} navbar>
        <Nav  navbar>
          <NavItem>
            {currentUser && 
            <LogoutButton />}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TotallyCewlNavBar;
