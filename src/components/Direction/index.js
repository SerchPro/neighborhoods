import React from 'react'
import { useDispatch } from 'react-redux'
import { activeAddress } from '../../actions/address'
import { useNavigate } from "react-router-dom";

//import PropTypes from 'prop-types'

const Direction = ({address, index} ) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleDirection = () =>{
        dispatch(activeAddress(address))
        navigate(`/`);
    }
    return (
        <tr onClick={handleDirection} className="tr-colonia">
            <th scope="row">{index + 1}</th>
            <td>{address.neighborhood}</td>
            <td>{address.description}</td>
            <td className='centerDiv'>
                <span>...</span>
            </td>
        </tr>


    )
}

//Direction.propTypes = {}

export default Direction