import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const user = null;
    return (
             <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-4 fw-bold'><span className=''>Italian</span> <span className='text-info'>Food Forever</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
            {
                user?<Button variant="outline-success">Logout</Button>:
                <Button variant="outline-success">Login</Button>
            }
      </Container>
    </Navbar>
    );
};

export default Header;