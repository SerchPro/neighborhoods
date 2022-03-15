import React from 'react'
//import PropTypes from 'prop-types'

import {useNavigate } from 'react-router-dom'

const Titlescreen = ({title}) => {
    const navigate = useNavigate();

    const handleReturn = () =>{
        navigate( -1 );
    }
    return (
        <div className='d-flex justify-content-start  title-page noPadding'>
            <i className="fa-solid fa-chevron-left d-flex align-items-center iarrow" onClick={handleReturn}></i>
            <p className='text180 d-flex align-items-center m-0'> {title}</p>
        </div>
    )
}

//Titlescreen.propTypes = {}

export default Titlescreen