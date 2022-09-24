import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Login/hooks/useAuth';

const PrivateRoute = ({children}) => {
    // const {children, ...rest} = props;
    const {user, isLoading} = useAuth();
  
    if(isLoading){
        return <Spinner animation="border" variant="dark" />
    }
    return (
        user.email ? children 
        : 
        <Navigate to="/login" />
    );
};

export default PrivateRoute;