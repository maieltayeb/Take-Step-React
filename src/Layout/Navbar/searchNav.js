import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button
} from 'reactstrap';
// import Image from 'react-bootstrap/Image';
// import { Form } from 'react-bootstrap';

import "./nav.css";
const SearchNav = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle =() => setIsOpen(!isOpen);

  return (
    <div>  
       <Nav className="mR-auto  clearfix" navbar>
        <NavItem>
        <Input placeholder="search"className="searchInput float-left mr-1"></Input>
        </NavItem> 
        <NavItem>
          {/* <span>
        <i class="far fa-search"></i>
        </span> */}
        {/* <img  className="float-left d-inline" src="./img/search.png"/> */}
        </NavItem>
        </Nav>
    </div>
  );
}

export default SearchNav;