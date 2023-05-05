import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';

const Chefs = ({ da }) => {
  const { id, image_url, chef_name, total_likes, experience, recipes } = da;

  return (
    <Col>
      <Card style={{ height: '40rem' }}>
        <LazyLoad   threshold={0.95}>
          <Card.Img variant="top" style={{height:'18rem'}} src={image_url} />
        </LazyLoad>
          <Card.Title >{chef_name}</Card.Title>
        <Card.Body>
          <Card.Text>
            {experience.slice(0, 1)}
            <Link className="text-decoration-none text-info" >
              ..Read more »
            </Link>
          </Card.Text>
          <strong>Explore Recipes:</strong>
          {recipes.slice(0, 3).map((rec, index) => (
            <ListGroup.Item key={index}>{rec}</ListGroup.Item>
          ))}
        </Card.Body>
        <Card.Footer className="text-muted p-2">
          <Card.Text className="d-flex justify-content-between align-items-center">
            <Link to={`/recipes/${id}`}>
              <Button variant="info" className="me-5">
                View Details
              </Button>
            </Link>
            <div className="me-5">
              <HiOutlineHeart style={{ height: '40px', width: '50px' }} className="me-2 text-info" />
              {total_likes}
            </div>
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Chefs;
