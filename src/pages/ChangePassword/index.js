import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startChangePassword } from '../../actions/auth';
import Titlescreen from '../../components/Titlescreen';


const ChangePassword = props => {

    const dispatch = useDispatch()

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(startChangePassword(formValues))
    }


    const [ formValues, handleInputChange ] = useForm({

    currentPassword : 'Paleontologo49',
    newPassword : 'Paleontologo45',
    confirmnewPassword:  'Paleontologo45'

    });

    const { currentPassword, newPassword, confirmnewPassword} =  formValues

    return (
        <div className=' backgroud-100vh'>
            <Titlescreen title = {"Cambio de contraseña"}/>
            <div className='container'> 
                <div className='row d-flex justify-content-center noPadding'>
                    <div className='col-12 col-md-9 pt-5'>
                        <form onSubmit={handleLogin} className="formEditProfile">
                            <div className="form-group">
                                <label className="form-label" style={{"fontSize": "15px"}}>Contraseña Actual </label>
                                <input
                                    type="password"
                                    className="form-control formInputWhiteline"
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
                                    className="form-control formInputWhiteline"
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
                                    className="form-control formInputWhiteline"
                                    placeholder="**********"
                                    name = "confirmnewPassword"
                                    value = {confirmnewPassword}
                                    onChange = {handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group d-flex justify-content-end">
                                <button type="submit" className="btnGreenProfile"  > Guardar </button>
                            </div>

                        </form>


                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

ChangePassword.propTypes = {}

export default ChangePassword