import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Shared/Header/Header';
import Footer from '../pages/Home/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
          <Header></Header>
          <Container>
          <Outlet></Outlet>
          </Container>
           <Footer></Footer>
           
        </>
    );
};

export default Main;