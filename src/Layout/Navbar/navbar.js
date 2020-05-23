import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./nav.css";
import SearchNav from './searchNav';
import SignNavBtn from './signNavBtn';

const WelcomeNavBar = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle =() => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className= " shadow-sm m-0  pt-0 pb-0 navbarStyle" color="light" light expand="md">
        <NavbarBrand href="/"><img className="logo" src="./img/logo.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
        <SearchNav/>
        <Nav className="ml-auto aboutSignNav " navbar >
            <NavItem className="m-5 float-right" >
              <NavLink href="#"  className="ml-35 aboutSignNavLink ">About Us</NavLink>
            </NavItem>
            <NavItem  className="m-5 float-right">
              <NavLink href="#"  className="   aboutSignNavLink">Sign In</NavLink>
            </NavItem>
            </Nav>
         <SignNavBtn/>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default WelcomeNavBar;