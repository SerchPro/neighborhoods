import React from 'react'
import PostalCode from '../../components/PostalCode';


const Address = () => {
    return(
        <div className="container-fluid login-container-n min-vh-100 " >
            <div className="row d-flex justify-content-center">
                <div className=" col-12 col-md-5 text-center">
                    <h5 className='titulo-addres'> ¡Ya casi estamos listos!</h5>
                    <h4 className='text-center mb-5 mt-5'> ¿Cuál es tu colonia?</h4>
                    <PostalCode/>
                </div>
            </div>
        </div>
    )
}

export default Address