import React from 'react';
//import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children, uid }) => {

    return !!uid
    ? children
    : <Navigate to='/login' />
}

//PrivateRoute.propTypes = {}
