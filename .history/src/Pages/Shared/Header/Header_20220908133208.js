import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Login/hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/home">
                        {/* <img src={logo} height="30" alt="" /> */}
                        Car Genius
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home" className='mx-3'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services" className='mx-3'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#experts" className='mx-3'>Experts</Nav.Link>
                        {user.email ?
                            <Button variant='light'>Logout</Button> :
                            <Nav.Link as={Link} to="/login" className='mx-5'>Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;