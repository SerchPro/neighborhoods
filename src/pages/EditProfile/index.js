import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import {startLogout}  from '../../actions/auth'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const EditProfile = props => {
    const dispatch = useDispatch();

    const {  url_user } = useSelector(state => state.auth)

    const hanleLogout = () =>{
        dispatch(startLogout() )
    }

const [ formValues, handleInputChange ] = useForm({
        username: 'serchPro',
        email: 'sergio@vexi.mx',
        birthday: '11/08/1996',
        name: 'Sergio sandoval',
        phone: '5519632073',
        bio: "hello"
    });

const { username, email, birthday, name, phone, bio } = formValues;

const handleLogin = (e) =>{
    e.preventDefault();
    }

return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <form onSubmit={handleLogin} className="formEditProfile">
                    <div className="form-group d-flex justify-content-end">
                        <button type="submit" className="btnGreenProfile"  > Guardar </button>
                    </div>
                    <div className='noPadding leftDiv'>
                        <img
                            src={url_user}
                            className="edit-profile-img"
                            alt="profile"
                            />
                    </div>
                    <div className='row form-edit-profile'>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label  className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text formUsernameWhite" id="inputGroupPrepend">@</span>
                                    <input
                                        type="text"
                                        className="form-control formInputWhiteline"
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
                                    className="form-control formInputWhiteline"
                                    placeholder="fecha de nacimiento"
                                    name = "birthday"
                                    value = {birthday}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Correo eléctronico </label>
                                <input
                                    type="email"
                                    className=" form-control formInputWhiteline"
                                    placeholder="name@ejemplo.com"
                                    name = "email"
                                    value = {email}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Nombre </label>
                                <input
                                    type="text"
                                    className="form-control formInputWhiteline"
                                    placeholder="Nombre"
                                    name = "name"
                                    value = {name}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>



                            

                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Celular </label>
                                <input
                                    type="number"
                                    className="form-control formInputWhiteline"
                                    placeholder="55-55-55-55-55"
                                    name = "phone"
                                    value = {phone}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                        </div>

                    </div>

                    <div className="form-group">
                    <label htmlFor='bio'  style={{"fontSize": "15px"}}>Bio </label>
                    <textarea placeholder="Biografia"
                        rows="3"
                        id="bio"
                        name = "bio"
                        value = {bio}
                        onChange = {handleInputChange}
                        required
                        className=' form-control formInputWhiteline'
                        ></textarea>
                    </div>


                    <br/>
                    <Link to="/change-password" className='d-flex justify-content-center linka'> 
                        <button  className="form-input-white"  > Cambio de contraseña </button>
                    </Link>

                    <p onClick={hanleLogout} >  Cerrar sesión </p>

                </form>


                
                
            </div>
        </div>
    </div>
    
  )
}

EditProfile.propTypes = {}

export default EditProfile