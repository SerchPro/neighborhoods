import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavbarWeb = () => {
  return (

    <div className='container container-navbar-web'>
        <div className='row noPadding'>
            <div className='col-12 noPadding'>
                <ul className='ulFeed'>
                    <li>
                        <Link className='linka' to="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className='linka' to="/profile">
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link className='linka' to="/emergencies">
                            Emergencias
                        </Link>
                    </li>
                </ul>
                
            </div>
            <div className='col-12 noPadding'>
            <button type="submit" className="btnGreen" > Nueva publicacion </button>
            </div>
        </div>
    </div>
  )
}

NavbarWeb.propTypes = {}

export default NavbarWeb