import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import check  from '../../../../assets/check_animation.json';
import Lottie from 'lottie-react';

const TermsAndCondition = () => {
    return (
        <div className='bg-dark border rounded'>
          <Card className="text-center m-5 p-5">
      <Card.Header className='p-5'> Welcome Our Page</Card.Header>
      <Card.Body >
        <Lottie style={{height:'20rem'}} animationData={check} loop={true} />
        
      </Card.Body>
      <Card.Footer className="text-muted"> 
      <Link className='p-5' to='/login'>Go To Login</Link>
      <Link className='p-5' to='/register'>Go To Register</Link>
      </Card.Footer>
    </Card>
           
        </div>
    );
};

export default TermsAndCondition;