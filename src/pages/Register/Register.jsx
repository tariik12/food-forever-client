import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

const {createUser,updateProfileUser} = useContext(AuthContext)
const [accept,setAccept] = useState(false);

const handleAccept = event =>{
  setAccept(event.target.checked)
}
const handleRegister = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
    if(!/(?=.*?[A-Z])/.test(password)){
        return toast.error('At least one upper case English letter!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    else if(!/(?=.*?[a-z])/.test(password)){
        return toast.error('At least one lower case English letter!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    else if(!/(?=.*?[0-9])/.test(password)){
        return toast.error('At least one digit!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
        return toast.error('At least one special character!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    else if(!/.{8,}/.test(password)){
        return toast.error('Minimum eight in length!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    createUser(email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfileUser(name,photo)
      toast('Register Success!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      event.target.reset()
    })
    .catch((error) => {
      const errorMessage = error.message;
    
      toast.error(`${errorMessage}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      
      
      
    });

}

    return (
        <Card className='container mx-auto m-5 p-5 w-50 '>
            <Card.Title className='text-center'>Welcome! Please Register to continue.</Card.Title>
              <div>      
        
              </div>
            <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Please  Enter Your Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="photo" name='photo' placeholder="Please  Enter Your Photo Url"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Please  Enter Your email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Please Enter Your Password" required />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleAccept} label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
          <Form.Text className="text-muted">
          Already member? <Link to='/login' className='text-decoration-none text-info'>Login here.</Link> 
          </Form.Text>
        </Form.Group>
        <Button className='w-100' variant="info" type="submit">
          Submit
        </Button> 
        
      </Form>
        </Card>
    );
};

export default Register;