import React from 'react'
import PostalCode from '../../components/PostalCode';


const Address = () => {
    return(
        <div className="container-fluid login-container-n vh-100 h-100 " >
            <div className="row d-flex justify-content-center">
                <div className=" col-12 col-md-5 text-center">
                    <h1 className='titulo'> ¡Ya casi estamos listos!</h1>
                    <h3 className='text-center mb-5 mt-5'> ¿Cuál es tu colonia?</h3>
                    <PostalCode/>
                </div>
            </div>
        </div>
    )
}

export default Address