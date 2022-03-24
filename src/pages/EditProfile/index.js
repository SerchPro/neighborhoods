import React from 'react'
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import {startLogout, startUserUpdate}  from '../../actions/auth'
import { useSelector } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import { startAuthImgUpdate } from '../../actions/auth';
import Titlescreen from '../../components/Titlescreen';



const EditProfile = () => {
    const dispatch = useDispatch();

    const userfocus = useSelector(state => state.user)
    const {  user } = useSelector(state => state.auth)

    const hanleLogout = () =>{ dispatch(startLogout() )}

    const [ formValues, handleInputChange ] = useForm({
            username: user.username,
            email: user.email,
            birthday: user.birthday,
            name: user.name,
            phone: user.phone,
            bio: user.bio
        });

    /*if (user._id !== userfocus._id){
        return <Navigate to='/' />
    }*/

    const { username, email, birthday, name, phone, bio } = formValues;

    const handleSave = (e) =>{
        e.preventDefault();
        dispatch(startUserUpdate(user._id, formValues) )
        }

    const handleFileChange = (e) =>{
        e.preventDefault();
        const file = e.target.files[0];
        if(file){
            const formData = new FormData();
            formData.append('id',user._id);
            formData.append('archivo', file );
            dispatch( startAuthImgUpdate(formData));
        }
    }

    return (
        <div className='min-vh-100'>
            <Titlescreen title = {"Editar perfil"}/>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-9'>
                        <img
                            src={user.image_url}
                            className="edit-profile-img"
                            alt="profile"
                            />
                        <label htmlFor="fileuser"> <i className="fa-solid fa-pencil edit_user_file"></i>  Editar foto de perfil </label>
                        <input
                            type="file"
                            name ="archivo"
                            id="fileuser"
                            accept=".jpg, .jpeg, .png"
                            onChange={ handleFileChange }
                            />
                        <form onSubmit={handleSave} >
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
                                    >
                                </textarea>
                            </div>

                            <div className="form-group d-flex justify-content-end">
                                <button type="submit" className="btnGreenProfile"  > Guardar </button>
                            </div>

                            <br/>
                            <Link to="/change-password" className='d-flex justify-content-start linka'> 
                                <button  className="form-input-white" > Cambio de contraseña </button>
                            </Link>
                            <p onClick={hanleLogout} className="cerrar-sesion">  Cerrar sesión </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

//EditProfile.propTypes = {}

export default EditProfile