import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Navbar, 
    Nav,
    Container,
    Offcanvas,
    Form,
    FormControl,
    Button,
    Dropdown,
    ButtonGroup,
    // DropdownButton,
} from 'react-bootstrap';
import { setDisplayMode } from './headerSlice';

export default function Header() {
    const dispatch = useDispatch();
    const displayMode = useSelector(state => state.header.displayMode);

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
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                            <Nav className="justify-content=end flex-grow-1 pe-3">
                                Dashboard Mode:
                                <ButtonGroup
                                    variant="secondary"
                                    size="sm">
                                    <Dropdown.Item className={(displayMode === 'card')? 'active': ''}
                                        onClick={() => dispatch(setDisplayMode('card')) }>
                                        Card
                                    </Dropdown.Item>
                                    <Dropdown.Item className={(displayMode === 'list')? 'active': ''}
                                        onClick={() => dispatch(setDisplayMode('list')) }>
                                        List
                                    </Dropdown.Item>
                                </ButtonGroup>
                            </Nav>
                            <br />
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