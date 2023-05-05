import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Shared/Header/Header';
import Footer from '../pages/Home/Shared/Footer/Footer';

const Main = () => {
const [dark, set_dark] =useState(false)

const handleDark =() =>{
  set_dark(true)
}
const handleLight =() =>{
  set_dark(false)
}


  return (
    <div className={!dark?'bg-dark':'bg-white'} >
      <Header />
      <div className='border d-flex justify-content-end '>
          
   <Button className='' onClick={handleDark}>set_dark</Button>
                <Button className='me-5' onClick={handleLight}>white</Button>
            
       
      </div>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
