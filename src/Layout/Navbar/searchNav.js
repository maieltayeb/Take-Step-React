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
      <Input class="form-control py-2" placeholder="search" type="search" className="searchInput float-left mr-1">
      <span class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">
            <i class=" mt- fas fa-search"></i>
        </button>
      </span>
      </Input>
      </NavItem>
      <NavItem>
      <span>
       <i class=" mt-2 fas fa-search"></i>
        </span>
        </NavItem>
      </Nav>
    </div>
  );
}

export default SearchNav;