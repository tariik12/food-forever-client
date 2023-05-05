import React from 'react';
import errorp from '../assets/error_404.json'
import Lottie from "lottie-react";
import { Link, useRouteError } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Error = () => {
 
  const { error, status } = useRouteError()
  return (
    <div  className='bg-dark border rounded'>
     
      <Card className="text-center text-dark m-5 p-5">
  <Card.Header className='p-5 fs-1 bg-info text-danger'><strong>Error :</strong>  {error?.message} {status || 'Not Found Page' + 404}</Card.Header>
  <Card.Body >
  <Lottie className='w-50  h-50 mx-auto p-5' animationData={errorp} loop={true} />
    
  </Card.Body>
  <Card.Footer className="text-muted bg-info border rounded p-0"> 
  <Link className=''
            to='/'
          >
            <Button className='bg-info w-100'>Go To Home Page</Button>
          
          </Link>
  </Card.Footer>
</Card>
       
    </div>
);
};

export default Error;
