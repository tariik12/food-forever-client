import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='border my-4'>
            <h1 className='text-center'>ITALIAN FOOD FOREVER</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </Container>
    );
};

export default Footer;