import React, { useState  } from "react";
import { 
  Navbar, 
  NavbarToggler, 
  Collapse, Nav, 
  NavItem, NavLink, 
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../utils/contexts/AuthContext";

function TotallyCewlNavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { currentUser } = useAuth();

  return (
    <Navbar color="light" light expand="sm">
      <NavbarBrand href="/">uCook!</NavbarBrand>
      <NavbarToggler onClick={() => setNavOpen(!navOpen)}/>
      <Collapse className="justify-content-end" isOpen={navOpen} navbar>
        <Nav navbar>
            {currentUser && 
              <>
                <UncontrolledDropdown nav caret>
                    <DropdownToggle>
                      Account
                    </DropdownToggle>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/saved-recipes">Saved Recipes</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/my-recipes">My Recipes</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                  </DropdownItem>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/saved-recipes">Saved Recipes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/my-recipes">My Recipes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <LogoutButton />
                </NavItem>
              </>
            }
            {!currentUser&&
              <>
                <NavItem>
                  <NavLink href="/signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                </NavItem>
              </>
            }
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TotallyCewlNavBar;
