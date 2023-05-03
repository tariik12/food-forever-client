import React from 'react';
import { Button, Card, Col, ListGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chefs = ({da}) => {
  const {id,image_url,chef_name,total_likes,experience,recipes}=da;
    return (
          <Col>
            <Card>
              <Card.Img style={{height:'250px'}} variant="top" src={image_url} />
              <Card.Body>
                <Card.Title>{chef_name}</Card.Title>
                <Card.Text>
                 {experience}
                </Card.Text>
                {
                    recipes.map((rec,index) =><ListGroup.Item key={index}>{rec}</ListGroup.Item>)
                }
                
                    
                
                <Card.Text className='d-flex justify-content-between align-items-center'>
                <Link to={`/recipes/${id}`}><Button variant="info">View Details</Button></Link>
                 {total_likes}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default Chefs;