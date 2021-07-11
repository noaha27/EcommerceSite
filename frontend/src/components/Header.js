import React from 'react'
import { Navbar, Nav, Container, Row} from 'react-bootstrap'

function Header() {
    return (
        <Header>
            <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect>
                <Contaner>
                <Navbar.Brand href="/">YourCreation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </Contaner>
            </Navbar>
        </Header>
    )
}

export default Header
