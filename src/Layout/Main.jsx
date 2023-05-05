import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Shared/Header/Header';
import Footer from '../pages/Home/Shared/Footer/Footer';
import {  BsSun ,BsBrightnessHigh } from "react-icons/bs";

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
      <div className=' d-flex justify-content-center me-5 my-5'>
       {
        toggle ? < BsBrightnessHigh className='me-5 fs-1 fw-bold text-white'  onClick={handleDark}/> :< BsSun className='me-5 fs-1 fw-bold ' onClick={handleLight}/>
                
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
