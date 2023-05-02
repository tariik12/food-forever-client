import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../../Recipes/Recipes';
const ViewDetails = () => {
    const {id} = useParams()
    console.log(id)
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    const {chef_Details,recipes} = chefDetails;
    const {bio_data,chef_name,image_url,recipes_name,total_likes,  experience} =chef_Details
    return (
        <Container className='mt-5'>
          <Card>
           <Row xs={1} md={2} className="g-4">
        <Col>
            <Card.Img variant="top" src={image_url} />
          
        </Col>
        <Col>
            <Card.Body>
              <Card.Title>Name: {chef_name}</Card.Title>
              <Card.Text>
              Bio Data: {bio_data}
              </Card.Text>
              <Card.Text>
               Experience: {experience}
              </Card.Text>
              {
                    recipes_name.map((rec,index) =><ListGroup.Item key={index}>{rec}</ListGroup.Item>)
                }
            <Card.Footer className='d-flex'>
            <Card.Text>
            jhd;
              </Card.Text>
           {total_likes}
            </Card.Footer>
            </Card.Body>
        </Col>
         </Row>
          </Card>

          <Row xs={1} md={3} className="g-4 mt-5">

            {recipes.map((da,index)=><Recipes da={da} key={index}></Recipes>)}
            </Row>
        </Container>
    );
};

export default ViewDetails;