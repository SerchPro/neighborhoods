import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { startAddressUpdate } from '../../actions/auth';

//import PropTypes from 'prop-types'

const Direction = ({address, index} ) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleDirection = () =>{
        dispatch(startAddressUpdate(address))
        navigate(`/`);
    }
    return (
        <tr  className="tr-colonia">
            <th scope="row" onClick={handleDirection}>{index + 1}</th>
            <td onClick={handleDirection}>{address.neighborhood}</td>
            <td onClick={handleDirection}>{address.description}</td>
            <td className='centerDiv'>
                <span>...</span>
            </td>
        </tr>


    )
}

//Direction.propTypes = {}

export default Direction