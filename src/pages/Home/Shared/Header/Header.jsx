import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = null;
    return (
             <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link href="" className='fs-4 fw-bold'><span className=''>Italian</span> <span className='text-info'>Food Forever</span></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
          </Nav>
       
        </Navbar.Collapse>
            {
                user?<Link to=''><Button variant="outline-success">Logout</Button></Link>:
                <Link to='/login'><Button variant="outline-success">Login</Button></Link>
            }
      </Container>
    </Navbar>
    );
};

export default Header;