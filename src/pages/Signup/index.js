import React from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';


import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { StartRegister } from '../../actions/auth';
import { Link } from "react-router-dom";

import '../style.css';

const Signup = () => {
    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
        username: 'serchPro',
        email: 'sergio@vexi.mx',
        birthday: '11/08/1996',
        password: 'Paleontologo49',
        confirmPassword: 'Paleontologo49'
    });

    const { username, email, birthday, password, confirmPassword } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("click", formValues)
        if(password !== confirmPassword ) return Swal.fire('Error', 'Las contraseñas son distintas', 'error')

        dispatch( StartRegister(formValues))
        //console.log(formValues)
    }

    return (
        <div className='container-fluid login-container-n'>
            <div className='row'>
                <div className="col-md-5 offset-md-1  col-12">
                    <h1 className='titulo'> Registrate para estar conectado con tu comunidad</h1>
                </div>
                <div className="col-md-4 offset-md-1 col-12">
                    <h3>Registrate</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label  className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text formUsername" id="inputGroupPrepend">@</span>
                                <input
                                    type="text"
                                    className="form-control formInput"
                                    aria-describedby="inputGroupPrepend"
                                    placeholder="username"
                                    name = "username"
                                    value = {username}
                                    onChange={ handleInputChange}
                                    required/>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{"fontSize": "15px"}}> Fecha de nacimiento </label>
                            <input
                                type="date"
                                className="form-control formInput"
                                placeholder="fecha de nacimiento"
                                name = "birthday"
                                value = {birthday}
                                onChange = {handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{"fontSize": "15px"}}>Email </label>
                            <input
                                type="email"
                                className="form-control formInput"
                                placeholder="name@ejemplo.com"
                                name = "email"
                                value = {email}
                                onChange = {handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{"fontSize": "15px"}}>Contraseña </label>
                            <input
                                type="password"
                                className="form-control formInput"
                                placeholder="Contraseña"
                                name = "password"
                                value = {password}
                                onChange = {handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" style={{"fontSize": "15px"}}>Repite tu contraseña </label>
                            <input
                                type="password"
                                className="form-control formInput"
                                placeholder="Repita la contraseña"
                                name = "confirmPassword"
                                value = {confirmPassword}
                                onChange = {handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btnGreen"  > INSCRIBIRSE </button>
                        </div>
                        <p className='text-center'> ¿ Ya tienes una cuenta ?</p>
                        <div className="form-group">
                            <button type="button" className=" btnBlue">
                                <Link to="/login" className='noStyleLink'>  INICIAR SESIÓN </Link>
                            </button>
                        </div>
                    </form>

                    <hr/>
                    <p className='textServicios text-center'>Al registrarte aceptas nuestros 
                        <span className='textBlue'> Terminos de servicio</span> y 
                        <span className='textBlue'> Politica de Privacidad</span></p>
                </div>
            </div>
        </div>

    )
}

Signup.propTypes = {}

export default Signup