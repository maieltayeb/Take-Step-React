import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Container,
  Input
} from "reactstrap";
import SearchBox from "../../Components/SearchBox/SearchBox";
import NotificationDropdown from "../../Components/Dropdown/NotificationDropdown";

const InsideNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#e9ecef" }}
        light
        expand="md"
        className="p-0 shadow"
      >
        <Container className="themed-container" fluid={true}>
          <NavbarBrand href="/" style={{ "margin-left": "93px" }}>
            <img width="50%" src="/img/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{ marginRight: "17.4rem" }} navbar>
              <NavItem>
                <SearchBox></SearchBox>
                {/* <Input className="p-3 mt-1"  placeholder="search ..." style={{height:"22px",borderRadius:"35px"}}type="text"/> */}
              </NavItem>
              <NavItem className=" ml-2 mt-2">
                <i className="fas fa-search"></i>
              </NavItem>
            </Nav>
            <Nav style={{ marginRight: "3.5rem" }}>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }}>About Us</NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NavLink style={{ cursor: "pointer" }}>My Profile</NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NotificationDropdown></NotificationDropdown>
              </NavItem>
            </Nav>

            <Button
              style={{
                borderRadius: "35px",
                color: "#fffff",
                backgroundColor: "black",
                padding: "4px 29px"
              }}
            >
              {" "}
              Log Out
            </Button>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default InsideNav;