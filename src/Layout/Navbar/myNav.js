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
import "./myNav.css";
import SearchNav from './searchNav';
import SignNavBtn from './signNavBtn';

const MyNav = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle =() => setIsOpen(!isOpen);

  return (
 <div>

 </div>
  );
}



export default MyNav;