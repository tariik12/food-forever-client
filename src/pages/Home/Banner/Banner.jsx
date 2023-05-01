import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";

const Banner = () => {

const [useLotti, setLotti] = useState({});
useEffect(() =>{
    fetch('http://localhost:5000/lotti')
    .then(res =>res.json())
    .then(data=> setLotti(data))
},[])
if (!useLotti) return <p>Loading...</p>
    return (
    
            <div>
            <Lottie animationData={useLotti} loop={true} />
            
            </div>
       
    );
};

export default Banner;