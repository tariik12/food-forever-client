import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Shared/Header/Header';
import Footer from '../pages/Home/Shared/Footer/Footer';

const Main = () => {
const [dark, set_dark] =useState(false)
const [toggle ,set_toggle] = useState(true)

const handleDark =() =>{
  set_dark(true)
  set_toggle(false)
}
const handleLight =() =>{
  set_dark(false)
  set_toggle(true)
}


  return (
    <div className={!dark?'bg-dark':'bg-white'} >
      <Header />
      <div className=' d-flex justify-content-end me-5 mt-5'>
       {
        toggle ? <Button className='me-5 ' onClick={handleDark}>white</Button> :
                <Button className='me-5 ' onClick={handleLight}>Dark</Button>
       }   
   
            
       
      </div>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
