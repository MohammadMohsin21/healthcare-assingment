import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
              <Container>
                    <Navbar.Brand href="/home" className='logo'><span className='green-text'>GREEN</span>Medical</Navbar.Brand>
                    <Nav className="me-auto menu">
                      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                      <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                      <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                      <Nav.Link as={HashLink} to="/appoinment">Appointment</Nav.Link>
                      <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <span className='name'><img src={user.photoURL} alt="" />{user.displayName}</span>
                    {
                      user?.email ? 
                      <Button onClick={logOut} variant="success">Log Out</Button>
                      :
                      <Link to="/login"><Button variant="outline-success">Login</Button></Link>
                      }
              </Container>
          </Navbar>
    </div>
  );
};

export default Header;