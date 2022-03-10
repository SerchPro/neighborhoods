import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const EditProfile = props => {
  const dispatch = useDispatch();

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
    <form onSubmit={handleLogin}>
      <div className="form-group">
          <label  className="form-label">Username</label>
          <div className="input-group has-validation">
              <span className="input-group-text formUsernameWhite" id="inputGroupPrepend">@</span>
              <input
                  type="text"
                  className="form-control formInputWhite"
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
              className="form-control formInputWhite"
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
              className="form-control formInputWhite"
              placeholder="name@ejemplo.com"
              name = "email"
              value = {email}
              onChange = {handleInputChange}
              required
          />
      </div>


      <div className="form-group">
          <label className="form-label" style={{"fontSize": "15px"}}>Celular </label>
          <input
              type="number"
              className="form-control formInputWhite"
              placeholder="55-55-55-55-55"
              name = "phone"
              value = {phone}
              onChange = {handleInputChange}
              required
          />
      </div>

      <div className="form-group">
          <label className="form-label" style={{"fontSize": "15px"}}>Contraseña </label>
          <input
              type="password"
              className="form-control formInputWhite"
              placeholder="Contraseña"
              name = "password"
              value = {password}
              onChange = {handleInputChange}
              required
          />
      </div>

      <div className="form-group">
          <label className="form-label" style={{"fontSize": "15px"}}>Bio </label>
          <input
              type="text"
              className="form-control formInputWhite"
              placeholder="hola mi nombre es ...."
              name = "confirmPassword"
              value = {bio}
              onChange = {handleInputChange}
              required
          />
      </div>

      <div className="form-group">
          <button type="submit" className="btnGreen"  > INSCRIBIRSE </button>
      </div>

      <div className="form-group">
          <button type="button" className=" btnBlue">
              <Link to="/login" className='noStyleLink'>  INICIAR SESIÓN </Link>
          </button>
      </div>
    </form>
  )
}

EditProfile.propTypes = {}

export default EditProfile