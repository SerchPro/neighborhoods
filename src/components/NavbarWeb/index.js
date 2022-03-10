import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavbarWeb = () => {
  return (

    <>
        <div className='col-3'>
            <ul className='ulFeed'>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/profile">Perfil</Link>
            </li>
            <li>
                <Link to="/emergencies">Emergencias</Link>
            </li>
            </ul>
            <button type="submit" className="btnGreen" > Nueva publicacion </button>
        </div>
    </>
  )
}

NavbarWeb.propTypes = {}

export default NavbarWeb