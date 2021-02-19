import React, { useState } from "react";
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
import { useLocation } from "react-router-dom";

function TotallyCewlNavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  return (
    <Navbar color="light" light expand="sm">
      <NavbarBrand href="/">uCook!</NavbarBrand>
      <NavbarToggler onClick={() => setNavOpen(!navOpen)}/>
      <Collapse className="justify-content-end" isOpen={navOpen} navbar>
        <Nav navbar>

            <NavItem>
              <NavLink href="/" active={pathname==="/"?true:false}>Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about" active={pathname==="/about"?true:false}>About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/guide" active={pathname==="/guide"?true:false}>Guide</NavLink>
            </NavItem>

            {currentUser &&
              <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Account
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/saved-recipes" active={pathname==="/saved-recipes"?true:false}>Saved Recipes</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/my-recipes" active={pathname==="/my-recipes"?true:false}>My Recipes</NavLink>
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
          
                <NavItem>
                  <LogoutButton />
                </NavItem>
              </>
            }

            {!currentUser&&
            <>
              <NavItem>
                <NavLink href="/signup" active={pathname==="/signup"?true:false}>Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" active={pathname==="/login"?true:false}>Login</NavLink>
              </NavItem>
            </>
            }
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TotallyCewlNavBar;
