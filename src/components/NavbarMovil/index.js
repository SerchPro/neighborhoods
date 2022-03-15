import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';

const NabvarMovil = () => {
    const { image_url } = useSelector(state => state.user);

    return (
        <div className=" container menuMovil d-md-none">

            <div className='row  align-items-center noPadding'>
                <div className='col-3 d-flex justify-content-center noPadding'>
                    <Link className='linka icon-movil' to="/">
                        <i className="fa-solid fa-house"></i> 
                    </Link>
                </div>
                <div className='col-2 d-flex justify-content-center noPadding'>
                    <Link className='linka icon-movil' to="/search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </div>
                <div className='col-2 d-flex justify-content-center noPadding'>
                    <Link className='linka icon-movil-plus' to="/create-post">
                        <i className="fa-solid fa-circle-plus"></i>
                    </Link>
                </div>
                <div className='col-2 d-flex justify-content-center noPadding'>
                    <Link className='linka icon-movil' to="/emergencies">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </Link>
                </div>
                <div className='col-3  noPadding'>
                    <Link to="/profile" className=' d-flex justify-content-center'>
                        <img
                            src={image_url}
                            className="profile-img-nav-movil"
                            alt="profile"
                            />
                    </Link>
                </div>

            </div>
        </div>
    )
}

NabvarMovil.propTypes = {}

export default NabvarMovil