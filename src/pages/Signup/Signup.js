import React from 'react'
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { StartRegister } from '../../actions/auth';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './style.css';

const Signup = () => {
    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, birthday, password, confirmPassword } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword ) return Swal.fire('Error', 'Las contraseñas son distintas', 'error')
        dispatch( StartRegister(formValues))
    }

    return (
        <div className='container-fluid login-container-signup  min-vh-100'>
            <div className='row'>
                <div className="col-md-5 offset-md-1  col-12">
                    <h1 className='titulo-signup'> Registrate para estar conectado con tu comunidad</h1>
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
                                    className="form-control form-input-signup"
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
                                className="form-control form-input-signup"
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
                                className="form-control form-input-signup"
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
                                className="form-control form-input-signup"
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
                                className="form-control form-input-signup"
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
                                <Link to="/login" className='noStyleLink'>
                                <button type="button" className=" btnBlue"> INICIAR SESIÓN </button>
                                </Link>
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

//Signup.propTypes = {}

export default Signup