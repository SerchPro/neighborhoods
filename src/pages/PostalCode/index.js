import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNeighborhood, startLoadNeighboorhoods } from '../../actions/neighborhood';
import Loader from '../Loader';
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";

const PostalCode = () => {

    const dispatch = useDispatch();
    const {neighborhoods} = useSelector(state => state.neighborhoods);
    const navigate = useNavigate();
    /*if (!neighborhoods){
            <Loader/>
        }*/
    //console.log(neighborhoods)

    const handleCp = (e) =>{
        e.preventDefault();
        console.log("cp selected ", colonia)
        dispatch(activeNeighborhood(colonia))
        navigate(`/`);
    }

    const test = [ 
        {"id": 1, "name": "sergio"}, {"id": 1, "name": "eduardo"}
    ]

    const [ formValues, handleInputChange ] = useForm({
        searchInput: '',
    });

    const [ selectValues, handleSelectChange ] = useForm({
        colonia: '',
    });

    const { searchInput } = formValues;
    const { colonia } = selectValues;


    const  handleSearch = (e) =>{
        e.preventDefault();
        console.log("************* searchInput",searchInput)
        dispatch(startLoadNeighboorhoods(searchInput))
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={ handleSearch }>
                        <input
                            id = "passwordlabel"
                            maxLength="100"
                            type="number"
                            value = {searchInput}
                            className="form-control btnwhiteSearching"
                            placeholder="Escribe tu código postal"
                            name = "searchInput"
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn-create-post"  > Buscar cp </button>
                    </form>
                    {
                        neighborhoods && (
                            <form onSubmit={handleCp}>
                                <select
                                    className="form-select form-select-lg select-category"
                                    aria-label=".form-select-sm example"
                                    name = "colonia"
                                    value = {colonia}
                                    onChange={ handleSelectChange}>
                                    <option >Elige una colonia</option>
                                    {neighborhoods.map((option,index)=> <option key={index} value={option}>{option}</option>)}
                                </select>
                                <button type="submit" className="btn-create-post"  > enviar </button>
                            </form>
                            
                        )
                    }
                </div>
            </div>
        </div>
    )
}

//index.propTypes = {}

export default PostalCode