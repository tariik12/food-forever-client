import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiOutlineThumbUp } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';

const Chefs = ({ da }) => {
  const { id, image_url, chef_name, total_likes, experience, recipes } = da;

  return (
    <Col>
      <Card style={{ height: '600px' }}>
        <LazyLoad height={762} width={400} threshold={0.95}>
          <Card.Img variant="top" src={image_url} />
        </LazyLoad>
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            {experience.slice(0, 1)}
            <Link className="text-decoration-none text-info" to="/recipes">
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
              <HiOutlineThumbUp style={{ height: '40px', width: '50px' }} className="me-2" />
              {total_likes}
            </div>
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Chefs;
