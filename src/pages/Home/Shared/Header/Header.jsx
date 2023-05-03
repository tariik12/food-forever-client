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
             <Navbar bg="light" expand="lg" className='p-5'>
      <Container >
        <Link to='/' className='fs-2 fw-bold text-decoration-none'><span className='text-black'>Italian</span> <span className='text-info'>Food Forever</span></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-decoration-none text-black me-3' to='/'>Home</Link>
            <Link className='text-decoration-none text-black ' to='/blog'>Blog</Link>
          </Nav>
       
        </Navbar.Collapse>
             {user && <Nav.Link><FaUserCircle /></Nav.Link>}
            {
                user?<Link onClick={handleLogout} to='/' ><Button variant="outline-success">Logout</Button></Link>:
                <Link to='/login'><Button variant="outline-success">Login</Button></Link>
            }
      </Container>
    </Navbar>
    );
};

export default Header;