import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, updateProfileUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);

  const handleAccept = event => {
    setAccept(event.target.checked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleRegister = event => {
    event.preventDefault();
    const { name, photo, email, password } = event.target.elements;

    const passwordRequirements = [
      { pattern: /(?=.*?[A-Z])/, message: 'At least one upper case English letter!' },
      { pattern: /(?=.*?[a-z])/, message: 'At least one lower case English letter!' },
      { pattern: /(?=.*?[0-9])/, message: 'At least one digit!' },
      { pattern: /(?=.*?[#?!@$%^&*-])/, message: 'At least one special character!' },
      { pattern: /.{8,}/, message: 'Minimum eight in length!' },
    ];

    const isPasswordValid = passwordRequirements.every(({ pattern, message }) => {
      const isValid = pattern.test(password.value);
      if (!isValid) {
        toast.error(message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      return isValid;
    });

    if (!isPasswordValid) {
      return;
    }

    createUser(email.value, password.value)
      .then(userCredential => {
        const user = userCredential.user;
        updateProfileUser(name.value, photo.value);
        toast('Register Success!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        navigate(from, { replace: true });
        event.target.reset();
      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };


  return (
    <Card className='container mx-auto m-5 p-5 w-50 '>
      <Card.Title className='text-center'>Welcome! Please Register to continue.</Card.Title>
      <div></div>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Please Enter Your Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="photo" name='photo' placeholder="Please Enter Your Photo Url"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Please Enter Your email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Please Enter Your Password" required />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onClick={handleAccept} label={<>Accept <Link to='/terms'>terms and conditions</Link></>}  />
          <Form.Text className="text-muted">
            Already a member? <Link to='/login' className='text-decoration-none text-info'>Login here.</Link> 
          </Form.Text>
        </Form.Group>
        <Button className='w-100' variant="info" type="submit" disabled={!accept}>
          Submit
        </Button> 
      </Form>
    </Card>
  );
};

export default Register;