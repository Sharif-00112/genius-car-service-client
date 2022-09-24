import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Login/hooks/useAuth';

const PrivateRoute = ({children}) => {
    // const {children, ...rest} = props;
    const {user, isLoading} = useAuth();
  
    if(isLoading){
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        user.email ? children 
        : 
        <Navigate to="/login" />
    );
};

export default PrivateRoute;