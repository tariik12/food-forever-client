import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Recipes = ({da}) => {
  console.log(da)
  const {ingredients,recipe_name,image_url,rating,total_likes} =da
  console.log(da)

    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{recipe_name}</Card.Title>
            <Card.Text>
            </Card.Text>
            {/* {
                recipes.map((rec,index) =><ListGroup.Item key={index}>{rec}</ListGroup.Item>)
            } */}
            
                
            
          </Card.Body>
           <Card.Footer className='d-flex justify-content-between align-items-center'>
             <Button variant="info">Favorite Recipe</Button>
           <Card.Text className='d-flex align-items-center mt-3' >
             {/* {total_likes} */}
             <Rating style={{ maxWidth: 150 }} className='me-2' value={rating} readOnly />
             <span>{rating?.number}</span>
            </Card.Text>
            <Card.Text>{total_likes}</Card.Text>
           </Card.Footer>
        </Card>
      </Col>
    );
};

export default Recipes;