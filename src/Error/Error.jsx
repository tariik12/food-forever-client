import React from 'react';
import error from '../assets/error_404.json'
import Lottie from "lottie-react";

const Error = () => {
    return (
        <div>
          <Lottie className='w-50 h-50 mx-auto p-5' animationData={error} loop={true} />
        </div>
    );
};

export default Error;