import React from 'react'
import Postalcode from '../../components/PostalCode/Postalcode';


const Address = () => {
    return(
        <div className="container-fluid login-container-address min-vh-100 " >
            <div className="row d-flex justify-content-center">
                <div className=" col-12 col-md-5 text-center">
                    <h5 className='titulo-addres'> ¡Ya casi estamos listos!</h5>
                    <h4 className='text-center mb-5 mt-5'> ¿Cuál es tu colonia?</h4>
                    <Postalcode/>
                </div>
            </div>
        </div>
    )
}

export default Address