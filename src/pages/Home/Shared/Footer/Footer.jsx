import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FaFacebookSquare,FaInstagramSquare,FaUtensils,FaUserTie,FaWarehouse,FaTelegramPlane, FaRegistered } from "react-icons/fa";
import {HiLogin,HiLibrary,HiOutlineViewGridAdd, HiOutlinePhoneMissedCall } from "react-icons/hi";
import {  NavLink } from 'react-router-dom';

const Footer = () => {

    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight: isActive?'700':'normal',
            fontSize: isActive? '30px' : '28px'
        }
    }
    return (
    
         <div  className=" bg-dark text-white py-5">
         
         
        <Container className='text-white' >

        <h1 className='text-center'>ITALIAN <span className='text-info' >FOOD FOREVER</span></h1>
        <Row sm={1} md={4} className=' ' >
            <Col className='m-5 ' >
            <Nav className='d-flex flex-column'>
            <NavLink style={navLinkStyles} className='text-decoration-none text-info me-3' to='/'> <FaWarehouse style={{ width: '50px', height:'40px' }} /> Home</NavLink>
            
            <NavLink style={navLinkStyles} className='text-decoration-none text-info ' to='/login'><HiLogin style={{ width: '50px', height:'40px' }} /> Login</NavLink>
            <NavLink style={navLinkStyles} className='text-decoration-none text-info ' to='/register'><FaRegistered  style={{ width: '50px', height:'40px' }}/> Register</NavLink>
            <NavLink style={navLinkStyles} className='text-decoration-none text-info ' to='/register'> <HiOutlinePhoneMissedCall style={{ width: '50px', height:'40px' }} /> Contact</NavLink>
          </Nav>  
            </Col>
            <Col className='  d-flex my-5 '>   
             <Nav className=' mx-auto p-2'>
             <NavLink style={navLinkStyles} className='text-decoration-none text-info me-3   ' to=''><FaFacebookSquare  className=' mx-auto text-info' style={{ width: '50px', height:'40px' }}/></NavLink>
                <NavLink style={navLinkStyles} className='text-decoration-none text-info me-3  ' to=''><FaInstagramSquare   className=' mx-auto' style={{ width: '50px', height:'40px'}}/></NavLink>
                <NavLink style={navLinkStyles} className='text-decoration-none text-info me-3 ' to='/'><FaTelegramPlane  className=' mx-auto' style={{ width: '50px', height:'40px' }}/></NavLink>
             </Nav>
            </Col>
            <Col className='m-5'>
                <Nav className=' d-flex  flex-column' >

                <NavLink style={navLinkStyles} className='text-decoration-none text-info me-5 pe-1 ms-auto ' to='/italy'><HiOutlineViewGridAdd style={{ width: '50px', height:'40px' }} /> Italy</NavLink>
                <NavLink style={navLinkStyles} className='text-decoration-none text-info me-5 ms-auto ' to='/blog'><HiLibrary style={{ width: '50px', height:'40px' }} /> Blog</NavLink>

                <NavLink style={navLinkStyles} className='text-decoration-none text-info me-5 ms-auto' to='/chef'><FaUserTie  style={{ width: '50px', height:'40px' }}/> Chef</NavLink>
                <NavLink style={navLinkStyles} className='text-decoration-none text-info me-4 ms-auto' to='/categories'><FaUtensils  style={{ width: '50px', height:'40px' }}/> Recipe</NavLink>
                </Nav>
            </Col>
        </Row>
                <div>
                    <hr />
                </div>
        </Container>
         
         </div>

        
    );
};

export default Footer;