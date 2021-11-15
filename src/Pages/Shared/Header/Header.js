import React from 'react';

import useAuth from '../../../hooks/useAuth'

import logo from '../../../images/logo.png'
import './Header.css'
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth()



    return (
        <div className="header-section " >
            <Navbar bg="dark" fixed="top" expand="lg">
                <Container className="text-center">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><img
                                src={logo}
                                width="30"
                                height="30"

                                className="d-inline-block me-3 align-top"
                                alt="React Bootstrap logo"
                            />Home</Nav.Link>

                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        </Nav>
                        {user?.email ?
                            <> <Nav className="ms-auto">
                                <NavDropdown title={user?.displayName} id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item as={Link} to="/allbooking">Manage Booking</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/myBooking">My Booking</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addDestination">Add Destination</NavDropdown.Item>

                                    <Button className="logout-btn" onClick={logOut} >Logout</Button>

                                </NavDropdown>
                            </Nav>


                                <img className="rounded-circle text-right mx-2" width="40" height="40" src={user?.photoURL} alt="" />





                            </>

                            :

                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>




    );
};

export default Header;