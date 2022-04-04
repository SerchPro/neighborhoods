import React from 'react'
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startChangePassword } from '../../actions/auth';
import Titlescreen from '../../components/Titlescreen/Titlescreen';
import './style.css'

const ChangePassword = props => {

    const dispatch = useDispatch()

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(startChangePassword(formValues))
    }


    const [ formValues, handleInputChange ] = useForm({

    currentPassword : '',
    newPassword : '',
    confirmnewPassword:  ''

    });

    const { currentPassword, newPassword, confirmnewPassword} =  formValues

    return (
        <div className='min-vh-100'>
            <Titlescreen title = {"Cambio de contraseña"}/>
            <div className='container'> 
                <div className='row d-flex justify-content-center p-0'>
                    <div className='col-12 col-md-9 pt-5'>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Contraseña Actual </label>
                                <input
                                    type="password"
                                    className="form-control formInputWhiteline-chp"
                                    placeholder="**********"
                                    name = "currentPassword"
                                    value = {currentPassword}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Nueva contraseña </label>
                                <input
                                    type="password"
                                    className="form-control formInputWhiteline-chp"
                                    placeholder="**********"
                                    name = "newPassword"
                                    value = {newPassword}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Confirmar nueva contraseña </label>
                                <input
                                    type="password"
                                    className="form-control formInputWhiteline-chp"
                                    placeholder="**********"
                                    name = "confirmnewPassword"
                                    value = {confirmnewPassword}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group d-flex justify-content-end">
                                <button type="submit" className="btnGreenProfile-chp"  > Guardar </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

//ChangePassword.propTypes = {}

export default ChangePassword