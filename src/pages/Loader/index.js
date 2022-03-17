import React from 'react'
//import PropTypes from 'prop-types'

const Loader = () => {
  return (
    <div className='background-loading  d-flex align-items-center'>
        <div className='container d-flex justify-content-center '>
            <div className='row '>
                <div className='col'>
                    <div className="loader"></div>
                    <br/>
                    <h1> Neighborhoods</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

//Loader.propTypes = {}

export default Loader