import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadNeighboorhoods } from '../../actions/neighborhood';
import Loader from '../../pages/Loader';
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import { startNewAdress } from '../../actions/address';

const PostalCode = () => {

    const dispatch = useDispatch();
    const {neighborhoods} = useSelector(state => state.neighborhoods);
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleCp = (e) =>{
        e.preventDefault();
        const data = {
            neighborhood,
            description,
            idUser:user._id
        }
        startNewAdress(data)
        navigate(`/`);
    }

    const [ formValues, handleInputChange ] = useForm({
        searchInput: '',
    });
    const { searchInput } = formValues;


    const [ selectValues, handleSelectChange ] = useForm({
        neighborhood: '',
        description: ''
    });

    
    const { neighborhood, description } = selectValues;


    const  handleSearch = (e) =>{
        e.preventDefault();
        dispatch(startLoadNeighboorhoods(searchInput))
    }

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12'>
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
                                    name = "neighborhood"
                                    value = {neighborhood}
                                    onChange={ handleSelectChange}>
                                    <option >Elige una colonia</option>
                                    {neighborhoods.map((option,index)=> <option key={index} value={option}>{option}</option>)}
                                </select>
                                <br/>
                                <input
                                    maxLength="100"
                                    type="number"
                                    value = {description}
                                    className="form-control input-cp"
                                    placeholder="Agrega una descripcion a tu código postal"
                                    name = "description"
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <button type="submit" className="btn btn-send-cp"  > enviar </button>
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