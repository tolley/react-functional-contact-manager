import React from 'react';
import { 
    Navbar, 
    Nav,
    Container,
    Offcanvas,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

export default function Header() {
    return (
        <div className="dashboard">
            <Navbar bg="dark" variant="dark" sticky="top" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">Contact Manager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Contact Manager
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/dashboard">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>                        
                </Container>
            </Navbar>
        </div>
    );
};