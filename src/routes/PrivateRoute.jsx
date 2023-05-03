import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({Children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    console.log(location)
    if(loading){
        return <Spinner animation="border" variant="info" />
    }
    if(user){
        return Children;
    }
    return <Navigate  state={{from:location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;