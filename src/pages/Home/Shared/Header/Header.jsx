import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user,logout} = useContext(AuthContext) ;
   
    // const from = '/';

    const handleLogout = () =>{
      logout()
      .then(() => {
      })
      .catch((error) => {});
    }
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
             {user && <Nav.Link><FaUserCircle /></Nav.Link>}
            {
                user?<Link onClick={handleLogout} ><Button variant="outline-success">Logout</Button></Link>:
                <Link to='/login'><Button variant="outline-success">Login</Button></Link>
            }
      </Container>
    </Navbar>
    );
};

export default Header;