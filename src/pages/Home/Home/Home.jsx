import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Banner from '../Banner/Banner';
import AboutItaly from '../AboutItaly/AboutItaly';
import Categories from '../Categories/Categories';
import Chefs from '../Chefs/Chefs';

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner />

      <Container className='mx-auto mt-5'>
        <Marquee speed={200}>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian Top Chef
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian Top Chef
          </h1>
          <h1 className='fs-1 font-bold p-5 mx-auto text-center text-info'>
            Italian Top Chef
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
        <Marquee className='mt-0 border border-danger' speed={200}>
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
