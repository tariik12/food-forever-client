import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { HiArrowRight, HiOutlineHeart } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../provider/AuthProvider';

const AboutItaly = () => {
  const { loading } = useContext(AuthContext);
  const [italianCookingLearn, setItalianCookingLearn] = useState([])
  const [showAll, setShowAll] = useState(false)

  const handleShowAll =() =>{
      setShowAll(true)
  }


  useEffect(() =>{
    fetch('https://food-forever-server-tariik12.vercel.app/italianCookingLearn')
  .then(res => res.json())
  .then(data =>setItalianCookingLearn(data))
  .catch(error =>console.log(error))
  },[loading])

  return (
    <div className='mx-auto mt-5'>
      <Marquee speed={200}>
          <h1 className='fs-1 font-bold pb-5 mx-auto text-center text-info'>
            Italian Cooking Learn
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            This is Popular Learn  Institute
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
           If you Want Learn Then Register Enrol Quickly
          </h1>
        </Marquee>
          <Row xs={1} md={3}  className="g-4 my-5 py-5 w-100 ">
    {italianCookingLearn.slice(0,showAll ? 9 : 3).map((_, idx) => (
      <Col key={idx}>
        <Card style={{ height:'40rem'}}>
        <LazyLoad   threshold={0.95}>
          <Card.Img style={{height:'20rem'}} variant="top" src={_.image_Link} />
        </LazyLoad>
        <Card.Text className=' ms-3 mt-3 mb-0 fs-4 fw-bold'>
              Learn :<HiArrowRight
              style={{ width: "30px", height: "40px" }}
              className=" text-info"
            />
            </Card.Text>
          <Card.Body>
            <Card.Title><span> Instituted Name : </span> {_.school_name}</Card.Title>
            <Card.Text>
             <strong>Course : </strong> {_.course_name}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex align-items-between mt-3'>
            <Card.Text className='d-flex align-items-center mt-3 me-5'>
              <Rating style={{ maxWidth: 150 }} className='me-2'  value={(_.rating)} readOnly />
              <span>{_.rating}</span>
            </Card.Text>
              <HiOutlineHeart style={{height:'40px', width:'50px'}} className=' ms-5 text-info mt-2 '/>
        </Card.Footer>
        </Card>
      </Col>
    ))}
  </Row>
  <div className='d-flex justify-content-center mb-4'>
      {!showAll && <span onClick={handleShowAll}>

      <Button  className='text-center border '>See More</Button>
        </span>}
      </div>
    </div>
    
  );
};

export default AboutItaly;
