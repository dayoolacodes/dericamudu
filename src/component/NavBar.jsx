import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg"  bg="light" className="shadow">
          <Navbar.Brand href="/" className="text-success">
              <b><span className="text-danger">Derica</span>Mudu.ng</b></Navbar.Brand>
              <Navbar.Toggle className="border-0" style={{outline:"none", fontSize:"small"}} aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#feeback">Send Feedback</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
             </Nav>
             </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;

