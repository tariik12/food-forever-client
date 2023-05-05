import React, { useContext, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../../Recipes/Recipes';
import { HiArrowRight } from "react-icons/hi";
import { Rating } from '@smastrom/react-rating'
import Marquee from "react-fast-marquee";
import { HiOutlineHeart } from "react-icons/hi";
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../provider/AuthProvider';

const ViewDetails = () => {
  const { id } = useParams();
  const { loading } = useContext(AuthContext);
  const chefDetails = useLoaderData();
  if(!chefDetails){
    loading(true)
  }
  const { chef_Details, recipes } = chefDetails;
  const {
    bio_data,
    chef_name,
    image_url,
    recipes_name,
    total_likes,
    experience,
  } = chef_Details;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>
            <strong>Name:</strong> {chef_name}
          </Card.Title>
          <Card.Text>
            <strong>Bio Data:</strong> {bio_data}
          </Card.Text>
          <Card.Text>
            <strong>Experience: </strong>
            {experience}
          </Card.Text>
          <Card.Text className="d-flex justify-content-evenly ">
            <Card.Text className="d-flex flex-column align-items-end">
              <strong className="pe-5 fs-4 ">Explore Recipes :</strong>
              <HiArrowRight
                style={{ width: "40px", height: "50px" }}
                className="mt-3 text-info"
              />
            </Card.Text>
            <Card.Text className="fw-bold">
              {recipes_name.slice(0, 4).map((rec, index) => (
                <ListGroup.Item className="" key={index}>
                  {rec}
                </ListGroup.Item>
              ))}
            </Card.Text>
            <Card.Text className="fw-bold">
              {recipes_name.slice(4, 8).map((rec, index) => (
                <ListGroup.Item className="" key={index}>
                  {rec}
                </ListGroup.Item>
              ))}
            </Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <Card.Text className="d-flex align-items-center mt-3">
              <Rating
                style={{ maxWidth: 150 }}
                className="me-2"
                value={recipes[0]?.rating?.number}
                readOnly
              />
              <span>{recipes[0]?.rating?.number}</span>
            </Card.Text>
            <Card.Text className="d-flex align-items-center ">
              <HiOutlineHeart
                style={{ height: "40px", width: "50px" }}
                className="me-2 text-info"
              />
              {total_likes}
            </Card.Text>
          </Card.Text>
        </Card.Footer>
      </Card>

      <Container>
        <Marquee speed={200}>
          <h1 className="fs-1 font-bold p-5 mx-auto text-center text-info">
            You'll Also Love Recipe
          </h1>
          <h1 className="fs-1 font-bold p-5 mx-auto text-center text-info">
            You'll Also Love Recipe
          </h1>
          <h1 className="fs-1 font-bold p-5 mx-auto text-center text-info">
            You'll Also Love Recipe
          </h1>
        </Marquee>
        <Row xs={1} md={2} className="g-4 my-5 container-fluid ">
          {recipes.map((da, index) => (
            <Recipes da={da} key={index} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};


export default ViewDetails;