import React, { useContext } from 'react';
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';


const Header = () => {
    const {user,logout} = useContext(AuthContext) ;
 

 
    const navLinkStyles = ({isActive}) =>{
      return{
          fontWeight: isActive?'bold':'normal',
          textDecoration: isActive? 'none': 'underline'
      }
  }

    const handleLogout = () =>{
      logout()
      .then(() => {
      })
      .catch((error) => {});
    }
    return (
             <Navbar bg="light" expand="lg" className='p-5' sticky="top">
      <Container >
        <NavLink to='/' className='fs-2 fw-bold text-decoration-none'><span className='text-black'>Italian</span> <span className='text-info'>Food Forever</span></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink style={navLinkStyles} className='text-decoration-none text-info  me-3' to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} className='text-decoration-none text-info  me-3' to='/blog'>Blog</NavLink>
            <NavLink style={navLinkStyles} className='text-decoration-none text-info ' to='/register'>Register</NavLink>
          </Nav>
       
        </Navbar.Collapse>
             {user && <Card.Img className='rounded-circle border-info me-3' style={{height:'40px' ,width:'50px'}}  variant="top" title={user?.displayName} alt={user?.displayName} src={user?.photoURL} />  }
             
            {
                user?<NavLink onClick={handleLogout} to='/' ><Button variant="outline-info">Logout</Button></NavLink>:
                <NavLink to='/login'><Button variant="outline-info">Login</Button></NavLink>
            }
      </Container>
    </Navbar>
    );
};

export default Header;