import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { loginUser, handleGoogleProvider, handleGithubProvider } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        toast.success('Login Success!', {
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
      .catch((error) => {
        const errorMessage = error.message;

        toast.error(errorMessage, {
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
    <Card className="container mx-auto m-5 p-5 w-50">
      <Card.Title className="text-center">Welcome! Please Login to continue.</Card.Title>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Please enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Please enter your password" />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccept}
            label={<>Accept <Link to="/terms">terms and conditions</Link></>}
          />
          <Form.Text className="text-muted">
            New member? <Link to="/register" className="text-decoration-none text-info">Register here.</Link> 
          </Form.Text>
        </Form.Group>

        <Button className="w-100" variant="info" type="submit" disabled={!accept}>
          Submit
        </Button> 
      </Form>

      <Card.Text className="text-center">Or</Card.Text>

      <Link onClick={handleGoogleProvider} to="/">
        <Button className="w-100 mb-4" variant="info">
          Google
        </Button>
      </Link>

      <Button onClick={handleGithubProvider} className="w-100" variant="info" type="submit">
        GitHub
      </Button>
    </Card>
  );
};

export default Login;
