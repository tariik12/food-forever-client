import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { HiArrowRight,  } from "react-icons/hi";
import { AuthContext } from '../../../provider/AuthProvider';

const Categories = () => {
  const { loading } = useContext(AuthContext);
  const [chefLife, setChefLife] = useState([])
  const [showAll, setShowAll] = useState(false)

    const handleShowAll =() =>{
        setShowAll(true)
    }

  useEffect(() =>{
    fetch('https://food-forever-server-tariik12.vercel.app/aboutChefLife')
  .then(res => res.json())
  .then(data =>setChefLife(data))
  .catch(error =>console.log(error))
  },[])
  if(!chefLife){
    loading(true)
  }
  return (
    <div className='w-100'>
    <Row xs={1} md={3}  className="g-4 w-100 my-5">
      {chefLife.slice(0,showAll ? 10 : 3).map((_, idx) => (
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
    <div className='d-flex justify-content-center mb-4'>
      {!showAll && <span onClick={handleShowAll}>

      <Button  className='text-center border '>See More</Button>
        </span>}
      </div>
 </div>
  );
};

export default Categories;
