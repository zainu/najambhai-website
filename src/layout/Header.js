import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Container,Nav} from 'react-bootstrap';
const Header = ()=>{
    return(
        <header className="header">
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Beem Light</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto justify-content-end">
                    <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    <Nav.Link><Link to='/games'>Games</Link></Nav.Link>
                    <Nav.Link><Link to='/govern'>Governance</Link></Nav.Link>
                    <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                    <Nav.Link><Link to='/docs'>Documentation</Link></Nav.Link>
                    <Nav.Link><Link to='/stake'>Staking</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header;