import React from 'react';
import Lottie from "lottie-react";

import banner from "../../../assets/recipe_animation.json"
import { Card, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
        <Col>
            <Card.Body className='mt-5 w-75 '>
            <Card.Title>
         <span className='fs-1 fw-bold ' >experience the joy</span> <br />
         <span className='fs-1 fw-bold ' > OF <span className='text-info '>ITALIAN CUISINE.</span></span>
     </Card.Title>
     <Card.Text className='fs-4 mt-2'>
         The essence of Italian cooking today is simplicity. One uses the freshest seasonal ingredients and basic cooking techniques to simply enhance the natural flavor of the food.
        </Card.Text>
        <Card.Link className='text-decoration-none text-info' href="#">more about me »</Card.Link>
            </Card.Body>
        </Col>
        <Col>
          <Lottie className='' animationData={banner} loop={true} />
        </Col>
    </Row>
        </Container>
    );
        
};

export default Banner;