import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare,FaInstagramSquare,FaUtensils,FaUserTie,FaEnvelopeOpenText, FaRegistered } from "react-icons/fa";
import {HiLogin,HiLibrary,HiOutlineViewGridAdd, HiOutlinePhoneMissedCall } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    
         <div  className=" bg-black text-white py-5">
         
         
        <Container >

        <h1 className='text-center'>ITALIAN <span className='text-info' >FOOD FOREVER</span></h1>
        <Row sm={1} md={3} className='py-5 mx-auto border ' >
            <Col>
            <Link className='text-decoration-none text-white fw-bold fs-4  ms-3' to='/'><FaEnvelopeOpenText className='' style={{ width: '50px', height:'40px' }} /> Home</Link> <br />
            <Link className='text-decoration-none text-white fw-bold fs-4 ms-3' to='/login'><HiLogin style={{ width: '50px', height:'40px' }} /> Login</Link> <br />
                <Link className='text-decoration-none text-white fw-bold fs-4 ms-3' to='/register'><FaRegistered  style={{ width: '50px', height:'40px' }}/> Register</Link> <br />
                <Link className='text-decoration-none text-white fw-bold fs-4 ms-3' to='/register'> <HiOutlinePhoneMissedCall style={{ width: '50px', height:'40px' }} /> Contact</Link> <br />
            </Col>
            <Col>
            <FaFacebookSquare  style={{ width: '50px', height:'40px' }}/>
                <FaInstagramSquare  style={{ width: '50px', height:'40px' }}/>
            </Col>
            <Col className=' border'>
                <Link className='text-decoration-none text-white fw-bold fs-4  border mx-auto' to='/'><HiOutlineViewGridAdd style={{ width: '50px', height:'40px' }} /> Italy</Link> <br />
                <Link className='text-decoration-none text-white fw-bold fs-4 ms-3' to='/register'> <HiLibrary style={{ width: '50px', height:'40px' }} />blog</Link> <br />
                <Link className='text-decoration-none text-white fw-bold fs-4 ms-3' to='/register'><FaUserTie  style={{ width: '50px', height:'40px' }}/> Chef</Link> <br />
                <Link className='text-decoration-none text-white fw-bold fs-4 ms-3' to='/register'><FaUtensils  style={{ width: '50px', height:'40px' }}/> Recipe</Link> <br />
            </Col>

        </Row>
            <div >
                
                
            </div>
            <div>
               
            </div>
        </Container>
         
         </div>

        
    );
};

export default Footer;