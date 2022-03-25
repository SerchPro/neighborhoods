import React from 'react'
//import PropTypes from 'prop-types'
import '../style.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
        username: '',
        password: ''
    });

    const { username, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( startLogin(username, password ))
    }
    return(
        <div className="container-fluid login-container-n min-vh-100 " >
            <div className="row">
                <div className="col-md-5  offset-md-1 col-12  " >
                    <h1 className='titulo'> Registrate para estar conectado con tu comunidad</h1>
                </div>
                <div className="col-md-4 offset-md-1 col-12">
                    <h3 className='inicia-sesion'>Inicia sesión</h3>
                    <form onSubmit={ handleLogin}>
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
                            <label className="form-label " style={{"fontSize": "15px", }}>Password</label>
                            <input
                                id = "passwordlabel"
                                type="password"
                                value = {password}
                                className="form-control formInput"
                                placeholder="Contraseña"
                                name = "password"
                                onChange={ handleInputChange}
                                required
                            />
                            <div className="form-text textBlue">
                                ¿Has olvidado tu contraseña?
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btnGreen"  > INICIAR SESIÓN </button>
                        </div>
                        <div className="form-group">
                                <Link to="/signup" className='noStyleLink'>
                                    <button type="button" className="btnBlue" >
                                    REGISTRATE AQUÍ
                                    </button>
                                </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


//Login.propTypes = {}

export default Login