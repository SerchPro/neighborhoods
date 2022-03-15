import React from 'react';
//import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom'
 
export const PublicRoute = ({ children, uid }) => {
  console.log("children", children)
  return !!uid
    ? <Navigate to='/' />
    : children
 
}

//PublicRoute.propTypes = {}
