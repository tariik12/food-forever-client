import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const Recipes = ({da}) => {
  console.log(da)
  const {ingredients,recipe_name,image_url  } =da

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
            
                
            
            <Card.Text className='d-flex justify-content-between align-items-center'>
             {/* {total_likes} */}
             <Button variant="info">Favorite Recipe</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Recipes;