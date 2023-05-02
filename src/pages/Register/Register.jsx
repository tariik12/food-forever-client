import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Card className='container mx-auto m-5 p-5 w-50 '>
            <Card.Title className='text-center'>Welcome! Please Register to continue.</Card.Title>

            <Form className=' '>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Please  Enter Your Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="photo" name='photo' placeholder="Please  Enter Your Photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Please  Enter Your email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Please Enter Your Password" required />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Text className="text-muted">
          Already member? <Link to='/login' className='text-decoration-none text-info'>Login here.</Link> 
          </Form.Text>
        </Form.Group>
        <Button className='w-100' variant="info" type="submit">
          Submit
        </Button> 
        
      </Form>
        <Card.Text className='text-center'>Or  </Card.Text>
      <Button className='w-100 mb-4' variant="info" type="submit">
          Google
        </Button>
        <Button className='w-100' variant="info" type="submit">
          GitHub
        </Button>
        </Card>
    );
};

export default Register;