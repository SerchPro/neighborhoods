import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadNeighboorhoods } from '../../actions/neighborhood';
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import { startNewAdress } from '../../actions/address';
import Swal from 'sweetalert2';

const PostalCode = () => {

    const dispatch = useDispatch();
    const {neighborhoods} = useSelector(state => state.neighborhoods);
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate();

    const validateForm = () =>{
        if(!neighborhood){
            Swal.fire('Elige una colonia')
            return false
        }else if(!description){
            Swal.fire('Es necesario una descripción')
            return false
        }else if(!cp){
            Swal.fire('Es necesaria el cp')
            return false
        }
        return true
      }

    const handleCp = (e) =>{
        e.preventDefault();

        if(validateForm()){
            const data = {
                neighborhood,
                description,
                idUser:user._id,
                cp: cp
            }
            dispatch(startNewAdress(data));
            navigate(`/`);
        }
    }

    const [ formValues, handleInputChange ] = useForm({
        cp: '',
    });

    const { cp } = formValues;


    const [ selectValues, handleSelectChange ] = useForm({
        neighborhood: '',
        description: ''
    });

    
    const { neighborhood, description } = selectValues;


    const  handleSearch = (e) =>{
        e.preventDefault();
        if(!cp){
            Swal.fire('Se requiere de un código postal')
            return false
        }
        dispatch(startLoadNeighboorhoods(cp))
    }

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12'>
                    <h4 className='title-cp text-center'> Ingresa tu código postal para estar conectado con tu comunidad</h4>
                    <form onSubmit={ handleSearch } className="d-flex justify-content-center">
                        <input
                            id = "passwordlabel"
                            maxLength="10"
                            type="number"
                            value = {cp}
                            className="form-control input-cp"
                            placeholder="Escribe tu código postal"
                            name = "cp"
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-send-cp"  > Buscar cp </button>
                    </form>
                    <hr/>
                    <br/>
                    {
                        neighborhoods.length > 0 && (
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
                                    type="text"
                                    value = {description}
                                    className="form-control input-cp"
                                    placeholder="Agrega una descripcion a tu código postal"
                                    name = "description"
                                    autoComplete='off'
                                    onChange={handleSelectChange}
                                />
                                <br/>
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