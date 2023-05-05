import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { HiArrowRight,  } from "react-icons/hi";

const Categories = () => {

  const [chefLife, setChefLife] = useState([])

  useEffect(() =>{
    fetch('https://food-forever-server-tariik12.vercel.app/aboutChefLife')
  .then(res => res.json())
  .then(data =>setChefLife(data))
  .catch(error =>console.log(error))
  },[])
  return (
    <Row xs={1} md={3}  className="g-4 w-100 my-5">
      {chefLife.map((_, idx) => (
        <Col key={idx}>
          <Card style={{ height:'25rem'}}>
          <Card.Text className='text-center pt-5 fs-1 fw-bold'>
                {_.icon}
              </Card.Text>
          <Card.Text className=' ms-3 mb-0 fs-4 fw-bold'>
                Chef Life<HiArrowRight
                style={{ width: "30px", height: "40px" }}
                className=" text-info"
              />
              </Card.Text>
            <Card.Body>
              <Card.Title><span>Title : </span> {_.title}</Card.Title>
              <Card.Text>
                {_.feature}
              </Card.Text>
              
              <Card.Text>
               <strong>Description :</strong> {_.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Categories;
