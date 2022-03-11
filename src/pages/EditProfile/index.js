import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import {startLogout}  from '../../actions/auth'
import { useSelector } from 'react-redux';

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
        password: 'Paleontologo49',
        phone: '5519632073',
        bio: "hello"
    });

const { username, email, birthday, password, phone, bio } = formValues;

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
                    <div className='noPadding centerImg'>
                        <img
                            src={url_user}
                            className="edit-profile-img"
                            alt="profile"
                            />
                    </div>
                    <br/>
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

                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Contraseña </label>
                                <input
                                    type="password"
                                    className="form-control formInputWhiteline"
                                    placeholder="Contraseña"
                                    name = "password"
                                    value = {password}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                        </div>
                        <div className='col-12 col-md-6'>
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

                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Bio </label>
                                <input
                                    type="text"
                                    className="form-control formInputWhiteline"
                                    placeholder="hola mi nombre es ...."
                                    name = "confirmPassword"
                                    value = {bio}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                    </div>

                    <br/>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="form-input-white"  > Cambio de contraseña </button>
                    </div>

                    <p onClick={hanleLogout} >  Cerrar sesión </p>

                </form>


                
                
            </div>
        </div>
    </div>
    
  )
}

EditProfile.propTypes = {}

export default EditProfile