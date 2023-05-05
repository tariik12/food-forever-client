import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Banner from '../Banner/Banner';
import AboutItaly from '../AboutItaly/AboutItaly';
import Categories from '../Categories/Categories';
import Chefs from '../Chefs/Chefs';
import { AuthContext } from '../../../provider/AuthProvider';


const Home = () => {
  const { loading } = useContext(AuthContext);

  const data = useLoaderData();
 
  if(!data){
    loading(true)
  }
  return (
    <>
      <Banner />

      <Container className='mx-auto mt-5'>
        <Marquee speed={200}>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian Popular Chef 
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
           They are Famous in Italian Chef
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
           If you Want Learn Then Register Enrol Quickly
          </h1>
        </Marquee>

        <Row xs={1} md={3} className='g-4'>
          {data.map((da, index) => (
            <Chefs da={da} key={index} />
          ))}
        </Row>
      </Container>
      
      <AboutItaly />
      <div >
        <Marquee className='mt-0 ' speed={200}>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian chef Life
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian chef Life
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian chef Life
          </h1>
        </Marquee>

        <Row xs={1} md={3} className='g-4'>
          <Categories />
        </Row>
      </div>

     
    </>
  );
};

export default Home;
