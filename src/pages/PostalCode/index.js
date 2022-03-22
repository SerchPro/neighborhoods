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

    const handleCp = (e) =>{
        e.preventDefault();
        console.log("cp selected ", colonia)
        dispatch(activeNeighborhood(colonia))
        navigate(`/`);
    }

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
        <div className='container vh-100'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-6 '>
                    <h4 className='title-cp text-center'> Ingresa tu código postal para estar conectado con tu comunidad</h4>
                    <form onSubmit={ handleSearch } className="d-flex justify-content-center">
                        <input
                            id = "passwordlabel"
                            maxLength="100"
                            type="number"
                            value = {searchInput}
                            className="form-control input-cp"
                            placeholder="Escribe tu código postal"
                            name = "searchInput"
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-send-cp"  > Buscar cp </button>
                    </form>
                    <hr/>
                    <br/>
                    {
                        neighborhoods && (
                            <form onSubmit={handleCp} >
                                <select
                                    className="form-select  select-cp"
                                    aria-label=".form-select-sm example"
                                    name = "colonia"
                                    value = {colonia}
                                    onChange={ handleSelectChange}>
                                    <option >Elige una colonia</option>
                                    {neighborhoods.map((option,index)=> <option key={index} value={option}>{option}</option>)}
                                </select>
                                <br/>
                                <button type="submit" className="btn btn-send-cp"  > enviar </button>
                            </form>
                            
                        )
                    }
                </div>
                <div className='col-12 col-md-6'>

                </div>
            </div>
        </div>
    )
}

//index.propTypes = {}

export default PostalCode