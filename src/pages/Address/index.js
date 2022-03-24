import React from 'react'
//import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import PostalCode from '../../components/PostalCode';


const Address = () => {
    const dispatch = useDispatch();
    return(
        <div className="container-fluid login-container-n vh-100 h-100 " >
            <div className="row">
                <div className="col-md-5  offset-md-1 col-12  " >
                    <h1 className='titulo'> Registrate para estar conectado con tu comunidad</h1>
                </div>
                <div className="col-md-3 offset-md-2 col-12">
                    <PostalCode/>
                </div>
            </div>
        </div>
    )
}


//SetNeighborhood.propTypes = {}

export default Address