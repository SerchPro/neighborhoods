import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';
import './style.css'

const Nabvarmovil = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <div className=" container menuMovil d-md-none">

            <div className='row  align-items-center p-0'>
                <div className='col-3 d-flex justify-content-center p-0'>
                    <Link className='linka icon-movil' to="/">
                        <i className="fa-solid fa-house"></i> 
                    </Link>
                </div>
                <div className='col-2 d-flex justify-content-center p-0'>
                    <Link className='linka icon-movil' to="/myaddress">
                        <i className="fa-solid fa-location-dot imenu"></i>
                    </Link>
                </div>
                <div className='col-2 d-flex justify-content-center p-0'>
                    <Link className='linka icon-movil-plus' to="/create-post">
                        <i className="fa-solid fa-circle-plus"></i>
                    </Link>
                </div>
                <div className='col-2 d-flex justify-content-center p-0'>
                    <Link className='linka icon-movil' to="/emergencies">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </Link>
                </div>
                <div className='col-3  p-0'>
                    <Link to={`/profile/${user.username}`} className=' d-flex justify-content-center'>
                        <img
                            src={user.image_url}
                            className="profile-img-nav-movil"
                            alt="profile"
                            />
                    </Link>
                </div>

            </div>
        </div>
    )
}

//Nabvarmovil.propTypes = {}

export default Nabvarmovil