import React from 'react';
import Lottie from "lottie-react";

import banner from "../../../assets/recipe_animation.json"
import { Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='d-flex align-items-center'>

            < Card.Body className='w-50 pe-5'>
                 <Card.Title className=' '>
                     <span className='fs-1 fw-bold ' >experience the joy</span> <br />
                     <span className='fs-1 fw-bold ' > OF <span className='text-info '>ITALIAN CUISINE.</span></span>
                 </Card.Title>
                    <Card.Text className='fs-4 mt-2'>
                    <p className=''>The essence of Italian cooking today is simplicity. One uses the freshest seasonal ingredients and basic cooking techniques to simply enhance the natural flavor of the food.</p>
    
         </Card.Text>
         <Card.Link className='text-decoration-none text-info' href="#">more about me »</Card.Link>
       </Card.Body>

            <Lottie className='' animationData={banner} loop={true} />
        </div>);
};

export default Banner;