import React from 'react'
//import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { startNewAdress } from '../../actions/address';
import { startLoadNeighboorhoods } from '../../actions/neighborhood';
import { useForm } from '../../hooks/useForm';


const Address = () => {
    const {neighborhoods} = useSelector(state => state.neighborhoods);
    const { user} = useSelector(state => state.auth);
    
    const dispatch = useDispatch();
    const handleCp = async (e) =>{
        e.preventDefault();
        const data = {
            neighborhood,
            description,
            idUser: user._id,
            cp: cp
        }
        console.log(data)
        await dispatch(startNewAdress(data));
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
        console.log(cp)
        dispatch(startLoadNeighboorhoods(cp))
    }

    return(
        <div className="container-fluid login-container-n vh-100 h-100 " >
            <div className="row d-flex justify-content-center">
                <div className=" col-5 text-center">
                    <h1 className='titulo'> ¡Ya casi estamos listos!</h1>
                    <h3 className='text-center mb-5 mt-5'> ¿Cuál es tu colonia?</h3>
                    <h4 className='title-cp text-center'> Ingresa tu código postal para estar conectado con tu comunidad</h4>
                    <form onSubmit={ handleSearch } className="d-flex justify-content-center">
                        <input
                            id = "cp"
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
                                <label className="form-label" htmlFor='cp' style={{"fontSize": "15px"}}>Agrega una descripcion a tu código postal</label>
                                <input
                                    maxLength="100"
                                    type="text"
                                    value = {description}
                                    className="form-control input-cp"
                                    placeholder="Ejemplo: mi casa"
                                    name = "description"
                                    autoComplete='off'
                                    onChange={handleSelectChange}
                                />
                                <br/>
                                <button type="submit" className="btn btn-send-cp"  > Guardar direccion </button>
                            </form>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


//SetNeighborhood.propTypes = {}

export default Address